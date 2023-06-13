button = document.querySelector('.button');
button.addEventListener('click', function () {
  const input = document.querySelector('.input').value;
  const hangle = '공일이삼사오육칠팔구';
  const text = document.querySelector('.result');
  let numbers = input.split('');

  let hangles = numbers.map((el, i) => (el == '.' ? '점' : hangle[el]));

  if (hangles.length != numbers.length || hangles.indexOf('점') != hangles.lastIndexOf('점')) {
    text.innerHTML = '숫자만 입력해주세요';
    return;
  }

  text.innerHTML = hangles ? hangles.join('') : '결과 표시 부분';
});
