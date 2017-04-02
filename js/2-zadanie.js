'use strict';
function pobierzImie(event) {
	
	event.preventDefault(); //zapobiegamy domyślnej akcji
	
console.log( document.getElementById( "formularz" ).children[1].value ); 
console.log( document.getElementById( "formularz" ).children[4].value );

}

 