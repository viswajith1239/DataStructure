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

    palindrome(){
        let slow=this.head
        let fast=this.head
        let stack=[]
        while(fast!==null&&fast.next!==null){
            stack.push(slow.value)
            slow=slow.next
            fast=fast.next.next
        }
        if(fast!==null){
            slow=slow.next
        }
        while(slow!==null){
           if(stack.pop()!==slow.value){
            return false
           
           }
           slow = slow.next
           
        }
        return true
    }

    display(){
        let  current=this.head
        let result=""
        while(current){
            result=result+=`${current.value}=>`
            current=current.next
            
        }
        console.log(result);
       
    }
   
}


const list=new Linkedlist()
list.append("m")
list.append("o")
list.append("j")
list.display()
console.log(list.palindrome());