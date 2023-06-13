Function.prototype.defer = function (ms) {
  setTimeout(f, ms);
};

function f() {
  console.log('hello');
}

f.defer(1000); // 1초 후 "Hello!" 출력
