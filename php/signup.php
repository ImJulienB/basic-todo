<?php

require("db_connect.php");

$options = ['cost' => 10,]; // Defining the cost for the password hashing

$username = $_GET['username']; // Grabbing the username and password
$password = $_GET['password'];

if($username != "" && $password != ""){ // If both the password and username aren't empty
	$password = password_hash($password, PASSWORD_BCRYPT, $options);
    $verifSQL = $db->prepare("SELECT username FROM users WHERE username = :username"); // Preparing a request to check if the user already exists
    $verifSQL->bindValue(":username", $username);
    $verifSQL->execute();
    if($verifSQL->rowCount() > 0) {
        // The account already exists
    	echo "1";
    } else {
        // Adding the user to the database
		$inscription = $db->prepare('INSERT INTO users (username, password) VALUES (:username, :password)');
        $inscription->bindValue(":username", $username);
        $inscription->bindValue(":password", $password);
        $inscription->execute();
        echo "0";
    }
}

?>