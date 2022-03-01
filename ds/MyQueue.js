const { Stack } = require('./Stack');

class MyQueue {
  addStack = new Stack();
  removeStack = new Stack();

  add (item) {
    if (!item) return;
    if (this.addStack.isEmpty() && !this.removeStack.isEmpty()) this.pourStack();
    this.addStack.push(item);
  }

  remove () {
    if (this.removeStack.isEmpty() && !this.addStack.isEmpty()) this.pourStack();
    return this.removeStack.pop();
  }

  peek () {
    if (this.removeStack.isEmpty() && !this.addStack.isEmpty()) this.pourStack();
    return this.removeStack.peek();
  }

  isEmpty () {
    return this.removeStack.isEmpty() && this.addStack.isEmpty();
  }

  pourStack () {
    if (this.addStack.isEmpty() && this.removeStack.isEmpty()) return;
    const from = (this.addStack.isEmpty()) ? this.removeStack : this.addStack;
    const to = (this.removeStack.isEmpty()) ? this.removeStack : this.addStack;
    while (!from.isEmpty()) to.push(from.pop());
  }

  visual () {
    if (this.addStack.isEmpty() && !this.removeStack.isEmpty()) this.pourStack();
    return this.addStack.visual();
  }
}

module.exports = { MyQueue };