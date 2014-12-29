<?php

/*

CREATE TABLE `items` (
  `item_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) DEFAULT NULL,
  `is_done` int(11) DEFAULT '0',
  PRIMARY KEY (`item_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

*/

class ItemsAPI {

	private $db;
	private $json;

	function __construct($db) {
		$this->db = $db;
		$this->json = new stdClass;
	}

	function return_json() {
		// echo json and encodes numeric strings as numbers
		echo json_encode($this->json,JSON_NUMERIC_CHECK);
		exit;
	}

	// route the url

	function route($route) {
		$json = $this->json; 										// shortcut to the class variable
		$post = json_decode(file_get_contents("php://input"));		// read the post vars as json

		switch ($route) {
			case "delete":
				$json->deleted = $this->delete($post->item_id);
				$this->return_json();
				break;

			case "init":
				sleep(1);	// using this for an example of the spinner in the app
				$json->items = $this->items();
				$this->return_json();
				break;

			case "insert":
				$insert_id = $this->insert($post);
				$json->item = $this->item_by_id($insert_id);
				$this->return_json();
				break;

			case "check-item":
				$this->check_item($post);
				exit;
				break;
		}
	}

	// ------------------------------------------------------------------------------
	// class methods

	function items() {
		$query = "SELECT * FROM items";
		$sql = $this->db->query($query);
		$items = $sql->fetchAll(PDO::FETCH_OBJ);

		return $items;
	}

	function insert($post) {
		if (!trim($post->name)) {
			return false;
		}
		$query = "INSERT INTO items SET name = :name";
		$sql = $this->db->prepare($query);
		$sql->bindValue(":name",$post->name);
		
		if ($sql->execute()) {
			return $this->db->lastInsertId();
		}
		return false;
	}

	function check_item($post) {
		$query = "UPDATE items SET is_done = :is_done WHERE item_id = :item_id";
		$sql = $this->db->prepare($query);
		$sql->bindValue(":is_done",$post->is_done);
		$sql->bindValue(":item_id",$post->item_id);
		return $sql->execute();
	}

	function delete($item_id) {
		$query = "DELETE FROM items WHERE item_id = :item_id";
		$sql = $this->db->prepare($query);
		$sql->bindValue(":item_id",$item_id);
		return $sql->execute();
	}

	function item_by_id($item_id) {
		$query = "SELECT * FROM items WHERE item_id = :item_id";
		$sql = $this->db->prepare($query);
		$sql->bindValue(":item_id",$item_id);
		$sql->execute();
		return $sql->fetchObject();
	}
}