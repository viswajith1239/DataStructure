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

    tolinkedlist(array){
        this.head=new Node(array[0])
        let current=this.head
        for(let i=1;i<array.length;i++){
            current.next=new Node(array[i])
            current=current.next
        }
        return this.head
    }

    display(){
        let current=this.head
        let newvariable=""
        while(current){
            newvariable=newvariable+=`${current.value}=>`
            current=current.next
        }
        console.log(newvariable);
    }
}

const list=new Linkedlist()
console.log(list.tolinkedlist([1,2,3,4]));
list.display()

