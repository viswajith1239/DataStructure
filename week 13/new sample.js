// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }

// class Linkedlist{
//     constructor(){
//         this.head=null
//         this.size=0
//     }

//     prepend(value){
//         const node=new Node(value)
//         if(this.head===null){
//             this.head=node
//         }else{
//             node.next=this.head
//             this.head=node
//         }
//     }

//     display(){
//         let current=this.head
//         let newvariable=""
//         while(current){
//          newvariable=newvariable+=`${current.value}->`
//         current=current.next
//         }
//         console.log((newvariable));
//     }
// }

// const list=new Linkedlist()
// list.prepend(20)
// list.prepend(10)
// list.prepend(80)
// list.display()

// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }

// }

// class Linkedlist{
//     constructor(){
//         this.head=null
//         this.size=0
//     }

//     append(value){
//         const node=new Node(value)
//         if(this.head===null){
//             this.head=node
//         }else{
//             let current=this.head
//             while(current.next){
//                 current=current.next
//             }
//             current.next=node
//         }
//     }
//     display(){
//         let current=this.head
//         let newvariable=''
//         while(current){
//             newvariable=newvariable+=`${current.value}->`
//             current=current.next
//         }
//         console.log(newvariable);
//     }

// }

// const list =new Linkedlist()
// list.append(10)
// list.append(20)
// list.append(30)
// list.display()


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

    prepend(value){
        const node=new Node(value)
        if(this.head===null){
            this.head=node
        }else{
          node.next=this.head
          this.head=node
        }
    }

    display(){
        let current=this.head
        let newvariable=''
        while(current){
            newvariable=newvariable+=`${current.value}->`
            current=current.next
        }
        console.log(newvariable);
    }
}

const list=new Linkedlist()
list.prepend(30)
list.prepend(50)
list.prepend(70)
list.display()
