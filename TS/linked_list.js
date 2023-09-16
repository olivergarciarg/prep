"use strict";
class MyNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class MyLinkedList {
    constructor() {
        this.head = null;
    }
    append(data) {
        const newNode = new MyNode(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }
    prepend(data) {
        const newNode = new MyNode(data);
        newNode.next = this.head;
        this.head = newNode;
    }
    delete(data) {
        if (!this.head) {
            return;
        }
        if (this.head.data === data) {
            this.head = this.head.next;
            return;
        }
        let current = this.head;
        while (current.next) {
            if (current.next.data === data) {
                current.next = current.next.next;
                return;
            }
            current = current.next;
        }
    }
    toArray() {
        const result = [];
        let current = this.head;
        while (current) {
            result.push(current.data);
            current = current.next;
        }
        return result;
    }
}
// Example usage:
const myList = new MyLinkedList();
myList.append(1);
myList.append(2);
myList.append(3);
myList.prepend(0);
myList.delete(2);
console.log(myList.toArray()); // Output: [0, 1, 3]
console.log('wait');
//# sourceMappingURL=linked_list.js.map