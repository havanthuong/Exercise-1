const a = [1, 2, 3, 4, 5];
Array.prototype.mapA = function (callback) {
  /* tạo mảng kết quả */
  let output = [],
    arrayLength = this.length;
  for (let i = 0; i < arrayLength; i++) {
    /* thực thi hàm callback với mỗi element */
    let result = callback(this[i], i);
    /* thêm vào mảng kết quả */
    output.push(result);
  }
  return output;
};
const final = a.mapA((e) => e + 1);
console.log(final);

Array.prototype.foreachA = function (abc) {
  let s = 0;
  for (let i = 0; i < this.length; i++) {
    s += abc(this[i]);
  }
  return s;
};
const b = a.foreachA(function (item) {
  return item;
});
console.log(b);
