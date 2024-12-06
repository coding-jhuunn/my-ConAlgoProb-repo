var x = 21;
var fun = function () {
  console.log(x);
  var x = 20;
};
fun();
// the result is undefiend
// becuase hosting is a two step process
// it initializes the complete code wher the globe scope
// then the local scope
