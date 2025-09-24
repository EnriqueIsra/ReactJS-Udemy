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

// Destructuring in Function Parameter Lists

// The destructuring syntax explained in the previous lecture can also be used in function parameter lists.

// For example, if a function accepts a parameter that will contain an object it can be destructured to "pull out" the object properties and make them available as locally scoped variables (i.e., variables only available inside the function body).

// Here's an example:

//     function storeOrder(order) {
//       localStorage.setItem('id', order.id);
//       localStorage.setItem('currency', order.currency);
//     }

// Instead of accessing the order properties via the "dot notation" inside the storeOrder function body, you could use destructuring like this:

//     function storeOrder({id, currency}) { // destructuring
//       localStorage.setItem('id', id);
//       localStorage.setItem('currency', currency);
//     }

// The destructuring syntax is the same as taught in the previous lecture - just without creating a constant or variable manually.

// Instead, id and currency are "pulled out" of the incoming object (i.e., the object passed as an argument to storeOrder).

// It's very important to understand, that storeOrder still only takes one parameter in this example! It does not accept two parameters. Instead, it's one single parameter - an object which then just is destructured internally.

// The function would still be called like this:

//     storeOrder({id: 5, currency: 'USD', amount: 15.99}); // one argument / value!