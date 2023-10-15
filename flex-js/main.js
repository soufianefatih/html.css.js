var mouves = document.querySelectorAll(".contenue");
function texttranslate(){
  this.classList.toggle("textmouve");
};


function zoom(){
   this.classList.toggle("mouvement");
 };
mouves.forEach(element => element.addEventListener('click',zoom));
mouves.forEach(element => element.addEventListener('click',texttranslate));