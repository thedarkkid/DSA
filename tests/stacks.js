const { Stack } = require('../ds/Stack');
const { sortStack } = require('../algo/stacks');

const stackPop = (stack) => console.log('popped', stack.pop());
const stackPush = (stack, item) => {
  console.log('push ', item);
  stack.push(item);
};
const testStack = () => {
  const stack = new Stack();
  console.log('isEmpty: ', stack.isEmpty());
  stackPush(stack, 5);
  stackPush(stack, 4);
  stackPush(stack, 3);
  stackPush(stack, 7);
  stackPush(stack, 1);
  stackPush(stack, 8);
  console.log(stack.visual());
  stackPop(stack);
  console.log(stack.visual());
  stackPop(stack);
  console.log(stack.visual());
  console.log('peeked', stack.peek());
  console.log(stack.visual());
  console.log('isEmpty: ', stack.isEmpty());
};
const testSortStack = () => {
  const s1 = new Stack();
  s1.push(6);
  s1.push(7);
  s1.push(3);
  s1.push(16);
  s1.push(4);
  s1.push(12);
  s1.push(9);
  console.log(s1.visual());
  console.log(sortStack(s1).visual());
};

module.exports = { testStack, testSortStack };