// 11111111111111111  sum without highest and lowest number /////////////////////////////////////////////////////////
  
function sum (array) {
    if (array == null) {
       return  0
    }
    return array.sort((a,b) => a-b).slice(1, -1).reduce((a, b) => a +b, 0)

  //  let maxValue = Math.max(...array)
  //  let minVlue = Math.min(...array)
  //  let filterArray = array.filter((x) => x!== maxValue && x!== minVlue )
  //  let newArray = filterArray.reduce((a,b)=> a+b , 0)


  //  return array.filter((x) => x!== Math.max(...array) && x!== Math.min(...array) ).reduce((a, b) => a +b, 0)

    let sortarray = array.sort((a,b)=>a-b)
    let slicearray = array.slice(1,-1);
    let newrray = array.reduce((a,b)=>a+b)
  //  console.log(maxValue,minVlue);
  //  console.log(filterArray);
  //  console.log(newArray);
     console.log(sortarray);
     console.log(slicearray);
     console.log(newrray);

   return newrray
}
 console.log(sum ([1,2,3,12,11,12,1,1]));

// 222222222222222222222  String repeat ///////////////////////////////////////////////////////////////

// function repeatNumber (number , string) {
//     // return string.repeat(number)
//   let newstr = ''
//    for (let i = 0; i < number; i++) {
//      newstr += string; 
//    }
//   return newstr
// }
// console.log(repeatNumber(2,'hello '));



//333333333333333333333333  convert number to reversed array of digits ///////////////////////////////////////////////////////////////

// function reverse (nunber) {
//   return nunber.toString().split("").map((m) =>Number(m)).reverse()

// }
// console.log(typeof(reverse(200)));
// console.log(reverse(200));



// 44444444444   Counting sheep ///////////////////////////////////////////////////

// function sheep (arryOfShepp) {
//     let counter = 0 

//     arryOfShepp.map((m) => {
//       if (m == true) counter ++
//     })
//     return counter
 
// }

// console.log(sheep ([true,false,true]));



// 555555555555555  oppositte number ////////////////////////////////////////////

// function getOpposite(number) {
//        return number * -1
// }
// console.log(getOpposite(2));


// 666666666666  Return Negative ///////////////////////////////

// function getNegative(number) {
   
//   return   number > 0 ? -number : number
    
    
// }
// console.log(getNegative(12));






