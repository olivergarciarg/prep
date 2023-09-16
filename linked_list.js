class Node {
    value;
    nextNode;
    constructor(value) {
        this.value = value;
        this.nextNode = null;
    }

    setNextNode(nextNode) {
        this.nextNode=nextNode;
    }
}

class LinkedList {
    head;
    constructor() {
        this.head=null;
    }

    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let currentNode = this.head;
            while (currentNode.nextNode) {
                currentNode = currentNode.nextNode;
            }
            currentNode.nextNode = newNode
        }
        console.log('wait')
    }

    prepend(data) {
        const newNode = new Node(data);
        newNode.nextNode =  this.head;
        this.head = newNode;
    }

    delete(data) {
        if (this.head) {
            if (this.head.value === data) {
                this.head = this.head.next;
            } else {
                let currentNode = this.head;
                while (currentNode.nextNode) {
                    if (currentNode.nextNode.value === data) {
                        currentNode.nextNode = currentNode.nextNode.nextNode;
                        return;
                    }
                    currentNode = currentNode.next;
                }
            }
        } 
    }

    toArray() {
        const result = [];
        let currentNode = this.head;
        while (currentNode) {
            result.push(currentNode.value);
            currentNode = currentNode.nextNode;
        }
        return result;
    }
}

const myList = new LinkedList();
// console.log(myList.head.value)
myList.append(1)
myList.append(2)
myList.append(3)
myList.delete(2)

console.log(myList)
console.log(myList.toArray())
console.log('wait')