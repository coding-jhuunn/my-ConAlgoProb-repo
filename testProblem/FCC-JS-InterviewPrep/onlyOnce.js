let view;
function likeVideo() {
  let called = 0;

  return function () {
    if (called > 0) {
      console.log("Already");
    } else {
      view = "Your Channel";
      console.log("Subscribe to", view);
      called++;
    }
  };
}

let isSubscribed = likeVideo();
isSubscribed();
isSubscribed();
isSubscribed();

//or like this

function once(func, context) {
  let ran;
  return function () {
    if (func) {
      ran = func.apply(context || this, arguments);
      func = null;
    }
    return ran;
  };
}

const hello = once((a, b) => console.log(a, b));

hello(1, 2);
hello(1, 2);
hello(1, 2);
