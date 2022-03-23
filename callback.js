function eat(callback) {
  console.log("ăn xong");
  callback();
}
function myCallback() {
  console.log("đi ngủ");
}
eat(myCallback);
