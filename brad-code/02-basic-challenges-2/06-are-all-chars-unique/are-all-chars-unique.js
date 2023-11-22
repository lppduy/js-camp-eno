function areAllCharactersUnique1(str) {
  const charCount = [];
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charCount[char]) return false;
    charCount[char] = true;
  }
  return true;
}
function areAllCharactersUnique2(str) {
  const charSet = new Set();
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charSet.has(char)) return false;
    charSet.add(char);
  }
  return true;
}

module.exports = areAllCharactersUnique2;
