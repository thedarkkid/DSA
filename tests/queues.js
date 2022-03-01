const { Queue } = require('../ds/Queue');
const { MyQueue } = require('../ds/MyQueue');

const qRemove = (q) => console.log('removed', q.remove());
const qAdd = (q, item) => {
  console.log('add ', item);
  q.add(item);
};

const testQueue = () => {
  const q = new Queue();
  console.log(q.visual());
  console.log('isEmpty:', q.isEmpty());
  qAdd(q, 5);
  qAdd(q, 9);
  qAdd(q, 12);
  qAdd(q, 4);
  qAdd(q, 1);
  qAdd(q, 3);
  qAdd(q, 8);
  console.log(q.visual());
  qRemove(q);
  console.log(q.visual());
  qRemove(q);
  qRemove(q);
  console.log('isEmpty:', q.isEmpty());
  console.log(q.visual());
  console.log('peeked ', q.peek());

  const newQ = new Queue();
  qAdd(newQ, 1);
  console.log(newQ.visual());
  console.log(newQ.peek());
  qRemove(newQ);
  console.log(newQ.peek());
};
const testMyQueue = () => {
  const mq = new MyQueue();
  console.log(mq.visual());
  console.log('isEmpty:', mq.isEmpty());
  qAdd(mq, 5);
  qAdd(mq, 9);
  qAdd(mq, 12);
  qAdd(mq, 4);
  qAdd(mq, 1);
  qAdd(mq, 3);
  qAdd(mq, 8);
  console.log(mq.visual());
  qRemove(mq);
  console.log(mq.visual());
  qRemove(mq);
  qRemove(mq);
  console.log('isEmpty:', mq.isEmpty());
  console.log(mq.visual());
  console.log('peeked ', mq.peek());

  const newQ = new MyQueue();
  qAdd(newQ, 1);
  console.log(newQ.visual());
  console.log(newQ.peek());
  qRemove(newQ);
  console.log(newQ.peek());
};

module.exports = { testQueue, testMyQueue };