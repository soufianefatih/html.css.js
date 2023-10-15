// // buttons and counter text
// const counter = document.querySelector('#counter')
// const btns = document.querySelectorAll('.btn')

// // initialize the count variable
// let count = 0
// btns.forEach((btn) => {
//     btn.addEventListener('click', (e) => {
//       const styles = e.currentTarget.classList
//       const decButton = document.querySelector('.decrease')
  
//       if (styles.contains('increase')) {
//         count++
  
//         if (decButton.disabled) decButton.disabled = false
  
//         counter.classList.add('up')
  
//         setTimeout(() => {
//           counter.classList.remove('up')
//         }, 500)
//       } else if (styles.contains('decrease')) {
//         count--
  
//         if (decButton.disabled) decButton.disabled = false
  
//         counter.classList.add('down')
  
//         setTimeout(() => {
//           counter.classList.remove('down')
//         }, 500)
//       } else {
//         if (decButton.disabled) decButton.disabled = false
  
//         count = 0
//       }
  
//       if (count > 0)
//         counter.style.color = 'green'
  
//       if (count < 0)
//         counter.style.color = 'red'
  
//       if (count === 0)
//         counter.style.color = 'grey'
  
//       counter.textContent = count
//     })
//   })



// auther solution 

let btnIncrease = document.getElementById('incr')
let btnDecrease = document.getElementById('decr')
let btnReset = document.getElementById('res')
let counte  = document.getElementById('counter')
const btns = document.querySelectorAll('.btn')


let count = 0


btnIncrease.onclick=function () {
    count +=1
   counte.innerHTML=count
}

btnDecrease.onclick=function () {
    count -=1
   counte.innerHTML=count
}

btnReset.onclick=function () {
    count =0
   counte.innerHTML=count
}


btns.forEach((btn )=> {
    btn.addEventListener('click',()=>{

        if (count > 0)
        counter.style.color = 'green'
  
      if (count < 0)
        counter.style.color = 'red'
  
      if (count === 0)
        counter.style.color = 'blue'


    })
    
});

