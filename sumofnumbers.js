console.log('TEST');

const numbers = [1, 2, 3, 4, 5];

function sumFor(array) {
  let forTotal = 0;
  for (let i = 0; i < array.length; i++) {
    forTotal += numbers[i];
  }
  return forTotal;
}

function sumWhile(array) {
  let count = 0;
  let whileTotal = 0;
  while (count < array.length) {
    whileTotal += array[count];
    count++;
  }
  return whileTotal;
}

function sumRecursion(array, i, sum) {
  if (i < array.length) {
    return sumRecursion(array, i + 1, sum + array[i]);
  }
  return sum;
}

function sumTheSimpleWay(array) {
  return _.reduce(array, function (memo, num) { return memo + num; }, 0);
}

console.log(sumFor(numbers));
console.log(sumWhile(numbers));
console.log(sumRecursion(numbers, 0, 0));
console.log(sumTheSimpleWay(numbers));
