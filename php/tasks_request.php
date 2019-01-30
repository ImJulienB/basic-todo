<?php

require("db_connect.php");

$request = $db->prepare("SELECT * FROM task");
$request->execute();

$response = $request->fetchAll(PDO::FETCH_ASSOC);

//var_dump($response);

echo json_encode($response);

?>