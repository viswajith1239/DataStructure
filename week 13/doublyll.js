class Node{
    constructor(value){
        this.value=value
        this.next=null
        this.prev=null
    }
}


class doubly{
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
            node.prev=current
        }
    }
    display(){
        let current=this.head
        let result=""
        while(current){
            result=result+=`${current.value}=>`
            current=current.next
        }
        console.log(result);
    }
}

const list=new doubly()
list.append(10)
list.append(20)
list.append(30)
list.display()

// function palindrome(str){
//     if(str.length<=1){
//         return true
//     }
//     if(str[0]!==str[str.length-1]){
//         return false
//     }
//     return palindrome(str.slice(1,-1))
// }

// console.log(palindrome("mon"));

// function reverse(str){
//     if(str===""){
//         return ""
//     }else{
//         return reverse(str.substring(1))+str.charAt(0)
//     }
// }

// console.log(reverse("hello"));
