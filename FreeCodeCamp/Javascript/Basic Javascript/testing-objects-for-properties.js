/* Modify the function checkObj to test if the object passed to the function parameter obj contains the specific property passed to the function parameter checkProp. If the property passed to checkProp is found on obj, return that property's value. If not, return Not Found. */


function checkObj(obj, checkProp) {
  // Only change code below this line
  if (obj.hasOwnProperty(checkProp)) {
  return obj[checkProp]
  } 

  return "Not Found"

  // Only change code above this line
}

console.log(checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift"))

console.log(checkObj({pet: "kitten", bed: "sleigh"}, "gift"))