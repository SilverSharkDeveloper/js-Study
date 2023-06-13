import { RESERVATION_LIST } from './reservation .js';
console.log(RESERVATION_LIST);

/* 
예약 고객확인하기

    

*/

const $form = document.querySelector('form');
console.log($form);

const $userName = $form['user-name'];
const $userPhone = $form['user-phone'];
const $btn = $form[2];
const $reservationNumber = document.querySelector('#reservation-number');
$btn.type = 'button';

$btn.addEventListener('click', (e) => {
  let userName = $userName.value;
  let userPhone = $userPhone.value;

  let reserved = RESERVATION_LIST.find((reservation, i) => {
    return reservation.name == userName && reservation.phone == userPhone;
  });

  if (!reserved) {
    alert('일치하는 예약이 없습니다.');
    $reservationNumber.innerHTML = '일치하는 예약이 없습니다.';
    return;
  }
  $reservationNumber.innerHTML = reserved.number;
});
