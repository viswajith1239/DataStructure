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
    
    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head=node
        }else{
            let curr=this.head
            while(curr.next!==null){
                curr=curr.next
            }
            curr.next=node
        }
        this.size++
           
        
    }
    
    print(){
        if(this.isEmpty()){
            console.log("the list is empty");
        }else{
            let curr=this.head
            let listvalues=''
            while(curr!==null){
                listvalues+=`${curr.value}->`
                curr=curr.next
            }
            console.log(listvalues);
        }
    }
}

const list=new Linkedlist()
console.log('list is empty',list.isEmpty());
console.log('list size',list.getsize())
list.print()





list.append(3)
list.print()

list.append(4)
list.print()
list.append(4)
list.print()

console.log("list is empty",list.isEmpty());
console.log("list size",list.getsize());
