let nav = document.querySelector('.navbar');
let toggle = document.querySelector('.fa-bars');


function toggleFunction() {
  nav.classList.toggle('active-toggle');
}
toggle.addEventListener('click',toggleFunction() )
