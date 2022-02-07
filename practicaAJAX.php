<?php
	
	if (isset($_REQUEST['opcion'],$_REQUEST['opcion2'])) {
		switch ($_REQUEST['opcion']) {
			case 'A':
				echo "Se recibió la letra A y ".$_REQUEST['opcion2'];
				break;
			case 'B':
				echo "Se recibió la letra B y ".$_REQUEST['opcion2'];
				break;
			
			default:
				echo "se recibió otra cosa";
				break;
		}
	}else{
		echo "No se recibió el paámetro opción.";
	}

?>