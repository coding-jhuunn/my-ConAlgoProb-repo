// closure with SetTimeOut
// using var in this code
// the output will be always 3 with 1 seconds delay
// because var has no function scope
// so we need to use let to 0 1 2 will be result
// or use closure
// ----- BEFORE CLOSURE
// function a() {
//   for (var i = 0; i < 3; i++) {
//     setTimeout(function log() {
//       console.log(i);
//     }, i * 1000);
//   }
// }
// ----- After Closure

for (var i = 0; i < 3; i++) {
  function inner(i) {
    setTimeout(function log() {
      console.log(i);
    }, i * 1000);
  }
  inner(i);
}
