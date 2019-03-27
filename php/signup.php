<?php

require("db_connect.php");

$options = ['cost' => 10,]; // Defining the cost for the password hashing

$username = $_POST['username']; // Grabbing the username and password
$password = $_POST['password'];

if($username != "" && $password != ""){ // If both the password and username aren't empty
	$password = password_hash($password, PASSWORD_BCRYPT, $options);
    $verifSQL = $db->prepare("SELECT username FROM users WHERE username = :username"); // Preparing a request to check if the user already exists
    $verifSQL->bindValue(":username", $username);
    $verifSQL->execute();
    if($verifSQL->rowCount() > 0) {
        // The account already exists
    	echo "exists";
    } else {
        // Adding the user to the database
		$inscription = $db->prepare('INSERT INTO users (username, password) VALUES (:username, :password)');
        $inscription->bindValue(":username", $username);
        $inscription->bindValue(":password", $password);
        $inscription->execute();

        $inscription = $db->prepare('SELECT id FROM users WHERE username = :username');
        $inscription->bindValue(":username", $username);
        $inscription->execute();
        $row = $inscription->fetch();
        echo $row["id"];
    }
}

?>