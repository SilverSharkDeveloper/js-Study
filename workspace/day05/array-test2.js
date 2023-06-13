let numbers = new Array(10).fill(0);
numbers.forEach((el, i, array) => {
  array[i] = i + 1;
});

numbers.filter((el) => el % 2 == 0).forEach(console.log);

numbers.forEach((el, i, array) => (array[i] = '공일이삼사오육칠팔구'.charAt(i)));

console.log(numbers);

let input = '이삼사오';
let change = input
  .split('')
  .map((el) => numbers.indexOf(el))
  .join('');

console.log(change);

input = 2345;

let numberss = new Array(100).fill(0).map((el, i) => i + 1);

console.log(numberss.reduce((pre, aft) => pre + aft));


