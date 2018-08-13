class Node {
  constructor(value) {
    this.value = value
    this.nextNode = null
  }

  getValue () {
    return this.value
  }

  setNext(node) {
    this.nextNode = node
  }

  getNext() {
    return this.nextNode
  }

  isLast () {
    return this.nextNode == null
  }
}


class LinkedList {
  constructor () {
    this.firstNode = null
    this.lastNode = null
  }

  insertStart(value) {
    if(!this.firstNode) {
      this.firstNode = new Node(value)
      this.lastNode = this.firstNode
      return
    }

    const node = new Node(value)
    node.setNext(this.firstNode)
    this.firstNode = node
  }

  insertEnd(value) {
    if(!this.firstNode) {
      this.firstNode = new Node(value)
      this.lastNode = this.firstNode
      return
    }
    
    const node = new Node(value)
    this.lastNode.setNext(node)
    this.lastNode = node
  }

  insertAt (index, value) {
    //this.insertStart(value)
    if(!this.firstNode) {
      this.firstNode = new Node(value)
      return
    }

    if (index === 0) {
      return this.insertStart(value)
    }

    let currentIndex = 0
    let currentNode = this.firstNode
    let previousNode = null

    while (currentIndex !== index) {
      currentIndex += 1;
      previousNode = currentNode
      currentNode = currentNode.getNext()
    }

    const node = new Node(value)
    node.setNext(previousNode.getNext())
    previousNode.setNext(node)
  }

  removeStart () {
    this.firstNode = this.firstNode.getNext()
  }

  removeEnd () {
    let currentNode = this.firstNode

    while(currentNode.getNext() != this.lastNode) {
      currentNode = currentNode.getNext()
    }

    this.lastNode = currentNode
    this.lastNode.setNext(null)
  }

  removeAt (index) {
    let currentNode = this.firstNode
    let previousNode = this.firstNode
    let currentIndex = 0

    while (currentIndex !== index) {
      currentIndex += 1;
      previousNode = currentNode
      currentNode = currentNode.getNext()
    }

    previousNode.setNext(currentNode.getNext())
  }

  toString () {
    let str = '['
    
    let currentNode = this.firstNode

    while(currentNode != null) {
      str = str + currentNode.getValue()
      str += ', '
      currentNode = currentNode.getNext()
    }
  
    str = str + ']'

    return str
  }

  getAt(index) {
    let currentIndex = 0
    let currentNode = this.firstNode

    while (currentIndex !== index) {
      currentIndex += 1;
      currentNode = currentNode.getNext()
    }

    return currentNode.getValue()
  }
}

module.exports = {
  LinkedList
}