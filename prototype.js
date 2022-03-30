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

Array.prototype.foreachA = function (callback) {
  for (let index in this) {
    if (this.hasOwnProperty(index)) {
      callback(this[index], index, this);
    }
  }
};

a.foreachA(function (item, index, array) {
  console.log(item, index, array);
});
