// Exercise : Replace the two if statements with one statement, using the && operator, which will return the string Yes if val is less than or equal to 50 and greater than or equal to 25. Otherwise, will return the string No.


function testLogicalAnd(val) {
  // Only change code below this line

  if (val <= 50 && val >= 25) {

      return "Yes";

  }

  // Only change code above this line
  return "No";
}

testLogicalAnd(10);