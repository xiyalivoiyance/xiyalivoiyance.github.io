// JavaScript Document



  const width = window.innerWidth;
  const height = window.innerHeight;

    var nav = document.querySelectorAll('.Nav');
  var nav1 = document.querySelectorAll('.Nav1');
    var nav2 = document.querySelectorAll('.Nav2');

	var category = document.getElementById('category');

  var pc = document.querySelectorAll('.PC')[0];

//banner
var l1 = document.getElementById('l1');


function setProjectWidth() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    if (width < height) {
       pc.style.flexDirection = 'column';
	      nav.forEach(nav => {
        //    nav1.style.position = 'static';
		    nav.style.marginTop = '4vh';      // 恢复横屏值
            nav.style.marginLeft = '6vw';
        });
	   nav1.forEach(nav1 => {
        //    nav1.style.position = 'static';
		    nav1.style.marginTop = '8vh';      // 恢复横屏值
            nav1.style.marginLeft = '6vw';
        });
nav2.forEach(nav2 => {
            // nav2.style.position = 'static';
			 nav2.style.marginTop = '12vh';      // 恢复横屏值
            nav2.style.marginLeft = '6vw';
        });

		 category.style.marginTop = '5vh';





    } else {
         pc.style.flexDirection = 'row';
		 nav.forEach(nav => {
            nav.style.position = 'fixed';
			 nav.style.marginTop = '8vh';      // 恢复横屏值
            nav.style.marginLeft = '6vw';
        });
		 nav1.forEach(nav1 => {
            nav1.style.position = 'fixed';
			 nav1.style.marginTop = '11vh';      // 恢复横屏值
            nav1.style.marginLeft = '6vw';
        });
nav2.forEach(nav2 => {
            nav2.style.position = 'fixed';
			 nav2.style.marginTop = '14vh';      // 恢复横屏值
            nav2.style.marginLeft = '6vw';
        });

		category.style.marginTop = '0vh';




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
                    feature.style.display = 'block';   
            ma.style.display = 'block';    
    bfa.style.display = 'block';
    about.style.display = 'block';
 
  })

   banner.addEventListener('mouseleave', () => {
            banner.style.height = `6vh`;
            close.style.transform = 'rotate(0deg)';
            feature.style.display = 'block';    
            ma.style.display = 'block';      
    bfa.style.display = 'block';
    about.style.display = 'block';

  })
