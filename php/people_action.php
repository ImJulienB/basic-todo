<?php

require("db_connect.php");

if (isset($_GET["action"])) { // Checking if "action" exists as a GET parameter
	$action = $_GET["action"]; // Grabbing its value
	
	switch ($action) { // Checking the value of the action variable
		case "add":
			// Adding an element
			if (isset($_GET["name"])) { // Checking if a content was added to the GET request
				$name = htmlspecialchars($_GET["name"]); // Grabbing content's value + SQL injections proofing
				$name = $db->quote($name); // Putting the content in quotes just to avoid troubles
				$userid = $_COOKIE["userid"];
				$prepare = "INSERT INTO people (name, userid) VALUES ($name, $userid)"; // Storing the request in a string variable
				$add = $db->prepare($prepare); // Preparing the request
				$add->execute(); // Executing the request
			}
			break;

		case "remove":
			// Removing an element
			if (isset($_GET["id"])) { // Checking if "id" exists as a GET parameter
				$id = $_GET["id"]; // Grabbing its value
				$remove = $db->prepare("DELETE FROM people WHERE id = :id"); // Preparing the request
				$remove->bindValue(":id", $id); // Binding values
				$remove->execute(); // Executing the request

				// Let's do the same for every tasks affected to this person
				$remove = $db->prepare("DELETE FROM task WHERE peopleid = :id");
				$remove->bindValue(":id", $id);
				$remove->execute();
			}
			break;
	}
}

?>