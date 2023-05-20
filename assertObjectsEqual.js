const eqObjects = function(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let key of keys1) {
    if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
      if (!eqObjects(obj1[key], obj2[key])) {
        return false;
      } else if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
  }
  return true;
};

const assertObjectsEqual = function(obj1, obj2) {
  if (eqObjects(obj1, obj2)) {
    console.log("✅ Assertion Correct! ⭐️ These values are a match ✅");
  } else {
    console.log("❌ False Assertion; These values are not a match ❌");
  }
};


const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
console.log(eqObjects(shirtObject, anotherShirtObject));
assertObjectsEqual(shirtObject, anotherShirtObject);