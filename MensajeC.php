<?php 

	$destino ="ggrv.18@hotmail.com";
	$nombre = $_POST['sender1'];
	$telefono = $_POST['phone1'];
	$correo = $_POST['mail1'];
	$mensaje = $_POST['proyecto1'];

	$contenido="Nombre: ".$nombre. "\nTelefono: ".$telefono."\nCorreo: ".$correo."\nMensaje: ".$mensaje;
	mail($destino, "Contacto", $contenido);
	header('Location: MensajeC.html'); 

 ?>