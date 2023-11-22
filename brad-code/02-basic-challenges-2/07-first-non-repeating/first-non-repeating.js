function findFirstNonRepeatingCharacter(str) {
  const charCount = {};
  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  for (let char of str) {
    if (charCount[char] === 1) return char;
  }
  return null;
}
function findFirstNonRepeatingCharacter2(str) {
  const charMap = new Map();
  for (const char of str) {
    charMap.set(char, (charMap.get(char) || 0) + 1);
  }
  for (const char of str) {
    if (charMap.get(char) === 1) return char;
  }
  return null;
}

module.exports = findFirstNonRepeatingCharacter2;
