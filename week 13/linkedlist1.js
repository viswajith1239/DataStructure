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
    isEmpty(){
        return this.size===0
    }
    getsize(){
        return this.size
    }
    prepend(value){
        const node= new Node(value)
        if(this.head===null){
            this.head=node
        }else{
            node.next=this.head
            this.head=node
        }
        this.size++
    }
    print(){
        if(this.isEmpty()){
            console.log("empty");
        }else{
            let curr=this.head
            let listvalues= ''
            while(curr){

                listvalues+=`${curr.value}->`
                curr=curr.next
            }
            console.log(listvalues);
        }
    }
}
const list=new Linkedlist()
// console.log('it is empty',list.isEmpty());
// console.log('it is size',list.getsize());
list.print()
list.prepend(1)

list.prepend(2)
list.prepend(3)
list.print()