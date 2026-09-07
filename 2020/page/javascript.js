// JavaScript Document



  const width = window.innerWidth;
  const height = window.innerHeight;

    var nav = document.querySelectorAll('.Nav');
  var nav1 = document.querySelectorAll('.Nav1');
    var nav2 = document.querySelectorAll('.Nav2');

     var title = document.querySelectorAll('.Title')[0];
     var article = document.querySelectorAll('article');

	var category = document.getElementById('category');

  var h1Elements = document.querySelectorAll('h1');
    var h3Elements = document.querySelectorAll('h3');
var h4Elements = document.querySelectorAll('h4');
var p1Elements = document.querySelectorAll('p1');
var p2Elements = document.querySelectorAll('p2');


var FFpbp = document.getElementById('FFpbp');

var FFdesignConceptDscrp1 = document.getElementById('FFdesignConceptDscrp1');


var flexDir = document.querySelectorAll('.flexDir');

function setProjectWidth() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    if (width < height) {
	      
         nav.forEach(nav => {
            nav.style.fontSize = '2rem';
        });





h1Elements.forEach(function(element) {
    element.style.fontSize = '2rem';
});

h3Elements.forEach(function(element) {
    element.style.fontSize = '18px';
});

h4Elements.forEach(function(element) {
    element.style.fontSize = '1rem';
});

p1Elements.forEach(function(element) {
    element.style.fontSize = '13px';
});

p2Elements.forEach(function(element) {
    element.style.fontSize = '11px';
});



flexDir.forEach(function(element) {
     element.style.display = 'flex';
    element.style.flexDirection = 'row';
});

if(FFpbp != null){
FFpbp.style.columns = '1';
FFdesignConceptDscrp1.style.columns = '1';

}

category.style.marginTop = '10vh';
title.style.marginTop = '7.5vh';
article.forEach(function(element) {
     element.style.marginTop = '7.5vh';
});


    } else {
		
         nav.forEach(nav => {
        nav.style.fontSize = '0.75rem';
        });




h1Elements.forEach(function(element) {
    element.style.fontSize = '1.5rem';
});

h3Elements.forEach(function(element) {
    element.style.fontSize = '20px';
});

h4Elements.forEach(function(element) {
    element.style.fontSize = '0.75rem';
});

p1Elements.forEach(function(element) {
    element.style.fontSize = '14px';
});

p2Elements.forEach(function(element) {
    element.style.fontSize = '13px';
});

flexDir.forEach(function(element) {
    element.style.display = 'flex';
    element.style.flexDirection = 'row';
});


if(FFpbp != null){
FFpbp.style.columns = '3';
FFdesignConceptDscrp1.style.columns = '2';


}


category.style.marginTop = '15vh';
title.style.marginTop = '15vh';
article.forEach(function(element) {
     element.style.marginTop = '15vh';
});

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
              category.style.visibility = 'visible';
 
  })

   banner.addEventListener('mouseleave', () => {
            banner.style.height = `6vh`;
            close.style.transform = 'rotate(0deg)';
             if(pagePos >= 100){
      category.style.visibility = 'hidden';
    }

  })


 var pagePos = 0;
  window.addEventListener('scroll', () => {
    pagePos = window.scrollY
    if(pagePos >= 100){
      category.style.visibility = 'hidden';
      banner.style.visibility = 'hidden';
    } else{
      category.style.visibility = 'visible';
      banner.style.visibility = 'visible';
    }
});
