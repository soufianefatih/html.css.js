let nav = document.querySelector('.navbar');
let toggle = document.querySelector('.fa-bars');


function toggleFunction() {
  nav.classList.toggle('active');
}
toggle.addEventListener('click',toggleFunction )

// toggle.onclick = ()=>{
  
//   nav.classList.add('active');

// }
