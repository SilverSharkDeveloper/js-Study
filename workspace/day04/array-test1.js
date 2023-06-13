let datas = [1, 2, 4, 23, 4, 123];

//새로운 어레이 객체 생성
//end값 전달하지않으면 자동으로 끝까지
console.log(datas.slice(0, 3));

//||단축표현 앞에값이 falsy 값이면 뒤에 값  

let doubleDatas = datas.map((data, i) => data ** i);
//세개를 넘길때 첫번쨰 데이터 두번째 인덱스 세번째 배열 전체

console.log(doubleDatas);
console.log(datas);
let a = new Array();

function a() {}
console.log(a.toString);
