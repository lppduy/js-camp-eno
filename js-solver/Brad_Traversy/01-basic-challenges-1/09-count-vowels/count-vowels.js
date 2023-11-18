// function countVowels(str) {
//   const VOWELS = 'ueoai';
//   let count = 0;
//   let cleanStr = str.toLowerCase();

//   for (let i = 0; i < cleanStr.length; i++) {
//     const character = cleanStr[i];
//     if (VOWELS.includes(character)) count++;
//   }

//   return count;
// }

function countVowels(str) {
  let formattedStr = str.toLowerCase();
  let count = 0;

  for (let i = 0; i < formattedStr.length; i++) {
    const character = formattedStr[i];

    if (
      character === 'u' ||
      character === 'e' ||
      character === 'o' ||
      character === 'a' ||
      character === 'i'
    )
      count++;
  }

  return count;
}

module.exports = countVowels;
