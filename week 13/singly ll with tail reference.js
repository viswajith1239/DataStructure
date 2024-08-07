class Node{
    constructor(value){
        this.value=value
        this.next=null

    }
}

class Linkedlist{
    constructor(){
        this.head=null
        this.tail=null
    }
    append(value){
        const node=new Node(value)
        if(this.head===null){
            this.head=node
            this.tail=node
        }else{
            let current=this.head
            while(current.next){
                current=current.next
            }
            current.next=node
            this.tail=node
        }
    }

    display(){
        let current=this.head
        let newvariable=""
        while(current){
            newvariable=newvariable+=`${current.value}=>`
            current=current.next
        }
        newvariable+="null"
        console.log(newvariable);
    }
}

const list=new Linkedlist()

list.append(10)
list.append(20)
list.append(30)
list.display()