export default class Node {
  #value;
  #nextNode;
  constructor() {
    this.#value = null;
    this.#nextNode = null;
  }
  set value(value) {
    this.#value = value;
  }
  get value() {
    return this.#value;
  }
  set nextNode(nextNode) {
    this.#nextNode = nextNode;
  }
  get nextNode() {
    return this.#nextNode;
  }
}
