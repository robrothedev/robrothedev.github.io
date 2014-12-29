<?php

class DB extends PDO {

	function __construct($db_host,$db_user,$db_pass,$db_name) {
        try {
			parent::__construct("mysql:dbname=" . $db_name . ";host=" . $db_host,$db_user,$db_pass);
		}
		catch (PDOException $e) { // connection failed
		    $error_message = "Error connecting to database : " . $e->getMessage();
			echo json_encode(array("error_message"=>$error_message));
			exit;
		}
	}
}