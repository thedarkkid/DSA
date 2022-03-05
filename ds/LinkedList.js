class Node {
  value;
  next;

  constructor (val) {
    this.value = val;
  }
}

class LinkedList {
  head;

  constructor (arr) {
    this.fromArray(arr);
  }

  fromArray (arr) {
    if (!arr.length || arr.length <= 0) return;
    const head = new Node(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
      current.next = new Node(arr[i]);
      current = current.next;
    }
    this.head = head;
  }

  static toArray (current) {
    const arr = [];
    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    return arr;
  }

}

module.exports = { LinkedList, LinkedListNode: Node };