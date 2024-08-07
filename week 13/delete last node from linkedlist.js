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

    

   

    deleteLast() {
        if (this.head !== null) { // Check if the list is not empty
            let current=this.head
            if (current.next === null) {
                // There is only one node in the list
                this.head = null;
            } else {
                // Traverse the list to find the second-to-last node
                let current = this.head;
                while (current.next.next !== null) {
                    current = current.next;
                }
                // Set the next pointer of the second-to-last node to null
                current.next = null;
            }
            this.size--; // Decrease the size of the list
        }
    }
}

const list = new Linkedlist();

list.append(10);
list.append(20);
list.append(30);
list.display(); // Output: 10->20->30->
list.deleteLast();
list.display(); // Output: 10->20->

