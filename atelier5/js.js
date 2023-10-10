let nav = document.querySelector('.navbar');
let toggle = document.querySelector('.fa-bars');


$(document).ready(function () {
  $('.fa-bars').click(function() {
    $(this).toggleClass('fa-times')
   
  })
  })


function toggleFunction() {
  nav.classList.toggle('active');
}
toggle.addEventListener('click',toggleFunction )







