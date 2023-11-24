function highestScoringWord(str) {
  const words = str.split(' ');
  const scores = words.map(word => {
    let score = 0;
    for (const letter of word) score += letter.charCodeAt(0) - 96;
    return score;
  });
  const highestIndex = findHighestScoreIndex(scores);
  return words[highestIndex];
}

function findHighestScoreIndex(scores) {
  let highestScore = 0;
  let highestIndex = 0;
  scores.forEach((score, scoreIndex) => {
    if (score > highestScore) {
      highestScore = score;
      highestIndex = scoreIndex;
    }
  });
  return highestIndex;
}

function highestScoringWord2(str) {
  const words = str.split(' ');
  const scores = words.map(word => {
    return Array.from(word).reduce(
      (score, letter) => score + letter.charCodeAt(0) - 96,
      0
    );
  });
  const highestScore = Math.max(...scores);
  const highestIndex = scores.indexOf(highestScore);

  return words[highestIndex];
}

module.exports = highestScoringWord2;
