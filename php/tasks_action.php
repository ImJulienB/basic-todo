<?php

require("db_connect.php");

if (isset($_GET["action"])) { // Checking if "action" exists as a GET parameter
	$action = $_GET["action"]; // Grabbing its value
	
	switch ($action) { // Checking the value of the action variable
		case "add":
			// Adding an element
			if (isset($_GET["name"])) { // Checking if a message was added to the GET request
				// Grabbing its value + SQL injections proofing
				$message = htmlspecialchars($_POST["name"]);
				$add = $db->prepare("INSERT INTO task ('date', 'name') VALUES (CURRENT_DATE(), :message)"); // Preparing the request
				$add->bindValue(":message", $message); // Binding values
				$add->execute(); // Executing the request
				$response["success"] = 1; // This is an array meant to store reponses for service users, it'll be encoded in json
				$response["message"] = "Task added successfully";
			} else { // If there are no message then
				$response["success"] = 0;
				$response["message"] = "Couldn't add the task: no content specified";
			}
			break;
		case "remove":
			// Removing an element
			if (isset($_GET["id"])) { // Checking if "id" exists as a GET parameter
				$id = $_GET["id"]; // Grabbing its value
				$remove = $db->prepare("DELETE FROM task WHERE id = :id"); // Preparing the request
				$remove->bindValue(":id", $id); // Binding values
				$remove->execute(); // Executing the request
				$response["success"] = 1; // This is an array meant to store reponses for service users, it'll be encoded in json
				$response["message"] = "Task Removed successfully";
			} else { // If there are no ID
				$response["success"] = 0;
				$response["message"] = "Couldn't remove the task: no ID specified";
			}
			break;


		case "update":
			// Editing an element
			if (isset($_GET["id"]) && isset($_GET["name"])) { // Checking if "id" and "name" exists as a GET parameter
				$message = $_GET["name"]; // Grabbing their values
				$id = $_GET["id"];
				$update = $db->prepare("UPDATE task SET 'name' = :message WHERE 'id' = :id"); // Preparing the request
				$update->bindValue(":message", $message); // Binding values
				$update->bindValue(":id", $id);
				$update->execute(); // Executing the request
				$response["success"] = 1; // This is an array meant to store reponses for service users, it'll be encoded in json
				$response["message"] = "Task edited successfully";
			} else { // If there aren't ID's nor messages
				$response["success"] = 0;
				$response["message"] = "Couldn't update the task: either the problem occured on our end or there were no specified content";
			}
			break;


		default:
			// If the action isn't valid
				$response["success"] = 0;
				$response["message"] = "Invalid action: you can only add, remove, or update tasks";
			break;
	}
} else { // Get out of here if you haven't made a request >:(
	$response["success"] = 0;
	$response["message"] = "No requests";
}

echo json_encode($response);
// Sending the result, of whatever request was made, in JSON

?>