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

  toString() {
    let current = this.#head;
    let string = "";

    while (current) {
      string += `( ${current.value} ) -> `;
      if (!current.nextNode) string += `${current.nextNode}`;
      current = current.nextNode;
    }
    return string || null;
  }

  insertAt(value, index) {
    if (index == null || this.size() < index)
      throw new Error(`Cannot insert at ${index || null}.`);

    let previous = null;
    let current = this.#head;
    let count = 0;

    while (count !== index) {
      previous = current;
      current = current.nextNode;
      count++;
    }
    switch (index) {
      case 0:
        this.prepend(value);
        break;
      case count + 1:
        this.append(value);
        break;
      case count:
        const node = new Node();

        node.value = value;
        previous.nextNode = node;
        node.nextNode = current;
        break;
    }
  }

  removeAt(index) {
    if (!this.#head) throw new Error("The list is currently empty.");
    if (index == null || index < 0 || this.size() < index)
      throw new Error(`Cannot remove at ${index || null}.`);

    let previous = null;
    let current = this.#head;
    let count = 0;

    while (count !== index) {
      previous = current;
      current = current.nextNode;
      count++;
    }
    if (index === 0) this.#head = current.nextNode;
    if (previous) previous.nextNode = current.nextNode;
  }
}
