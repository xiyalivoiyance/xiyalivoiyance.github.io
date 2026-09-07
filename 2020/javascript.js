// JavaScript Document



  const width = window.innerWidth;
  const height = window.innerHeight;

    var nav = document.querySelectorAll('.Nav');
    var h4 = document.querySelectorAll('h4');

	var category = document.getElementById('category');

  var pc = document.querySelectorAll('.PC')[0];

  var d = document.querySelectorAll('.D');

//banner
var l1 = document.getElementById('l1');


function setProjectWidth() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    if (width < height) {
       pc.style.flexDirection = 'column';
	      nav.forEach(nav => {
            nav.style.fontSize = '2rem';
        });
         h4.forEach(x => {
            x.style.fontSize = '2rem';
        });



     d.forEach(x => {
      x.style.width = '75vw';
        });

        category.style.marginTop = '10vh';


    } else {
         pc.style.flexDirection = 'row';
		 nav.forEach(nav => {
        nav.style.fontSize = '0.75rem';
        });
        h4.forEach(x => {
            x.style.fontSize = '0.75rem';
        });




d.forEach(x => {
      x.style.width = '30vw';
        });


        // category.style.marginTop = '5vh';




    }
}


setProjectWidth();

window.addEventListener('resize', setProjectWidth);




//banner


    var banner = document.getElementById('banner');
    var close = document.getElementById('close');

 banner.addEventListener('mouseenter', () => {
            banner.style.height = `8vh`;
            close.style.transform = 'rotate(90deg)';
 
  })

   banner.addEventListener('mouseleave', () => {
            banner.style.height = `6vh`;
            close.style.transform = 'rotate(0deg)';

  })
