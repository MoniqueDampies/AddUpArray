// loop addUP
let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

document.getElementById("myArray").innerHTML = myArray;
let sum = 0;
for (let i = 0; i < myArray.length; i++) {
    sum += myArray[i];
}

document.getElementById("sum").innerHTML = sum;
// reduce addUP
const numbers = [1, 2, 3, 4];
function sum1( c, n) {
  return c + n;
}
let sum2 = numbers.reduce(sum1);

document.getElementById("sum2").innerHTML = sum2;