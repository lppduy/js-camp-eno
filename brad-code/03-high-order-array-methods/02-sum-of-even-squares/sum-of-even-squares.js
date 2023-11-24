function sumOfEvenSquares(numbers) {
  const evenSquares = numbers.filter(num => num % 2 === 0).map(num => num ** 2);
  return evenSquares.reduce((sum, square) => sum + square, 0);
}

module.exports = sumOfEvenSquares;
