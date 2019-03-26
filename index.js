// Code your solution in this file
function findMatching(array, name) {
  const names = array.filter( function (driverName) { return driverName === name;});
  return names
}
