<?php

    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "bytebookssystem";

    $conn = new mysqli('localhost', 'root', '', 'bytebookssystem');

    if ($conn->connect_error) {
        die("Falha na conexão com o banco de dados: " .$conn->connect_error);
    }

    $codigoISBN = $_GET["codigoisbn"];
    $nome = $_GET["nome"];
    $autor = $_GET["autor"];
    $genero = $_GET["genero"];
    $capa = $_GET["foto"];

$sql = "INSERT INTO books (isbn_code, book_name, book_author, book_genre, url_bookcover) VALUES ('$codigoISBN', '$nome', '$autor', '$genero', '$capa')";

if ($conn->query($sql) === TRUE) {
    echo json_encode(array('status' => 'success'));
} else {
    echo json_encode(array('status' => 'error', 'message' => $conn->error));
}

header("Location: index.html");

// Feche a conexão com o banco de dados
$conn->close();
?>