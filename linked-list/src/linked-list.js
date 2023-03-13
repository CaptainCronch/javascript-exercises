class LinkedListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  getSize() {
    // let i = 0
    // let current = this.head
    // while (current != null) {
    //   i++
    //   current = current.next
    // }
    // this.size = i
    return this.size
  }

  getFirst() {
    return this.head
  }

  getLast() {
    let last_node = this.head;
    if (last_node) {
      while (last_node.next) {
        last_node = last_node.next
      }
    }
    return last_node
  }

  insert(data) {
    let node = new LinkedListNode(data)
    let current

    if (this.head == null) {
      this.head = node
    }
    else {
      current = this.head

      while (current.next) {
        current = current.next
      }
      current.next = node
    }
    this.size++
    return node
  }

  remove(key) {
    let current = this.head
    let prev = null

    while (current != null) {
      if (current.data.key === key) {
        if (prev == null) {
          this.head = current.next
        }
        else {
          prev.next = current.next
        }
        this.size--
        return current.element
      }
      prev = current;
      current = current.next
    }
    return -1
  }

  contains(key) {
    let current = this.head

    while (current != null) {
      if (current.data.key == key) {
        return current.data
      }
      else {
        current = current.next
      }
    }
    return null
  }

  toString() {
    return JSON.stringify(this.head)
  }
}
