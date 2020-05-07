
function myFunction() {
  var x = document.getElementByClassName('.navigation');
   if(x.style.display === "block") {
     x.style.display = "none";
   }else {
     x.style.display = "block";
   }
}


var slides = document.querySelectorAll('#slides .slide');
console.log(slides);
var currentSlide = 0;
var slideTimer = setInterval(nextSlide, 1000);
function nextSlide() {
  slides[currentSlide].className ='slide';
  currentSlide = (currentSlide+1)%slides.length; // 1%6 = 1, 2%6 = 2 ... 6%6=0
  console.log(currentSlide);
  slides[currentSlide].className = 'slide showing';
}

$(document).ready(function() {
  $('mainContent, .about, .photoshop, .fewd, .illustration').hide();

  $('#btnAbout').click(function() {
       $('.mainContent,.about, .photoshop, .fewd, .illustration').slideUp();
      $('.about').slideToggle('slow');
      });
  $('#btnFewd').click(function() {
     $('.mainContent,.about, .photoshop, .fewd, .illustration').slideUp ();
     $('.fewd').slideToggle('slow');
      });

  $('#btnPhotoshop').click(function() {
      $('.mainContent,.about, .photoshop, .fewd, .illustration').slideUp();
      $('.photoshop').slideToggle('slow');
          });
  $('#btnIllustration').click(function() {
      $('.mainContent,.about, .photoshop, .fewd, .illustration').slideUp();
      $('.illustration').slideToggle('slow');
  });
});
