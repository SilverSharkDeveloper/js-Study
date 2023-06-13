// let datas = [1, 2, 4, 23, 4, 123];

//새로운 어레이 객체 생성
//end값 전달하지않으면 자동으로 끝까지
// console.log(datas.slice(0, 3));

//||단축표현 앞에값이 falsy 값이면 뒤에 값

// let doubleDatas = datas.map((data, i) => data ** i);
//세개를 넘길때 첫번쨰 데이터 두번째 인덱스 세번째 배열 전체

//값이 있어야만 값이 있는걸로 인식  -> empty일 경우 forEach불가
//fill로 초기값 설정

let numbers = new Array(5).fill(0);
numbers.map((el) => el + 3).forEach(console.log);
numbers.map((el) => el + 3).forEach((el) => console.log(el));

console.log(numbers.map((el) => el + 3).reduce((pre, after) => pre + after));

