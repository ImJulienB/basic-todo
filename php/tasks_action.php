<?php

require("db_connect.php");

if (isset($_GET["action"])) { // Checking if "action" exists as a GET parameter
	$action = $_GET["action"]; // Grabbing its value
	
	switch ($action) { // Checking the value of the action variable
		case "add":
			// Adding an element
			if (isset($_GET["message"])) { // Checking if a message was added to the GET request
				// Grabbing date's value
				//$date = $_GET["date"];
				// Grabbing message's value + SQL injections proofing
				$date = $db->quote($_GET["date"]);
				$message = $db->quote($_GET["message"]);
				$prepare = "INSERT INTO task (date, name) VALUES ($date, $message)";
				$add = $db->prepare($prepare); // Preparing the request
				$add->execute(); // Executing the request 
				echo "success";
			}
			break;

		case "update":
			// Editing an element
			if (isset($_GET["id"]) && isset($_GET["message"])) { // Checking if "id" and "name" exists as a GET parameter
				$message = $_GET["message"]; // Grabbing their values
				$id = $_GET["id"];
				$update = $db->prepare("UPDATE task SET 'name' = :message WHERE 'id' = :id"); // Preparing the request
				$update->bindValue(":message", $message); // Binding values
				$update->bindValue(":id", $id);
				$update->execute(); // Executing the request
			}
			break;

		case "remove":
			// Removing an element
			if (isset($_GET["id"])) { // Checking if "id" exists as a GET parameter
				$id = $_GET["id"]; // Grabbing its value
				$remove = $db->prepare("DELETE FROM task WHERE id = :id"); // Preparing the request
				$remove->bindValue(":id", $id); // Binding values
				$remove->execute(); // Executing the request
			}
			break;
	}
}

?>