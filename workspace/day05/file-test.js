let file = require('fs');
// file.writeFile('경로', '내용', '인코딩', '콜백함수');

file.writeFile('love.text', '사랑해', 'utf-8', function (errer) {
  if (errer) {
    console.log(errer);
  } else {
    console.log('성공');
  }
});
