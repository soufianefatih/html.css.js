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



// function countByx(x,n) {
//   // let array = [];

// // for (let i = 1; i <= n ; i++) {
// //     array.push(x*i)
      
// // }
// //  return array
// // return Array.from(Array(n +1).keys()).slice(1).map((number) =>  number*x)
// let array = Array.from(Array(n).keys()).slice(1)
// console.log(array);
  
// }
// countByx(3,4)

// console.log(countByx(2,5));


/// /////////////////////////////// Keep hydrated  ////////////////////////


// function hydrated(time) {
  
//   return Math.floor(time / 2)
// }

// console.log(hydrated(3));


/// /////////////////////////////// convert number to string ////////////////////////

// function convert(num) {

//   return num.toString()
  
// }

// console.log(typeof(convert(12)));



/// /////////////////////////////// calculate the average  ////////////////////////


// function calcAverage(array) {
//   if(array === null || array.length === 0) return 0
//  let newArray = 0

//  for (let i = 0; i < array.length; i++) {
    
//      newArray += array[i]
  
//  }
//  return newArray / array.length
//   let newArray= array.reduce((a,b)=> a+b)
//   return newArray /array.length
// }

// console.log(calcAverage([]));

/// /////////////////////////////// convert string to numbr ////////////////////////


// function numberSring(str) {
//   return Number(str)
  
// }
// console.log( typeof(numberSring(Number('12'))));


/// /////////////////////////////// count the monkeys ////////////////////////


// function count(num) {
//   let nums = []

//   for (let i = 1; i <= num; i++) {
//         nums.push(i)    
//   }
//   return nums
// //  let nums = Array.from(Array(num +1).keys()).slice(1)
// //  return nums
// }


// console.log(count(10));

// ///////////////////////////////////////// exemple qiuz//////////////////////////////
// const array = [1,2,3]
// const result = array[2]
// console.log(result);


// const obj = Object.assign({
//   name :"js"
// },{
//   name:"ts"
// }
// )
// const result = obj.name

// console.log(result);

// const array = "123"
// const result = array.indexOf(3)
// console.log('result',result);


// ///////////////////////////////////////// welcome //////////////////////////////

// solution
// create the object for the database
// check if the languge exist in database
// if exist , return the welcome with the languge
// if not exist, return the default wich is english

// function great (language) {

//   let languages = {
//     english: 'Welcome',
//     czech: 'Vitejte',
//     danish: 'Velkomst',
//     dutch: 'Welkom',
//     estonian: 'Tere tulemast',
//     finnish: 'Tervetuloa',
//     flemish: 'Welgekomen',
//     french: 'Bienvenue',
//     german: 'Willkommen',
//     irish: 'Failte',
//     italian: 'Benvenuto',
//     latvian: 'Gaidits',
//     lithuanian: 'Laukiamas',
//     polish: 'Witamy',
//     spanish: 'Bienvenido',
//     swedish: 'Valkommen',
//     welsh: 'Croeso'
//     }
//     // if (languages[language]) {
//     //   return languages[language]
      
//     // }
//     // return languages.english
//    return languages[language] ? languages[language] : languages.english
  
// }

// console.log(great('frenchi'));



// ::::::::::::::::::::::::::    Sentence Smach :://///////////////////////////////

// function smach(words) {
// return words.join(" ")  
  
// }
// console.log(smach(["hello","world"]));


 // :::::::::::::::::::: Do i get a bonus? ::::::::::::::::::::::::::::::::::::::::

// function bonusTime(salary, bonus) {

//   return bonus ? salary*10 + " £" : 'did not make enough mony ' + salary
// }

// console.log(bonusTime(20,false));


// :::::::::::::::::::: Exclamation marks remove ::::::::::::::::::::::::::::::::::


// function remove(string) {
   
// return string.replace(/!$/, "")
  
// }

// console.log(remove("AZ!"));


// :::::::::::::::::::: Are you playing Bnago ?::::::::::::::::::::::::::::::::::

// function plaYing(name) {
 
//   return  name[0]== 'R'|| name[0]== 'r' ? name + ' plays Bango' : name + ' does not play bango'
  
// }

// console.log(plaYing('aab'));



// :::::::::::::::::::: Remove second element::::::::::::::::::::::::::::::::::


// function remove(ar  ray) {
  // let newArray = []
  // for (let i = 0; i < array.length; i++) {
  //      if (i % 2 === 0) {
  //       newArray.push(array[i])
        
  //      }   
  // }
  // return newArray
