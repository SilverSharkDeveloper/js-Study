import { BANK_LIST, ACCOUNT_FORM } from './account.js';

console.log(BANK_LIST);
console.log(ACCOUNT_FORM);

const $bankSelector = document.querySelector('#bank-selector');
console.log(BANK_LIST['1']);

window.addEventListener('load', (e) => {
  for (let number in BANK_LIST) {
    let option = document.createElement('option');
    option.value = BANK_LIST[number];
    option.innerHTML = BANK_LIST[number];
    $bankSelector.append(option);
  }
});

const $accountInput = document.querySelector('#account-input');
const $btn = document.querySelector('button');
const $accountList = document.querySelector('#account-list');
$btn.type = 'button';

$btn.addEventListener('click', (e) => {
  if ($accountInput.value.length < 12) {
    alert('12자리 모두 입력해주세요');
    return;
  }
  let newList = document.createElement('li');
  let parsingAccount = $accountInput.value;

  // if (
  //   Array.from($accountList.children).filter((el, i) => {
  //     $bankSelector.value + '  :  ' + parsingAccount == el.innerText;
  //   }).length == 1
  // ) {
  //   alert('이미 그 계좌에 중복된 계좌번호가 있습니다!');
  //   return;
  // }
  //이미 innerText는 파싱되서 중복처리를 하려면 계좌번호를 담을 배열이 필요할듯?

  parsingAccount = Array.from(parsingAccount)
    .map((number, i) => {
      if (i == 1) {
        return number + '-';
      }
      if (i == 10) {
        return '-' + number;
      }

      if (i > 1 && i < 10) {
        return '*';
      }
      return number;
    })
    .join('');

  newList.innerText = $bankSelector.value + '  :  ' + parsingAccount;
  $accountList.append(newList);
});
