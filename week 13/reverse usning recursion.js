// function reverse(str){
//     if(str===""){
//         return "";
//     }else{
//         return reverse(str.substring(1)) + str.charAt(0);
       
//     }
// }

// console.log(reverse("hello"));

// function reverse(str){
//     if(str===""){
//         return ""
//     }else{
//         return reverse(str.substring(1))+str.charAt(0)
//     }
// }

// console.log(reverse("hello"));
// function palindrome(str){
//     if(str.length<=1){
//         return true
//     }


//     if(str[0]!==str[str.length-1]){
//         return false
//     }

//     return palindrome(str.slice(1,-1))
// }

// console.log(palindrome("hello"));


// function binarysearch(arr,target){
//    let left=0,
//    let right=arr.length-1
//     while(left<=right){
//         let middle=Math.floor((left+right)/2)
//         if(arr[middle]===target){
//             return middle
//         }

//         if(target<arr[middle]){
//            right
//         }else{
//             return binarysearch(arr,target,middle+1,right)
//         }
//     }
// }

// console.log(binarysearch([1,2,3,4],4));


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
    prepend(value){
        const node=new Node(value)
        if(this.head!==null){
            node.next=this.head
            this.head=node
        }
    }

    deletefirst(){
        if(this.head!==null){
            this.head=this.head.next
            
        }
    }

    display(){
        let current=this.head
        let newvariable=""
        while(current){
            newvariable+=`${current.value}=>`
            current=current.next
        }
        console.log(newvariable);
    }

    cycle(){
        let slow=this.head
        let fast=this.head
    while(fast!==null&&fast.next!==null){
            slow=slow.next
            fast=fast.next.next
        }
        if(slow===fast){
            return true
        }else{
            return false
        }
    }

    paindrome(){
        let slow=this.head
        let fast=this.head
        let arr=[]
        while(fast!==null&&fast.next!==null){
            arr.push(slow.value)
            slow=slow.next
            fast=fast.next.next
        }
        if(fast!==null){
            slow=slow.next
        }
        while(slow!==null){
            if(arr.pop()!==slow.value){
                return false
            }else{
                return true
            }
        }
    }

}

const list=new Linkedlist()
list.append(10)
list.append(20)

list.append(30)
list.prepend(60)
list.deletefirst()
console.log(list.cycle());
console.log(list.palindrome());
list.display()
