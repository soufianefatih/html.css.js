// all butons cells O or X
let cells = document.querySelectorAll('.cell')
// reset buton
const resetBtn = document.querySelector('.reset')
let turn = true
// button score
const player1score = document.querySelector('.score1')
const player2score = document.querySelector('.score2')
const draw = document.querySelector('.draw')

// turn player
const currentTurn = document.querySelector('.current-turn')
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

// variable to check if the cell is empty
let usedCells = []

let winner = false
let ties = 0


checkTurn()

// loop to show symbol 
for (let i = 0; i < 9; i++) {
    cells[i].addEventListener('click', ()=> {

        if (isEmpty(i)) {
            if (turn) {
                addSymbol(player1,i)
                checkWin(player1)
                turn= false
                checkTurn()
            }else{
              addSymbol(player2,i)
              checkWin(player2)
              turn = true
              checkTurn()
            }  
            
        } else{
            alert('choose an empty cell')
        }
         
    })
    
}

// function to add symbol player x or o
function addSymbol(player,i) {

    cells[i].innerHTML = player.symbol
    player.played.push(i)
    usedCells.push(i)
    
}


// check win o or x

function checkWin(player) {


    if (!winner) {
        winCombos.some(combo => {
            if (combo.every(items => player.played.includes(items))) {
              alert('winners') 
              player.score ++ 
              showScore() 
            }
        })
        
    }
    
    if (!winner && usedCells.length == 9) {
        ties ++
        showScore()
        
    }
}


// func to check if the cell is empty

function isEmpty(i) {
    if (usedCells.includes(i)) {
       return false
    }
    return true
}



// func rest all cells


function reset() {
    cells.forEach(cell => {
        cell.innerHTML = ''
    })
    // reset all butons player and turn 
    usedCells = []
    player1.played= []
    player2.played = []
    turn = true
    checkTurn()
}

resetBtn.addEventListener('click',reset)



// check players turn


function checkTurn() {
    if (turn) {
        currentTurn.innerHTML = player1.symbol
    }else {
        currentTurn.innerHTML = player2.symbol

    }
}


// FUNCTION SHOW score player

function showScore() {
    player1score.innerHTML = player1.score;
    player2score.innerHTML = player2.score;
    draw.innerHTML= ties

    
}