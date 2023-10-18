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

//  win combos array
const winCombos = [
    [0,1,2] ,
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

// loop to show symbol 
for (let i = 0; i < 9; i++) {
    cells[i].addEventListener('click', ()=> {
          if (turn) {
              addSymbol(player1,i)
              checkWin(player1)
              turn= false
          }else{
            addSymbol(player2,i)
            checkWin(player2)
            turn = true
          }

    })
    
}

// function to add symbol player x or o
function addSymbol(player,i) {

    cells[i].innerHTML = player.symbol
    player.played.push(i)
    
}


// check win o or x

function checkWin(player) {
    winCombos.some(combo => {
        if (combo.every(items => player.played.includes(items))) {
          alert('you can')   
        }
    })
}