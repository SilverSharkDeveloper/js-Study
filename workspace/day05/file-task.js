let file = require('fs');

let product = { name: '사과', price: 2500, stock: 6 };

file.writeFile('product.json', JSON.stringify(product), 'utf-8', function (error) {
  if (error) {
    console.log(error);
  } else {
    console.log('성공');
  }
});

file.readFileSync('product.json', 'utf-8', function (error, content) {
  if (error) {
    console.log(error);
  } else {
    console.log(JSON.parse(content));
  }
});
