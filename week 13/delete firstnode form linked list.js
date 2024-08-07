

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Linkedlist {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    append(value) {
        const node = new Node(value);
        if (this.head === null) {
            this.head = node;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    display() {
        let current = this.head;
        let newvariable = '';
        while (current) {
            newvariable += `${current.value}->`;
            current = current.next;
        }
        console.log(newvariable);
    }

    

    deleteFirst() {
        if (this.head !== null) { 
            this.head = this.head.next; 
            this.size--; 
        }
    }
}

const list = new Linkedlist();

list.append(10);
list.append(20);
list.append(30);
list.display(); 
list.deleteFirst();
list.display(); 
