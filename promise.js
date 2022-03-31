const promise = new Promise((resolve, reject) => {
  //do something
  let a = 2;
  let b = 1;
  if (a == b) {
    resolve();
  } else {
    reject();
  }
});

promise
  .then(function () {
    console.log("success");
  })
  .finally(function () {
    console.log("---");
  })
  .catch(function () {
    console.log("failed");
  });

function daBong() {
  return "Da bong";
}
function cauLong() {
  return "Cau long";
}
function bongRo() {
  return "Bong ro";
}
const daBongPromise = daBong(); //callback function truyền vào đối số k cần dấu ()
const cauLongPromise = cauLong();
const bongRoPromise = bongRo();

const anToi = Promise.all([daBongPromise, cauLongPromise, bongRoPromise]).then(
  (e) => console.log(e)
);