//   return array.filter((a,b)=> b % 2 == 0)
  
// }

// console.log(remove(['a','b','c','d']));


// :::::::::::::::::::::::::::::::::::: unfinished loop :::::::::::::::::::::::::::


// function createArray(number) {
//   var newArray = []
//   for (let i = 1; i <= number;i ++) {
//      newArray.push(i)    
//   }
//   return newArray
// }

// console.log(createArray(5));


// :::::::::::::::::::::::::::::::::::: Transporation on vacation :::::::::::::::::::::::::::


// function rental(d) {
//   let price = 40*d
//    if(d<3) return price
//    if (d>= 7) {
//     return price -50
    
//    }else{
//     return price - 20
//    }

// }

// :::::::::::::::::::::::::::::::::::: Exlusive or (xor) :::::::::::::::::::::::::::


// function xor(a,b) {
//   if ((a == false && b == false) || (a == true && b == true)) {
//     return false 
//   }else {
//     return true
//   }
//   return a=== b ? false : true
  
// }

// console.log(xor(true,false));


// :::::::::::::::::::::::::::::::::::: getMax :::::::::::::::::::::::::::


// function getMax(a, b, c) {
  
//   max = 0;
//   if (a > b){
//     max = a;
//   } 
//   else{
//     max = b;
//   }
//   if (c > max){
//     max = c;
//   }
//   return max;
// }

// console.log(getMax(1,6,9));

// :::::::::::::::::::::::::::::::::::: Find the consecutive number :::::::::::::::::::::::::::

// function find(array) {
  
//   for (let i = 1; i < array.length; i++) {
//    if(array[i ] - 1 !== array[i-1]) return array[i]
//     console.log(array[i] - 1);
//     console.log( array[i-1]);
//   }
//   return null
// }

// console.log(find([1,2,3,4,5,7]));

// :::::::::::::::::::::::::::::::::::: volume of cuboid :::::::::::::::::::::::::::


// class Kata {

//   static getVolume(length , width , height){
//     return length*width*height
//   }
// }


// console.log(Kata.getVolume(1,2,2));

// :::::::::::::::::::::::::::::::::::: FIXED NUMBER FLOAT :::::::::::::::::::::::::::

// function fixed(n) {
//   return n.toFixed(2)
  
// }
// console.log(fixed(12.2370));

// :::::::::::::::::::::::::::::::::::: amount :::::::::::::::::::::::::::

// function forMat(amount) {
//   return `$ ${amount.toFixed(2)}`
// }

// console.log(forMat(2.51));



// :::::::::::::::::::::::::::::::::::: findAplpha  lettre :::::::::::::::::::::::::::

// function findAplpha(lettre) {
//   const alpha = "abcdefghijklmnopqrstuvwxyz"
//   return alpha.indexOf(lettre) +1
// }

// console.log(findAplpha('z'));


// :::::::::::::::::::::::::::::::::::: Opposites attract  :::::::::::::::::::::::::::


// function opposite(fl1, fl2) {

// return  fl1 % 2 == fl2 % 2 ?  'not love ' + false : 'love ' + true
  
// }
// console.log(opposite(101,166));


// ::::::::::::::::::::::::::::::::::::No Zeros For Heros  :::::::::::::::::::::::::::



// function noZiro(n) {
  
// }

 
// ::::::::::::::::::::::::::::::::::::Return true si a+b > 100  :::::::::::::::::::::::::::


// function check(a, b) {

//   // return a+b>100 ? false : true
// return a+b < 100 
// }

// // Afficher la sortie
// console.log(check(5, 20));
// console.log(check(60, 55));

// :::::::::::::::::::::::::::::::::::: convertit les heures en seconde  :::::::::::::::::::::::::::


// function heureSeconde(heure) {
// return heure*3600
// }

// // Afficher la sortie
// console.log(heureSeconde(1));
// console.log(heureSeconde(5));


// :::::::::::::::::::::::::::::::::::: reverseArray :::::::::::::::::::::::::::



function reverseTab(tab) {
  let newTab = []
  
  for(let i = tab.length - 1; i >= 0; i--) {

    newTab.push(tab[i])
    console.log(tab[i]);
}
console.log('length',tab.length);
return newTab

}

// Afficher la sortie
console.log(reverseTab([1, 2, 3]));
// console.log(reverseTab([1, 1, 2, 2, 3]));