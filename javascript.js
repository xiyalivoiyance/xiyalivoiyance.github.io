// JavaScript Document



	
	
	
	
	let pc = document.querySelector('.PC');
let mobile = document.querySelector('.mobile');


	var mode = '';


//check the screen size. The pc version will use the complex version and the mobile screen will use the simple version.

function checkScreenSize (){
	
	
	let screenSize = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth ;

	if( screenSize < 1000 ){
		
	
		
		
		pc.style.visibility = 'hidden';
		mobile.style.visibility = 'visible';
		
		mode = 'mobile';
		
		
	} else {
		
pc.style.visibility = 'visible';
mobile.style.visibility = 'hidden';   
		
		mode = 'pc';
		
	}
	
	
}


checkScreenSize();
	




let navigation = document.querySelector('#mbNavigation');


document.onscroll = function() {
	
	var pos = document.documentElement.scrollTop;
		
		if( pos > 10){
			
			
			navigation.style.visibility = "hidden";
			
		} else if( pos < 10 && (mode == 'mobile')) {
			
			navigation.style.visibility = "visible";

		}
	
}








	