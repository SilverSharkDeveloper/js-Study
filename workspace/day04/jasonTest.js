let productJSON = `{"name" : "사과" , "price" : 3500}`;
console.log(productJSON);

let product = JSON.parse(productJSON);

console.log(product);

productJSON = JSON.stringify(product);


console.log(productJSON);

