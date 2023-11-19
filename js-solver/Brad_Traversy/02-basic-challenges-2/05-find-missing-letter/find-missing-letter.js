function findMissingLetter(arr) {
  const ALPHABET = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const startIndex = ALPHABET.indexOf(arr[0]);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== ALPHABET[startIndex + i]) return ALPHABET[startIndex + i];
  }
  return '';
}
function findMissingLetter2(arr) {
  let pointerCode = arr[0].charCodeAt();
  for (let i = 0; i < arr.length; i++) {
    const currentCode = arr[i].charCodeAt();
    if (currentCode - pointerCode > 1) return String.fromCharCode(pointerCode + 1);
    pointerCode = currentCode;
  }
  return '';
}
module.exports = findMissingLetter2;
