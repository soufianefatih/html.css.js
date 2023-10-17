// 11111111111111111  sum without highest and lowest number /////////////////////////////////////////////////////////
  
// function sum (array) {
//     if (array == null) {
//        return  0
//     }
//     return array.sort((a,b) => a-b).slice(1, -1).reduce((a, b) => a +b, 0)

  //  let maxValue = Math.max(...array)
  //  let minVlue = Math.min(...array)
  //  let filterArray = array.filter((x) => x!== maxValue && x!== minVlue )
  //  let newArray = filterArray.reduce((a,b)=> a+b , 0)


  //  return array.filter((x) => x!== Math.max(...array) && x!== Math.min(...array) ).reduce((a, b) => a +b, 0)

    // let sortarray = array.sort((a,b)=>a-b)
    // let slicearray = array.slice(1,-1);
    // let newrray = array.reduce((a,b)=>a+b)
  //  console.log(maxValue,minVlue);
  //  console.log(filterArray);
  //  console.log(newArray);
//      console.log(sortarray);
//      console.log(slicearray);
//      console.log(newrray);

//    return newrray
// }
//  console.log(sum ([1,2,3,12,11,12,1,1]));

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

// :::::::::::      find the needle in the haystack //////////////////////////////


// function findNeedle(array) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === 'needle') {
//       return 'found the needle at position' + " "+ i;
//     }
    
//   }
//   return 'found the needle at position' + " " + array.indexOf('needle')
  
// }


// console.log(findNeedle(["a","v","c","k","needle","d"]));




// :::::::::::::::      check if the number is positive add it to the array , if negative ad to the sum variable //////////////////////////////



// function count(params) {
  // let postiveArray = [];
  // let sumnNgative = 0
  // for (let i = 0; i < params.length; i++) {
  //   if (params[i] > 0) {
  //     postiveArray.push(params[i])
      
  //   }else {
  //     sumnNgative += params[i]
  //   } 
  // }
  // return [ postiveArray.length,sumnNgative]
//   let postiveArray = params.filter((x)=> x > 0).length
//   let sumnNgative = params.filter((x) => x < 0).reduce((a,b)=> a+b)
//   let result = [postiveArray, sumnNgative]
//   console.log(postiveArray);
//   console.log(sumnNgative);
//   return result
// }

// console.log(count([1,2,3,-1,-2]));



// ::::::::::::::::::::::::::::         Double CHar /////////////////////////////////////////////////////
//  exemple "string" >>>>> "ssttrriingngg"

// function doubleChar(params) {
//   return params.split('').map((s)=>s.repeat(3)).join('')
  
// }

// console.log(doubleChar('karim'));



// ::::::::::::::::::::::::::basics operation matematic //////////////////////////////////////

// function calc(x,y,op) {
//   // if(op == "+") return x +y
//   // if(op == "-") return x -y
//   // if(op == "*") return x *y
//   // if(op == "/") return x /y
//   return eval(x+op+y)
 
// }
// console.log(calc(1,-5,"*"));


// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; To square(root) or not square(root)
// solution
// loop trough the array 
// check if the number has  an integer square or not 
// it true  take the root , if false square the number
// return the new array

// function Square(params) {
  // let array = []
  // for (let i = 0; i < params.length; i++) {
  //   if (Number.isInteger(Math.sqrt(params[i]))) {

  //      array.push(Math.sqrt(params[i]))
  //   }else{
  //     array.push(params[i]*params[i])
  //   }
  // }
//   return params.map((num)=> Number.isInteger(Math.sqrt(num)) ? Math.sqrt(num) : num*num )
// }
// console.log(Square([4,2,9,5,3,64]));



// /////////////////////////////// Array includes ////////////////////////
// function check(a,x) {
//   return a.includes(x)  
// }

// console.log(check(['a','b'],'c'));

// /////////////////////////////// remove string space ////////////////////////

// function noSpace(x) {
//   return x.split(" ").join("");

// }

// console.log(noSpace('hell o'));


// /////////////////////////////// invert value ////////////////////////



// function invertValue(array) {
//   let newrarray = []
//   for (let i = 0; i < array.length; i++) {
//        newrarray.push(array[i]* -1)
//   }
//   return newrarray
//   // return array.map((x)=>x*-1)
// }
// console.log(invertValue([1,2,3]));



// /////////////////////////////// Convert bolean ////////////////////////

// function boolen(bool) {
//   return bool ? 'yes' : 'no'
// }


// console.log(boolen(false));



/// /////////////////////////////// Reversing words in string ////////////////////////


// function reverseString(string) {
//   return string.split(" ").reverse().toString()
  
// }

// console.log(reverseString("hello ali karim. k l"));


/// /////////////////////////////// Count by x ////////////////////////

// solution
// create new empty array
// loop though n 
// multiplay x*n
// add the number to the new arrat
// return the new array



function countByx(x,n) {
  // let array = [];

// for (let i = 1; i <= n ; i++) {
//     array.push(x*i)
      
// }
//  return array
return Array.from(Array(n +1).keys()).slice(1).map((number) =>  number*x)
  
}

console.log(countByx(2,5));
