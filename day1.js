// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// let number = [];

// function newNumber(myArray) {
// for (let i = 0; i < myArray.length; i++) {
//     if (myArray[i] < 10) {
//         number.push(myArray[i])
//     }
// }
// return number
// }

// newNumber(arr)
// console.log(newNumber(arr))


// let mood = 'sleppy'
// let tirednessLevel = 10;

// if (mood === "sleppy" || tirednessLevel < 8) {
//     console.log('Time to sleep')
// } else {
//     console.log('Not time to sleep')
// }

// let saloon = ['soap', 'cream', 'haircomb' , 'haircream'];

// saloon.shift();


// console.log(saloon);

// let array = ['array', 'of', 'element']

// function changeArr(arr) {
//     arr[2] = 'string'
// }

// changeArr((array))
// console.log(array);

// function addNumber(a, b) {
// return a + b
// }

// const number = addNumber(8,9);
// console.log(number)

// const newArray = [[1,2] , [3,4] , [5,6]];

// const target = newArray[1][0]
// console.log(target)

// const add = (a, b) => {
//     return a * b;
//   };
  
//   console.log(add(5, 5)); 
// let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

// function myNewNumber(number) {
// let newNumber = number.filter(number => number > 10)
// return newNumber
// }

// myNewNumber(arr);

// console.log(myNewNumber(arr));

let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
let newArr = [32, 34, 45, 67, 89, 90]

function myNewNumber(array) {
  let numbers = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 10) {
      numbers.push(array[i]);
    }
  }
  return numbers
}

myNewNumber((arr))

console.log(myNewNumber(arr))