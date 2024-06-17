
// const minNum = 1;
// const maxNum = 10;
// const randomNumber = Math.floor(Math.random() * (maxNum - minNum) + minNum)
// console.log(randomNumber)

// function guessGame(){
//     function promptingQuestion(){
//         guess = window.prompt(`Guess a number from ${minNum} to ${maxNum}`)
//     }

//    let guess;
//    promptingQuestion()

//    if(typeof guess !== Number){
//     window.alert("Your guess must be a number");
//     promptingQuestion();
//    }
//    else if(guess > maxNum || guess < minNum){
//     window.alert(`Your guess must be a number inbetween ${minNum} and ${maxNum}`);
//     promptingQuestion();
//    }
//    else if(guess === randomNumber) {
//     window.alert(`Congratulations you won! the correct answer is ${randomNumber}`)
//    }
// }

//>  guessGame()

//  for(let i = 1; i > 3; i++){
//     console.log(i)
//  }

// const numbers = [1, 2, 3, 4, 5]; 

// const bigNumbers = numbers.map(number => {
//   return number - 1;
// });

// console.log(numbers);
// console.log(bigNumbers);

// let str = "Emma";
// console.log(str.split(""))
// console.log(str.join(' '))

// let newNum = numbers.filter(num => num < 5)
// let newNum = numbers.filter((num) => {
//     return num < 5;
// })

// console.log(newNum)


// let ages = [1,2,3,4,5,54,50,55,3,4,,4,4,4,4,4,3,4,,33,45,3,2,52,4,35,24,43,5,34,66,6];

// let children = ages.filter(age => age < 16);
// let adults = ages.filter(age => age > 16);
// console.log(children)
// console.log(adults)

// const jumbledNums = [123, 25, 78, 5, 9]; 

// const lessThanTen = jumbledNums.findIndex(num => {
//   return num < 10;
// });

// console.log( `${lessThanTen}    text book     ${lessThanTen} hello`)

// let numbers = [5, 12, 8, 20, 7, 14, 3, 11, 6, 4, 2, 1];  // Original array
// let numbersLessThanFive = [];  // New array to store numbers less than 5

// // Loop through each element in the numbers array
// for (let i = 0; i < numbers.length; i++) {
//   // Check if the current number is less than 5
//   if (numbers[i] < 5) {
//     numbersLessThanFive.push(numbers[i]);  // Add the number to the new array
//   }
// }

// console.log(numbersLessThanFive);  // Output: [3, 4, 2, 1]
//  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//  function myNumbers(myArray) {
//     let number = [];
//     for (let i = 0; i < myArray.length; i++) {
// if (myArray[i] < 10) {
//     number.push(myArray[i]);
// }
//     }
//     return number
//  }

//  console.log(myNumbers(arr));

// function fizzBuzz(number) {
// if (number % 3 === 0 && number % 5 === 0) 
//     return 'fizzBuzz';
// else if (number % 3 === 0)
//     return 'fizz';
// else if (number % 5 === 0)
//     return 'buzz';
// else
// return number;
// } 

// console.log(fizzBuzz(7))

// function evenNumber(array) {
//     for (const number of array ) {
//         if (number % 2 === 0)
//             console.log(number);
//     }
// }

// evenNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])


// function oddNumber(array) {
//     for (const number of array ) {
//         if (number % 2 != 0)
//             console.log(number);
//     }
// }

// oddNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])


// function printNTime(n, value) {
//     debugger
//     for (let i = 0; i < n; i++) {
//         console.log(value)
//     }
// }

// printNTime(5, "Hello")

// const ages = [32, 33, 16, 40];
// const result = ages.filter(checkAdult);

// function checkAdult(age) {
//   return age >= 18;
// }

// checkAdult((ages))
// console.log(checkAdult(ages))

// function squareNumbers(numbers) {
  
//   let squaredNumbers = numbers.map(number => number * number);
   
//   return squaredNumbers;
// }


// let originalArray = [1, 2, 3, 4, 5];
// let result = squareNumbers(originalArray);

// console.log(result); 

// function myNumber(a , b) {
// return a + b
// }

// const num = myNumber(9,9)

// console.log(myNumber(9,9))

// let family = ['daddy','mummy',['man1','man2','man3']]

let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,23,34,45,67,89,90,]

function myNumber(number) {
  let newNum = number.filter(number => number < 10)
  return newNum
}


console.log(myNumber(arr))