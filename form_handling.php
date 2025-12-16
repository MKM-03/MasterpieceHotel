<?php
// Database connection details
$host = 'localhost'; // or your database host
$username = 'root'; // your database username
$password = ''; // your database password
$database = 'tt284-tma'; // your database name

// Establish database connection
$conn = new mysqli($host, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Prepare SQL statement to insert data into reservations table
$sql = "INSERT INTO reservations (customer_name, check_in_date, check_out_date, number_of_people, contact_number, email, comment) 
        VALUES (?, ?, ?, ?, ?, ?, ?)";

// Prepare and bind parameters
$stmt = $conn->prepare($sql);
$stmt->bind_param("sssiiss", $cust_name, $check_in, $check_out, $num, $contact, $email, $comment);

// Set parameters and execute
$cust_name = $_POST['customer_name'];
$check_in = $_POST['check_in_date'];
$check_out = $_POST['check_out_date'];
$num = $_POST['number_of_people'];
$contact = $_POST['contact_number'];
$email = $_POST['email'];
$comment = $_POST['comment'];

$stmt->execute();

// Check if the insertion was successful
if ($stmt->affected_rows > 0) {
    header("Location: confirmation.html");
    exit();
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close statement and connection
$stmt->close();
$conn->close();
?>
