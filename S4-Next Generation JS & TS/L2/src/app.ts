const userName = 'Max';
// userName = 'Maximilian';
let age = 30;

age = 29;

// function add(a: number, b: number) {
//   let result;
//   result = a + b;
//   return result;
// }

// if (age > 20) {
//   let isOld = true;
// }

// console.log(isOld);

// console.log(result);

// setting the default value of b to 1. This default parameter behavior must only be applied to the last parameter.
const add = (a: number, b: number = 1) => a + b;

const printOutput: (a: number | string) => void = output => console.log(output);

const button = document.querySelector('button');

if (button) {
  button.addEventListener('click', event => console.log(event));
}

printOutput(add(5, 2));
