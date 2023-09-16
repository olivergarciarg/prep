
class MyNode<T> {
    data: T;
    next: MyNode<T> | null;

    constructor(data: T) {
        this.data = data;
        this.next = null;
    }
}

class MyLinkedList<T> {
    head: MyNode<T> | null;

    constructor() {
        this.head = null;
    }

    append(data: T): void {
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

    prepend(data: T): void {
        const newNode = new MyNode(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    delete(data: T): void {
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

    toArray(): T[] {
        const result: T[] = [];
        let current = this.head;
        while (current) {
        result.push(current.data);
        current = current.next;
        }
        return result;
    }
}

// Example usage:
const myList = new MyLinkedList<number>();
myList.append(1);
myList.append(2);
myList.append(3);
myList.prepend(0);
myList.delete(2);

console.log(myList.toArray()); // Output: [0, 1, 3]
console.log('wait')
