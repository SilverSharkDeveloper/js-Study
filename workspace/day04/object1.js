let account = {
  owner: '허은상',
  password: '1234',
  account: '110-112-1232412',
  age: 20,
  address1: '서울시',
  address2: '강남구',
};

console.log(account);

account.age = 15;
console.log(account.age);

account.bank = '우리은행';
console.log(account);

console.log(account['password']);

for (let i = 1; i < 3; i++) {
  console.log(account[`address${i}`]);
}
account.money = 10000;

account.deposit = function (money) {
  this.money += money;
};

account.deposit(30000);
console.log(account.money);


