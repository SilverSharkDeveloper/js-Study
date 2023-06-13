/* 
레시피 재료 추가하기

table가져와서 tr 추가 ->td세개 추가
*/

const $form = document.querySelector('#ingredient-form');
const $ingredient = $form.ingredient;
const $weight = $form.weight;

const $table = document.querySelector('table');

const $addBtn = document.querySelector('button');
$addBtn.type = 'button';

const $ingredientList = document.querySelector('#ingredient-list');
const $submitBtn = document.querySelector('#submit_button');

$addBtn.addEventListener('click', (e) => {
  if (!$ingredient.value) {
    alert('재료를 입력해주세요');
    $ingredient.focus();
    return;
  }

  if (!$weight.value) {
    alert('그람수를 입력해주세여');
    $weight.focus();
    return;
  }

  if (isNaN($weight.value)) {
    alert('그람수는 숫자만 입력해주세요!');
    $weight.value = '';
    $weight.focus();
    return;
  }

  let trs = $table.querySelectorAll('tr');
  if (
    Array.from(trs).find((el) => {
      return el.firstElementChild.innerHTML == $ingredient.value;
    })
  ) {
    alert('이미 존재하는 재료입니다!');
    $ingredient.value = '';
    $weight.value = '';
    return;
  }

  let tr = document.createElement('tr');
  let td1 = document.createElement('td');
  let td2 = document.createElement('td');
  let td3 = document.createElement('td');
  let delBtn = document.createElement('button');
  delBtn.innerHTML = '삭제';

  delBtn.addEventListener('click', (e) => {
    e.target.parentElement.parentElement.remove();
  });

  td1.innerHTML = $ingredient.value;
  td2.innerHTML = $weight.value;
  td3.append(delBtn);

  tr.append(td1);
  tr.append(td2);
  tr.append(td3);

  $table.append(tr);

  $ingredient.value = '';
  $weight.value = '';
});

$submitBtn.addEventListener('click', (e) => {
  let trs = $table.querySelectorAll('tr');
  if (
    Array.from($ingredientList.children).find((list) => {
      return (  
        Array.from(trs).filter((ingredient, i) => {
          if (i == 0) {
            return;
          }
          return list.innerHTML.indexOf(ingredient.firstElementChild.innerHTML) != -1;
        }).length >= 1
      );
    })
  ) {
    alert('이미 중복된 재료가 있습니다. 삭제하고 눌러주세요!');
    return;
  }

  trs.forEach((el, i) => {
    if (i == 0) {
      return;
    }
    let newList = document.createElement('li');
    newList.innerHTML = el.children[0].innerHTML + '  :  ' + el.children[1].innerHTML;
    $ingredientList.append(newList);
    el.remove();
  });
});
