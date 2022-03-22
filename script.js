//BÀI 1: TÍNH TỔNG CÁC PHẦN TỬ TRONG MẢNG
const a = [0, 5, 4, 2, 8];
let sum = (arr) => {
  let result = 0;
  for (let i = 0; i < arr.length; i++) result += arr[i];
  return result;
};
console.log(sum(a));
//BÀI 2: TỔNG HỢP MẢNG CÁC TÊN NGƯỜI
const person = [
  { name: "John", age: 24 },
  { name: "Pete", age: 25 },
  { name: "Mary", age: 28 },
];
let namePerson = person.map((x) => x.name);
console.log(namePerson);
//BÀI 3: MERGE CÁC PHẦN TỬ KHÔNG TRÙNG LẶP
const arr1 = ["John", "Pete", "Mary"];
const arr2 = ["Mary", "Henry", "Harry"];
let merge = arr1.concat(arr2);
let unique = [...new Set(merge)];
console.log(unique);
