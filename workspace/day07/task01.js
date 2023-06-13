const button = document.getElementById('button');
NodeList.prototype.filter = Array.prototype.filter;
let temp;
button.addEventListener('click', (e) => {
  const input = document.getElementById('input').value;

  const tds = document.querySelectorAll('.gubun');
  if (!input) {
    if (temp) {
      temp.parentElement.style.background = 'white';
      temp.innerHTML = el.innerHTML.replace('a', '');
    }
    return;
  }

  if (temp) {
    console.log(temp);
    temp.parentElement.style.background = 'white';
    temp.innerHTML = temp.innerHTML.replace('a', '');
    temp = '';
  }
  console.log(temp);

  for (let i = 0; i < tds.length; i++) {
    if (tds[i].innerHTML == input) {
      temp = tds[i];
      break;
    }
  }
  console.log(temp);

  if (temp) {
    temp.parentElement.style.background = 'red';
    temp.innerHTML = 'a' + temp.innerHTML;
  } else {
    alert('똑바로 입력하시오');
  }

  // if (!input) {
  //   tds.forEach((el) => {
  //     el.innerHTML = el.innerHTML.replace('a', '');
  //     el.parentElement.style.background = 'white';
  //   });
  //   return;
  // }

  // if (tds.filter((el) => el.innerHTML.replace('a', '') == input).length == 0) {
  //   alert('똑바로 입력하시오');
  //   return;
  // }

  // tds.forEach((el, i) => {
  //   if (el.innerHTML.replace('a', '') == input) {
  //     el.parentElement.style.background = 'red';
  //     el.innerHTML = 'a' + el.innerHTML.replace('a', '');
  //   } else {
  //     el.innerHTML = el.innerHTML.replace('a', '');
  //     el.parentElement.style.background = 'white';
  //   }
  // });
});
