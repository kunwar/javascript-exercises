const repeatString = function (str, numOfRepititions) {
  if (numOfRepititions < 0) return 'ERROR';
  let result = '';
  for (let i = 0; i < numOfRepititions; i++) {
    result += str;
  }
  return result;
};

// Do not edit below this line
module.exports = repeatString;
