class Queue {
  constructor() {
    this.data = [];
  }

  enqueue(element) {
    return this.data.unshift(element)
  }

  dequeue() {
    return this.data.pop()
  }

  peek() {
    return this.data[this.data.length - 1]
  }

  size() {
    return this.data.length
  }
}
