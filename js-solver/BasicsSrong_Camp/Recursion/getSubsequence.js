function getSubsequence(word) {
  if (word === '') return '';

  const first = word.charAt(0);

  const rest = getSubsequence(word.substring(1));

  let result = '';
  console.log('>>>> rest', rest);
  rest.split(',').forEach(subseq => {
    console.log(subseq);
    result += ',' + first + subseq;
    console.log(result);
    result += ',' + subseq;
    console.log(result);
  });
  console.log(result);

  return result.substring(1);
}

let out = getSubsequence('abc');
console.log(out);
