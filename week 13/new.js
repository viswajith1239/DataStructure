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
   
    display(){
        let current=this.head
        let result=""
        while(current){
            result+=`${current.value}=>`
            current=current.next
        }
        console.log(result);
    }
}

const list=new Linkedlist()
list.append(10)
list.append(20)
list.append(30)

list.display()



function binarysearch(arr,target){
    let left=0
    let right=arr.length-1
    while(left<=right){
        let middle=Math.floor((left+right)/2)
        if(arr[middle]===target){
            return middle
        }

        if(target<arr[middle]){
            right=middle-1
        }else{
            left=middle+1
        }
    }
    return -1
}

console.log(binarysearch([1,2,3,4],3));