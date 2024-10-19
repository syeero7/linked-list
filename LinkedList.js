import Node from "./Node.js";

export default class LinkedList {
  #head;
  constructor() {
    this.#head = null;
  }

  append(value) {
    if (value === undefined) throw new Error("The value is undefined.");

    const node = new Node();
    node.value = value;

    if (!this.#head) {
      this.#head = node;
      return;
    }
    let current = this.#head;

    while (current.nextNode) {
      current = current.nextNode;
    }
    current.nextNode = node;
  }

  prepend(value) {
    if (value === undefined) throw new Error("The value is undefined.");

    const node = new Node();
    node.value = value;

    if (!this.#head) {
      this.#head = node;
      return;
    }
    const firstNode = this.#head;

    this.#head = node;
    this.#head.nextNode = firstNode;
  }

  size() {
    let current = this.#head;
    let count = 0;

    while (current) {
      count++;
      current = current.nextNode;
    }
    return count;
  }

  head() {
    return this.#head.value || null;
  }

  tail() {
    let lastNode = this.#head;

    while (lastNode.nextNode) lastNode = lastNode.nextNode;
    return lastNode.value || null;
  }

  at(index) {
    let current = this.#head;
    let count = 0;

    while (count !== index) {
      count++;
      current = current.nextNode;
    }
    return current || null;
  }

  pop() {
    let current = this.#head;
    if (!current) throw new Error("The list is currently empty.");
    if (!current.nextNode) this.#head = null;

    while (current.nextNode) {
      if (!current.nextNode.nextNode) break;
      current = current.nextNode;
    }
    current.nextNode = null;
  }

  contains(value) {
    let current = this.#head;
    if (!current) throw new Error("The list is currently empty.");

    while (current.nextNode && current.value !== value)
      current = current.nextNode;

    return current.value === value;
  }

  find(value) {
    let current = this.#head;
    if (!current) throw new Error("The list is currently empty.");
    let count = 0;

    while (current.nextNode && current.value !== value) {
      count++;
      current = current.nextNode;
    }
    return current.value === value ? count : null;
  }
}
