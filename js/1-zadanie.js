'use strict';

function ustawTlo(e) {
	
	document.getElementById( "paragraf1" ).style.backgroundColor = "yellow";
	document.getElementById( "paragraf2" ).style.backgroundColor = "green";
}

document.getElementById("button").addEventListener("click", ustawTlo);