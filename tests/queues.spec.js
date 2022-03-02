const { Queue } = require('../ds/Queue');
const { MyQueue } = require('../ds/MyQueue');

describe('Test Queues Work', () => {
  const qRemove = (q) => console.log('removed', q.remove());
  const qAdd = (q, item) => {
    console.log('add ', item);
    q.add(item);
  };

  test('isEmpty works correctly', () => {
    const q = new Queue();
    expect(q.isEmpty()).toBe(true);
    qAdd(q, 5);
    expect(q.isEmpty()).toBe(false);
    qRemove(q);
    expect(q.isEmpty()).toBe(true);
  });

  test('queue implements FIFO', () => {
    const q = new Queue();
    const arr = [5, 9, 12, 4, 1, 3, 8];
    for(const num of arr) qAdd(q, num);
    expect(q.peek()).toBe(arr[0]);
    expect(q.visual()).toStrictEqual(arr.reverse());
    qRemove(q);
    expect(q.visual()).toStrictEqual(arr.slice(0,-1));
  });

  test('isEmpty works correctly on MyQueue', () => {
    const q = new MyQueue();
    expect(q.isEmpty()).toBe(true);
    qAdd(q, 5);
    expect(q.isEmpty()).toBe(false);
    qRemove(q);
    expect(q.isEmpty()).toBe(true);
  });

  test('MyQueue implements FIFO', () => {
    const q = new MyQueue();
    const arr = [9, 16, 21, 5, 1, 3, 8];
    for(const num of arr) qAdd(q, num);
    expect(q.peek()).toBe(arr[0]);
    expect(q.visual()).toStrictEqual(arr.reverse());
    qRemove(q);
    expect(q.visual()).toStrictEqual(arr.slice(0,-1));
  });

});