const { LinkedListNode, LinkedList } = require('./LinkedList');

class Queue {
  head;
  tail;

  add (item) {
    if (!item) return;
    if (!this.head || !this.tail) {
      this.tail = new LinkedListNode(item);
      this.head = this.tail;
      return;
    }
    this.tail.next = new LinkedListNode(item);
    this.tail = this.tail.next;
  }

  remove () {
    if (!this.tail || !this.head) return null;
    const headValue = this.head.value;
    this.head = this.head.next;
    return headValue;
  }

  peek () {
    if (!this.head) return null;
    return this.head.value;
  }

  isEmpty () {
    return !!(!this.tail || !this.head);
  }

  visual () {
    return LinkedList.toArray(this.head).reverse();
  }
}


module.exports = { Queue };