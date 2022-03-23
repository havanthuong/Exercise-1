function eat(callback) {
  console.log("ăn xong");
  callback();
}
function sleep() {
  console.log("đi ngủ");
}
eat(sleep);
