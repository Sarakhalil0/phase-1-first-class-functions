function receivesAFunction(callback) {
  callback();
};

function returnsANamedFunction() {
  return function name() {
    console.log("Aki");
  }
};

function returnsAnAnonymousFunction() {
  return function(){
    console.log("Gabi");
  }
};