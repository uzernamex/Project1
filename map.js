// https://flex-web.compass.lighthouselabs.ca/workbooks/flex-m01w2/activities/227?journey_step=30&workbook=5
/*
const map = function() {
  
console.log(results1);
 // empty for now :)
}
*/

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    console.log('item BEFORE: ', item);
    console.log('item AFTER: ', callback(item));
    console.log('---');
  }
  return results;
}
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}