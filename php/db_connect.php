<?php

// This is needed somehow, idk why
header("Content-type: application/json; charset=utf-8");

try {
    $db = new PDO('mysql:host=localhost;dbname=todo-list', 'root', '');
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    $e->getMessage();
}

?>