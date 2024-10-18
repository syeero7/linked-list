import Node from "./Node.js";

export default class LinkedList {
  #head;
  constructor() {
    this.#head = null;
  }

  append(value) {
    if (value === undefined) throw new Error("Value is undefined");

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
    if (value === undefined) throw new Error("Value is undefined");

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
}
