function titleCase(str) {
  const cleanStr = str.toLowerCase();
  return cleanStr
    .split(' ')
    .map(word => `${word[0].toUpperCase()}${word.slice(1)}`)
    .join(' ');
}

module.exports = titleCase;
