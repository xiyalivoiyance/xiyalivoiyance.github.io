// JavaScript Document



	
	
	
	
	let pc = document.querySelector('.PC');
let mobile = document.querySelector('.mobile');




//check the screen size. The pc version will use the complex version and the mobile screen will use the simple version.

function checkScreenSize (){
	
	
	let screenSize = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth ;

	if( screenSize < 1000 ){
		
	
		
		
		pc.style.visibility = 'hidden';
		mobile.style.visibility = 'visible';
		
		
	} else {
		
pc.style.visibility = 'visible';
mobile.style.visibility = 'hidden';   
	}
	
	
}


checkScreenSize();
	




let navigation = document.querySelector('#mbNavigation');


document.onscroll = function() {
	
	var pos = document.documentElement.scrollTop;
		
		if( pos > 10){
			
			
			navigation.style.visibility = "hidden";
			
		} else {
			
			navigation.style.visibility = "visible";

		}
	
}








	