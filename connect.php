<?php
	$name = $_POST['name'];
	$mob_no = $_POST['mob_no'];
	$email = $_POST['email'];
	$movie = $_POST['movie'];
	$theater = $_POST['theater'];
	$seat = $_POST['seat'];
	$price = $_POST['price'];
	$date_time = $_POST['date_time'];

	$conn = new mysqli('localhost','root','','traverse');
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} else {
		$stmt = $conn->prepare("insert into movies (name, mob_no, email, movie, theater, seat, price, date_time) values(?, ?, ?, ?, ?, ?, ?, ?)");
		$stmt->bind_param("sissssis", $name, $mob_no, $email, $movie, $theater, $seat, $price, $date_time);
		$execval = $stmt->execute();
		echo $execval;
		echo "Booked successfully...";
		$stmt->close();
		$conn->close();
	}
?>