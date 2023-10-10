let nav = document.querySelector('.navbar');
let toggle = document.querySelector('.fa-bars');


$(document).ready(function () {
  $('.fa-bars').click(function() {
    $(this).toggleClass('fa-times')
   
  })
    
$(window).on('scroll load',function () {
  
  $('.fa-bars').removeClass('fa-times');
  $('.navbar').removeClass('nav-toggle');

  if ($(window).scrollTop() > 30) {
    $('header').addClass('header-active');

  }else{
    $('header').removeClass('header-active');

  }

})
   

  })


function toggleFunction() {
  nav.classList.toggle('active');
}
toggle.addEventListener('click',toggleFunction )










