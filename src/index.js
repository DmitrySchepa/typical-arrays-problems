
exports.min = function min (array) {
  if (!array || !array.length) return 0;
  let minElement = 0;
  for (let i=0; i <= array.length; i++) {
    if (array[i] < minElement) {
      minElement = array[i];
    }
  }
  return minElement;
}

exports.max = function max (array) {
  if (!array || !array.length) return 0;
  let maxElement = 0;
  for (let i=0; i <= array.length; i++) {
    if (array[i] > maxElement) {
      maxElement = array[i];
    }
  }
  return maxElement;
}

exports.avg = function avg (array) {
  if (!array || !array.length) return 0;
  let num =  array.reduce(function(total, elem) {
    return (total + elem);
  });
  return num / array.length;
}
