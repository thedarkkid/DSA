const { Node, LinkedList } = require('./LinkedList');

class Stack {

  top;

  pop () {
    if (!this.top) return null;
    let toPop = this.top.value;
    this.top = this.top.next;
    return toPop;
  }

  push (val) {
    if (!val) return;
    const newNode = new Node(val);
    newNode.next = this.top;
    this.top = newNode;
  }

  peek () {
    return this.top ? this.top.value : null;
  }

  isEmpty () {
    return !this.top;
  }

  visual () {
    return LinkedList.toArray(this.top);
  }
}



module.exports = { Stack };