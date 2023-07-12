<?php
// Get the URL of the product page from the form submission
$url = $_POST['url'];
// Create a new PHP session
session_start();
// Set the session variable for the product URL
$_SESSION['url'] = $url;
// Redirect the user to the product page
header('Location: ' . $url);
?>