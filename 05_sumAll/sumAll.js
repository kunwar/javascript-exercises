const sumAll = function (startRange, endRange) {
  if (!Number.isInteger(startRange) || !Number.isInteger(endRange))
    return 'ERROR';
  if (startRange < 0 || endRange < 0) return 'ERROR';
  if (startRange > endRange) {
    const temp = startRange;
    startRange = endRange;
    endRange = temp;
  }
  let result = 0;

  while (startRange <= endRange) {
    result += startRange;
    startRange++;
  }
  return result;
};

// Do not edit below this line
module.exports = sumAll;
