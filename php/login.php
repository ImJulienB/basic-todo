<?php

require("db_connect.php");

$options = ['cost' => 10,]; // Defining the cost for the password hashing

$username = $_POST["username"];

$rqt = $db->prepare("SELECT username FROM users WHERE username = :username");
$rqt->bindValue(":username", $username);
$rqt->execute();

if ($rqt->rowCount() > 0) { // Checking if the account exists
	// It does exist
	$username = $rqt->fetch();
	$rqt = $db->prepare("SELECT password FROM users WHERE username = :user");
	$rqt->bindValue(":user", $username[0]);
	$rqt->execute();

	$hash = $rqt->fetch();
	$password = $_POST["password"];

	if (password_verify($password, $hash[0])) // Correct password
		echo "0";
	else // Incorrect password
		echo "1";
} else { // The account does not exist
	echo "2";
}

?>