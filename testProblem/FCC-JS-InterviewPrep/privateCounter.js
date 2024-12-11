function counter() {
  var _counter = 0;

  function add(params) {
    _counter += params;
  }
  function show() {
    console.log(`Counter: ${_counter}`);
  }

  return {
    add,
    show,
  };
}

const newValue = counter();
newValue.add(10);
newValue.show();
