const a = maxvalue([1, 2, 3, 4, 5]);

function maxvalue(numbers) {
  console.log(numbers);
  let sortArr = numbers.sort((a, b) => b - a);
  let max = sortArr[0];
  return { MaxValue: max, sortArr: sortArr };
}

console.log(a);

function productAndStock(product, stock) {
  const productandstock = {
    야채곱창: 5,
    바나나우유: 10,
    삼각김밥: 15,
    도시락: 10,
    샌드위치: 10,
  };

  if (!productandstock[product]) {
    return product;
  }
  if (productandstock[product] == stock) {
    return '전산표와 일치합니다';
  } else {
    return '전산표와 일치하지 않습니다';
  }
}

console.log(productAndStock('야채곱', 6));

function findplusten(numbers, findnum) {
  numbers = numbers.map((el) => el + 10);
  if (numbers.find((el) => el == findnum)) {
    return numbers.filter((el) => el != findnum);
  } else {
    return '결과 값이 없습니다';
  }
}

console.log(findplusten([1, 2, 3, 4, 5], 10));

function getoddsandevens(numbers) {
  return [numbers.filter((el) => el % 2 == 0).length, numbers.filter((el) => el % 2 == 1).length];
}

console.log(getoddsandevens([1, 2, 3, 4, 5]));

function car(destination) {
  let start = function () {
    console.log('시동킴');
  };
  let stop = function () {
    console.log('시동끔');
  };
  let go = function (destination) {
    console.log('주행중' + destination);
    if (destination == 0) {
      console.log('도착!');
      stop();
    }
  };

  let interId;
  // function checknotice(destination) {
  //   if (destination >= 40) {
  //     console.log('안전 위험으로 시동을 종료합니다');
  //     stop();
  //   } else if (destination <= 0) {
  //     return;
  //   } else {
  //     setTimeout(() => {
  //       go();
  //       checknotice(--destination);
  //       //재귀함수에서는 --를 전위형으로써야한다.
  //     }, 500);
  //   }
  // }

  function checknotice(destination) {
    if (destination >= 40) {
      console.log('안전 위험으로 시동을 종료합니다.');
      stop();
    } else {
      interId = setInterval(() => {
        go(destination);
        if (destination == 0) {
          clearInterval(interId);
        }
        destination--;
      }, 500);
    }
  }

  start();
  checknotice(destination);
}

car(20);
