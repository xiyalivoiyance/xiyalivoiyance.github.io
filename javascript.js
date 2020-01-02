// JavaScript Document



	
	
	
	
	let pc = document.querySelector('.PC');
let mobile = document.querySelector('.mobile');




//check the screen size. The pc version will use the complex version and the mobile screen will use the simple version.

function checkScreenSize (){
	
	
	let screenSize = window.innerWidth || document.body.clientWidth || document.documentElement.clientWidth;

	if( screenSize < 600 ){
		
	
		
		
		pc.style.visibility = 'hidden';
		mobile.style.visibility = 'visible';
		
		
	} else {
		
pc.style.visibility = 'visible';
mobile.style.visibility = 'hidden';   
	}
	
	
}


checkScreenSize();
	
	