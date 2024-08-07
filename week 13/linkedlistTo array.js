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
    Toarray(){
        let array=[]
        let current=this.head
        while(current){
            array.push(current.value)
            current=current.next
        }
        return array
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
list.display()

console.log(list.Toarray());
