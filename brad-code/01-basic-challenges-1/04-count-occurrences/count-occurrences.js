function countOccurrences(str, char) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    const curChar = str[i];
    if (curChar === char) count++;
  }

  return count;
}

module.exports = countOccurrences;
