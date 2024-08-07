class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}


class Linkedlist{
    constructor(){
        this.head=null
        this.size=0
    }

    // append
    append(value){
        const node=new Node(value)
        if(this.head===null){
            this.head=node
        }else{
            let current=this.head
            while(current.next){
                current=current.next
            }
            current.next=node
        }
    }
    // prepend

    prepend(value){
        const node=new Node(value)
        if(this.head===null){
            this.head=node
        }else{
            node.next=this.head
            this.head=node
        }

    }

    // delete from first

    deletefirst(){
        if(this.head!==null){
            this.head=this.head.next
        }
    }

    // delete from last


    deletelast(){
        if(this.head!==null){
            let current=this.head
            if(current.next===null){
                this.head=null
            }
            else{
                current=this.head
                while(current.next.next!==null){
                    current=current.next
                }
                current.next=null
            }
        }
    }

    insert(value, index) {
        if (index < 0 || index > this.size) {
            console.log("Index out of bounds");
            return;
        }
    
        const node = new Node(value);
    
        if (index === 0) {
            this.prepend(value);
        } else {
            let current = this.head;
            for (let i = 0; i < index - 1; i++) {
                current = current.next;
            }
            node.next = current.next;
            current.next = node;
            this.size++;
        }
    }
    



    display(){
        let current=this.head
        let newvariable=''
        while(current){
            newvariable+=`${current.value}=>`
            current=current.next
        }
        console.log(newvariable);
    }
}


const list=new Linkedlist()
list.append(10)
list.append(20)
list.append(30)
list.prepend(50)
// list.deletefirst()
// list.deletelast()
list.insert(80,1);
list.display()
