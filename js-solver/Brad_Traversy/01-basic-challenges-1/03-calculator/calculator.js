function calculator(n1, n2, operator) {
  let result;

  switch (operator) {
    case '+':
      result = n1 + n2;
      break;
    case '-':
      result = n1 - n2;
      break;
    case '*':
      result = n1 * n2;
      break;
    case '/':
      result = n1 / n2;
      break;

    default:
      throw new Error('Invalid Operator');
  }

  return result;
}

module.exports = calculator;
