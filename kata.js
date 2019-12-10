// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// function doubleChar(str) {

//     let double = ""

//     for (let i = 0; i < str.length; i++) {

//         double += (str[i] + str[i]);

//         console.log(double);
//     }

//     return double;

// }

// doubleChar("Mara");

/* Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

If the input array is empty or null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65]. 

*/

// var testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
// let postivo = 0;
// let negativo = 0;


// for  (let i = 0; i < testData.length; i++){
//     if (testData[i] > 0){
//         testData[i] = 1
//         postivo += testData[i];
       
//     }
//     if (testData[i] < 0){
//         negativo += testData[i];
//     }
// }

// console.log("["+ postivo + " , "+ negativo + "]");

///////////////////////////////////////////////
var x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];

const processarArray = (testData) => {
    
    let postivo = 0;
    let negativo = 0;
    let arr = [];


    for  (let i = 0; i < testData.length; i++){
        if (testData[i] > 0){
            postivo += 1;  
        
        }
        if (testData[i] < 0){
            negativo += testData[i];
        }


    }
  

    arr.push(postivo)
   arr.push(negativo)
   console.log(arr);
   return arr;

}
processarArray(x);