const { Stack } = require('../ds/Stack');

const sortStack = (iStack) => {
  const stack1 = new Stack(), stack2 = new Stack();
  let heavyCount = 0, stackLen = 0;

  while (!iStack.isEmpty()) {
    stack1.push(iStack.pop());
    stackLen++;
  }

  for (let idx = 0; idx < stackLen; idx++) {
    let swapCount = 0;
    let heavyVal = null;

    while (swapCount < stackLen - heavyCount) {
      if (!heavyVal) {
        heavyVal = stack1.pop();
        swapCount++;
        continue;
      }

      if (stack1.peek() >= heavyVal) {
        stack2.push(heavyVal);
        heavyVal = stack1.pop();
      } else stack2.push(stack1.pop());
      swapCount++;
    }
    stack1.push(heavyVal);
    pourStacks(stack2, stack1);
    heavyCount++;
  }

  return stack1;
};

const pourStacks = (from, to) => {
  while (!from.isEmpty()) to.push(from.pop());
};

module.exports = { sortStack, pourStacks };