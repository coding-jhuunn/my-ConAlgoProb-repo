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
