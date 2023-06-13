// let productInfo = function (name, price, count, getNameWithTotal) {
//   if (getNameWithTotal) {
//     getNameWithTotal(name, price * count);
//   }
// };

// let getNameWithTotal = function (name, total) {
//   console.log(`상품 ${name}의 총가격은  ${total}원 입니다`);
// };

// productInfo('고양이 인형', 4000, 2, getNameWithTotal);

function getBig(num1, num2, callback) {
  if (callback) {
    callback(num1 >= num2 ? num1 : num2);
  }
  return num1 >= num2;
}

function printBig(big) {
  console.log(big);
}

let bignum = getBig(2, 4, printBig);
console.log(bignum);
