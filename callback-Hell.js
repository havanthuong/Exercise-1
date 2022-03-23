function wakeUp(doSomething) {
  doSomething();
}
function sleep(doSomething) {
  console.log("sleep");
  doSomething();
}
sleep(
  wakeUp(
    sleep(
      wakeUp(function () {
        console.log("Wake Up");
      })
    )
  )
);
