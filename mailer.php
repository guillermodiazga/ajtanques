<!DOCTYPE html>
<html>
<head>
	<title>Mailer</title>
</head>
<body>
<form action="mailer.php" method="post">
	<input name="titulo" placeholder='Asunto'>
	<br>
	<input name="name" placeholder='De: Nombre'>
	<input name="de" placeholder='De: Mail'>
	<br>
	<input name="para" placeholder='Para'>
	<br>
	<textarea name="msg" placeholder='Mensaje' rows="8"></textarea> 
	<br>
	<button>Enviar</button>
</form>
</body>
</html>

<?

$titulo    = $_POST["titulo"];
$de      = $_POST["de"];
$name      = $_POST["name"];
$para      = $_POST["para"];
$mensaje   = $_POST['msg'];

$cabeceras = "Content-type: text/html ". "\r\n" .
	"From: ".$name."<".$de.">" . "\r\n" .
    "Reply-To: ".$de;

//Confirmacion al usuario que envio el mail:
if( $de != ''){
	mail($para, $titulo, $mensaje, $cabeceras);
	echo "Enviado!	";
}


?>