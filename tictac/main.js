// all butons cells O or X
let cells = document.querySelectorAll('.cell')
let turn = true
//  layers
 let player1= {
    symbol :'<i class="fa fa-close"></i>',
    played: [],
    score:0,
 }

 let player2= {
    symbol :' <i class="fa fa-circle-o"></i>',
    played: [],
    score:0,
 }

// loop to show symbol 
for (let i = 0; i < 9; i++) {
    cells[i].addEventListener('click', ()=> {
          if (turn) {
              addSymbol(player1,i)
              turn= false
          }else{
            addSymbol(player2,i)
            turn = true
          }

    })
    
}

// function to add symbol player x or o
function addSymbol(player,i) {

    cells[i].innerHTML = player.symbol
    
}