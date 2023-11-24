// Exercise : Add the inequality operator != in the if statement so that the function will return the string Not Equal when val is not equivalent to 99.


// Setup
function testNotEqual(val) {
  if (val != 99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);