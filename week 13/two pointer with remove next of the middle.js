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

    append(value){
        const node =new Node(value)
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

    middle(){
        let slow=this.head
        let fast=this.head
        while(fast!==null&&fast.next!==null){
            slow=slow.next
            fast=fast.next.next
        }
        if(slow!=null){
            return slow
        }else{
            return null
        }
    }

    delete(){
        const middle=this.middle()
        if(middle!==null&&middle.next!==null){
            middle.next=middle.next.next
            this.size--
        }
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
list.append(10)
list.append(20)
list.append(30)
list.append(40)

list.display()
const middle=list.middle()
if (middle) {
    console.log(`Middle element is ${middle.value}`);
} else {
    console.log("The list is empty");
}

list.delete()
list.display()