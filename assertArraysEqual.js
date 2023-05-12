const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)){ 
  console.log("✅ Assertion Correct! ⭐️ These values are a match ✅")

} else {
  console.log("❌ False Assertion; These values are not a match ❌")

}
 // ;
};

assertArraysEqual([90, 77], [90, 77]);


/*

//While the assertEqual is great at comparing primitive types (like numbers and strings), 
//we could use another function for asserting that two arrays are equal.

//Implement assertArraysEqual which will take in two arrays and console.log an appropriate message to the console.
//The message will be similar to that of assertEqual. In fact, you could refer to the code for assertEqual to help you implement this. 
//Instead of doing a simple === check though, this assertion function will make use of your eqArrays function for array comparison.

//Warning; Functions that do not return values and instead print out messages to the console are 
//more difficult to test using assertions. 
//This is because we cannot simply compare their return value to an expected value.
*/