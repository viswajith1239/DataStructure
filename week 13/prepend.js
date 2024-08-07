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

    prepend(value){
        const node=new Node(value)
        if(this.head===null){
            this.head=node
        }else{
            node.next=this.head
        }
        this.head=node
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
list.prepend(10)
list.prepend(20)
list.prepend(30)
list.display()


