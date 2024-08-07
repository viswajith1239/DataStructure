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
    display(){
        let current=this.head
        let newvariable=""
        while(current){
            newvariable=newvariable+=`${current.value}->`
            current=current.next
        }
        console.log(newvariable);
    }

   reverse(){
    let previous=null
    let current=this.head
    while(current){
        let next=current.next
        current.next=previous
        previous=current
        current=next
    }
    this.head=previous
   }

}

const list=new Linkedlist()
list.append(10)
list.append(20)
list.append(30)
list.reverse()
list.display()