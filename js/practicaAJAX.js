function cambiaGet(){
	console.log("funcion cambia");

	const llamada = new XMLHttpRequest();
	const llamada2 = new XMLHttpRequest();

	//recibir la respuesta
	llamada.onload = function(){
		document.getElementById("cambiar").innerHTML = this.responseText;
	}
	


//******************************
	//hacer la consulta
	let opcion = document.getElementById("opc").value;
	let opcion2 = document.getElementById("opc2").value;
	//construir la consulta
	llamada.open("GET","practicaAJAX.php?opcion="+opcion+"&opcion2="+opcion2,true);
	//ejecutar la consulta
	llamada.send();
}

//---------------------------------------------------------------------------------
function cambiaPost(){
	console.log("funcion cambia");

	const llamada = new XMLHttpRequest();
	const llamada2 = new XMLHttpRequest();

	//recibir la respuesta
	llamada.onload = function(){
		document.getElementById("cambiar").innerHTML = this.responseText;
	}
	


//******************************
	//hacer la consulta
	let opcion = document.getElementById("opc").value;
	let opcion2 = document.getElementById("opc2").value;
	//construir la consulta
	llamada.open("POST","practicaAJAX.php",true);
	llamada.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	//ejecutar la consulta
	llamada.send("opcion="+opcion+"&opcion2="+opcion2);
}
