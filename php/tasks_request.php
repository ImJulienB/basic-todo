<?php

require("db_connect.php");

$request = $db->prepare("SELECT t.*, p.name
						FROM task AS t
						INNER JOIN people AS p
						WHERE p.id = t.peopleid"); // Preparing the request to grab everything from the task table
$request->execute(); // Firing it

$response = $request->fetchAll(PDO::FETCH_ASSOC); // Fetching data from the request

echo json_encode($response); // Encoding it in JSON and sending it back to the AJAX script for display

?>