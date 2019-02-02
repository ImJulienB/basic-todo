<?php

/**********************************************************************/
/* THIS FILE IS NEEDED FOR THE DATABASE CONNECTION TO WORK            */
/* REMOVE IT AND YOU WON'T BE ABLE TO USE THE SERVICE                 */
/*                                                                    */
/* THIS FILE IS INCLUDED AND REQUIRED IN EVERY BACK-END SCRIPTS OF    */
/* THIS SERVICE                                                       */
/**********************************************************************/

header("Content-type: application/json; charset=utf-8"); // Needed for proper JSON encoding and decoding

/**********************************************************************/
/* Setting up some variables to ease the database connection setup    */
/*                                                                    */
/* $host       **   Host name                                         */
/* $dbname     **   Name of the database                              */
/* $login      **   Database login                                    */
/* $pwd        **   Database password                                 */
/**********************************************************************/

$host = "localhost";
$dbname = "todo-list";
$login = "root";
$pwd = "";

try {
    $db = new PDO('mysql:host=localhost;dbname=todo-list', 'root', ''); // New PDO object to connect to the database
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); // Setting up some attributes for errors catching
} catch(PDOException $e) { // If the database connection failed...
    $e->getMessage(); // ...throw and error message
}

?>