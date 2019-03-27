<?php

require("db_connect.php");

$request = $db->prepare("SELECT * FROM people WHERE userid = :userid ORDER BY name"); // Preparing the request to grab everything from the people table
$request->bindValue(":userid", $_COOKIE["userid"]);
$request->execute(); // Firing it

$response = $request->fetchAll(PDO::FETCH_ASSOC); // Fetching data from the request

echo json_encode($response); // Encoding it in JSON and sending it back to the AJAX script for display

?>