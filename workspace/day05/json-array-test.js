function Makeproduct(name, price, stock) {
  this.name = name;
  this.price = price;
  this.stock = stock;
}

let products = new Array(
  new Makeproduct('사과', 2000, 5),
  new Makeproduct('바나나', 3000, 10),
  new Makeproduct('키위', 5000, 1)
);

let JsonProducts = JSON.stringify(products, (key, value) => {
  console.log(value);
  value.name === '사과' ? undefined : value;
});

console.log(JsonProducts);

// let array = JSON.parse(JsonProducts);
// console.log(array);
