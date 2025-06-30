// JavaScript Document

	let image = document.querySelectorAll('img');
			
		let display = document.querySelector('#maindisplay');
			
		for (var i = 0; i < image.length; i++){
			
			image[i].onclick = function(e) {
				
			display.setAttribute('src', e.target.getAttribute('src'));
				
			}
			
		}
	