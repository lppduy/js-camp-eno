function areAllCharactersUnique(str) {
  const charCount = {};
  for (let i = 0; i < str.length; i++) {
    const currentChar = str[i];
    if (charCount[currentChar]) return false;
    charCount[currentChar] = true;
  }
  return true;
}

module.exports = areAllCharactersUnique;
