const { Stack } = require('../ds/Stack');
describe('Test Stacks Work', () => {
  const stackPop = (stack) => console.log('popped', stack.pop());
  const stackPush = (stack, item) => {
    console.log('push ', item);
    stack.push(item);
  };

  test('Stack isEmpty works', () => {
    const stack = new Stack();
    expect(stack.isEmpty()).toBe(true);
    stackPush(stack, 5);
    expect(stack.isEmpty()).toBe(false);
    stackPop(stack);
    expect(stack.isEmpty()).toBe(true);
  });

  test('Stack Implements LIFO', () => {
    const s1 = new Stack();
    const arr = [6, 7, 3, 16, 4, 12, 9];
    for(const num of arr) s1.push(num);
    expect(s1.visual()).toStrictEqual(arr.reverse());
    stackPop(s1);
    expect(s1.visual()).toStrictEqual(arr.slice(1));
  });
});
