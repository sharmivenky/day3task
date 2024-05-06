// a.PRINT ODD NUMBERS IN Array
//IMMEDIATELY INVOKED FUNCTION Expression(IIFE)
 (function (array)
 {
    for(var i=0; i<array.length; i++)
    {
      if(array[i]%2!==0)
      {
         console.log(array[i]);
      }
    }
 })([1,2,3,4,5,6,7,8,9]);

//b.Convert all the strings to title caps in a string array
 let output=(function (str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    } 
    return str.join(' ');
  })("I am sharmi");
  console.log(output);

//c.Sum of all numbers in an array
(function(array){
    var sum = 0;
         for(var i = 0 ; i< array.length ; i++){
            sum = sum + array[i];
          }
          console.log(sum);
    })([1,2,3,4]);
//d.Return all the prime numbers in an array
//IIFE :
(function(numArray){
       numArray = numArray.filter((number) => {
    
         for (var i = 2; i <= Math.sqrt(number); i++) {
    
           if (number % i === 0 )return false;
         }
         return true;
       });
       console.log(numArray);
   })([31,11,55,2,3,4,9]);
//Return all the palindromes in an array
let getAllPalindromes = (words) => words.filter((word) => word.split("").reverse().join("") === word);

let inputArray = ["hello", "noon", "racecar", "level", "madam"];
let palindromes = getAllPalindromes(inputArray);

console.log("Palindromes in the array:", palindromes);
//f.Return median of two sorted arrays of the same size
// Given two sorted arrays of equal size
const ar1 = [1, 12, 15, 26, 38];
const ar2 = [2, 13, 17, 30, 45];

// Calculate the median using an IIFE
const median = (() => {
    const mergedArray = [...ar1, ...ar2];
    mergedArray.sort((a, b) => a - b);

    const n = mergedArray.length;
    const middleIndex = Math.floor(n / 2);

    if (n % 2 === 0) {
        // Even number of elements, take the average of middle two
        return (mergedArray[middleIndex - 1] + mergedArray[middleIndex]) / 2;
    } else {
        // Odd number of elements, return the middle element
        return mergedArray[middleIndex];
    }
})();
console.log(`Median is ${median}`)
//g.Remove duplicates from an array
let removeDuplicates = (array) => {
    return array.filter((item, index) => array.indexOf(item) === index);
};

let originalArray = ["apple", "banana", "apple", "orange", "banana"];
let uniqueArray = removeDuplicates(originalArray);

console.log("Unique array:", uniqueArray);

//Rotate an array by k times
var Array = [1, 2, 3, 4, 5];
var N = Array.length;
var K = 2;
(function (a, n, k)
{
    k = k % n;
  
    for (let i = 0; i < n; i++) {
        if (i < k) {
  
           
            console.log(a[n + i - k] + " ");
        }
        else {
  
            
            console.log((a[i - k]) + " ");
        }
    }
   
})
(Array, N, K);

//2.Program using arrow function
//a.Print odd numbers in an array
var y=[1,2,3,4,5,6,7]

var odd=(array)=>{
   let arr=[];
   for(let i=0; i<array.length; i++)
   {
     if(array[i]%2!==0)
     {
      arr.push(array[i]);
     }
   }
   return arr;
}
console.log(odd(y));
//b.Convert all the strings to title caps in a string array
var str="I am learning through guvi";
let def= (str)=>{
   str = str.toLowerCase().split(' ');
   for (var i = 0; i < str.length; i++) {
     str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
   } 
   return str.join(' ');
}
console.log(def(str));
//c.Sum of all numbers in an array
var a=[1,2,3,4,5,6,7,8,9];
var sumarrow=0;
let result=(a)=>
{
   for(let i=0; i<a.length; i++)
   {
     sumarrow=sumarrow+a[i];
   }
   return sumarrow;
}
console.log(result(a));

//d.Return all the prime numbers in an array
let arr = [2, 3, 4, 6, 9, 10, 11, 15];
let isPrime = num => {
  if (num < 4) return true; 
  let div = Math.floor(num / 2); 

  for (let i = 2; i <= div; i++) {
    if (num % i === 0) return false; 
  }

  return true; 
};

// Filter the array to get only prime numbers
const primeArray = arr.filter(isPrime);

console.log("Prime numbers in the array:", primeArray);


//e.Return all the palindromes in an array

let  getPalindromes = (words) => {
    return words.filter((word) => {
      let reversedWord = word.split("").reverse().join("");
      return word === reversedWord;
    });
  };
  
  let input = ["hello", "noon", "racecar", "level", "madam"];
  let palindromesoutput = getPalindromes(input);
  
  console.log("Palindromes in the array:", palindromesoutput);

