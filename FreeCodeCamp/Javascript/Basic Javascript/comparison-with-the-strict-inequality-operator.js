// Exercise : Add the strict inequality operator to the if statement so the function will return the string Not Equal when val is not strictly equal to 17




// Setup
function testStrictNotEqual(val) {
  if (val !== 17) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);