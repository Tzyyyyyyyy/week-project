 export default function evaluate(expression) {
  // 定义操作符优先级表
  const precedence = {
    '+': 1,
    '-': 1,
    '*': 2,
    '/': 2,
    '%': 2,
  };

  // 去除表达式中的空格
  expression = expression.replace(/\s/g, '');

  // 使用正则表达式匹配数字和操作符
  const matches = expression.match(/\d+|[+\-*/%]/g);

  const operands = [];
  const operators = [];

  // 遍历所有数字和操作符
  for (const match of matches) {
    if (/^\d+$/.test(match)) {
      operands.push(Number(match)); // 将数字压入栈中
    } else {
      // 处理操作符
      while (operators.length > 0 &&
      precedence[operators[operators.length-1]] >= precedence[match]) {
        const operator = operators.pop();
        const operand2 = operands.pop();
        const operand1 = operands.pop();
        const result = evaluateBinaryExpression(operand1, operand2, operator);
        operands.push(result);
      }
      operators.push(match); // 将操作符压入栈中
    }
  }

  // 处理剩余的操作符
  while (operators.length > 0) {
    const operator = operators.pop();
    const operand2 = operands.pop();
    const operand1 = operands.pop();
    const result = evaluateBinaryExpression(operand1, operand2, operator);
    operands.push(result);
  }

  // 当只剩下一个操作数时，即为表达式的计算结果
  return operands[0];
}

function evaluateBinaryExpression(operand1, operand2, operator) {
  if (operator === '+') {
    return operand1 + operand2;
  } else if (operator === '-') {
    return operand1 - operand2;
  } else if (operator === '*') {
    return operand1 * operand2;
  } else if (operator === '/') {
    if (operand2 === 0) {
      throw new Error('Division by zero');
    }
    return operand1 / operand2;
  } else if (operator === '%') { // 处理取模操作符
    if (operand2 === 0) {
      throw new Error('Modulo by zero');
    }
    return operand1 % operand2;
  } else {
    throw new Error(`Unknown operator ${operator}`);
  }
}