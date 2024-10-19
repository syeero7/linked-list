import LinkedList from "./LinkedList.js";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
console.log(list.at(2).value);
list.pop();
console.log(list.contains("dog"));
console.log(list.size());
console.log(list.head());
console.log(list.tail());
list.removeAt(0);
list.insertAt("fox", 4);
console.log(list.toString());
