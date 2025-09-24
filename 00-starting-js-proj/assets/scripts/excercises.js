// Exercise: Working with Functions

// Your task is to write a new function that should be named combine and have the following characteristics:

//     Accept three input values

//     Calculate a new value based on the three input values: a * b / c (if a, b & c are the input values)

//     Return the calculated result

// Create a new function that utilizes parameters and returns a value.

// function combine(a, b, c) {
//     return ((a * b) / c)
// }
// const result1 = combine(2, 2, 2)
// console.log(result1)
// const result2 = combine(4, 5, 2)
// console.log(result2)

// Exercise: Array Methods
// Your task is to add the missing logic to a transformToObjects() function that should transform a list of numbers into a list of JavaScript objects.

// In the newly returned array, every object must have a val key and the input array's number as a value.

// For example, for the provided input [1, 2, 3] the transformToObjects([1, 2, 3]) function should return [{val: 1}, {val: 2}, {val: 3}].

// function transformToObjects(numberArray) {
//     return numberArray.map(number => {
//         return {val: number}
//     })
// }
// console.log(transformToObjects([1, 2, 3]))