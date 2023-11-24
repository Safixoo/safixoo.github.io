<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve the data from the form
    $nombre = $_POST["nombre"];
    $apellido = $_POST["apellido"];
	$cedula = $_POST["cedula"];

    // You can save the data to a file, database, or perform other actions here
    // For simplicity, let's save it to a text file

    $data = "Nombre: $nombre\Apellido: $apellido\Cedula: $cedula\n";

    // Append data to a file (you might want to secure the file path)
    file_put_contents("user_data.txt", $data, FILE_APPEND | LOCK_EX);

    // Optionally, you can redirect the user to a thank-you page or display a success message
    header("Location: exitoso.html");
    exit();
}
?>