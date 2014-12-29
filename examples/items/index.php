<?php

require("api/db_connection.php");
require("api/pdo.class.php");
require("api/items.class.php");

// url routing
$request_uri = explode("/",$_SERVER['REQUEST_URI']);
$route = filter_var($request_uri[2],FILTER_SANITIZE_URL);

// instantiate db and api
$db = new DB(DB_HOST,DB_USER,DB_PASS,DB_NAME);
$items = new ItemsAPI($db);
$items->route($route);

require("app/app.html");