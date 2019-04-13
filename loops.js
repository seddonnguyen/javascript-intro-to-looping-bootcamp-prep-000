function forLoop(arr) {
  for(var i = 0; i < 25; i++) {
    if(i === 1) {
      arr.push("I am 1 strange loop.");
    } else {
      arr.push(`I am ${i} strange loops.`);
    }
  }
}

function whileLoop(n) {
  while(n > 0) {
    console.log(n);
    n--;
  }
    console.log("done")
}

var i = 0;
function incrementVariable() {
  i = i + 1;
  return i;
}

function doWhileLoop(n) {
  do {
    console.log("I run once regardless.")
  } while(incrementVariable() <= n);
}
