let cells = document.querySelectorAll('.cell')




for (let i = 0; i < 9; i++) {
    cells[i].addEventListener('click', ()=> {

       cells[i].innerHTML = '<i class="fa fa-close"></i>'


    })
    
}