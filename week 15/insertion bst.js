class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}
class binarysearchtree{
    constructor(){
        this.root=null
    }

    isempty(){
        return this.root===null
    }

    insert(value){
        const node=new Node(value)
        if(this.isempty()){
            this.root=node
        }else{
            this.insertnode(this.root,node)
        }
    }
    insertnode(root,node){
        if(node.value<root.value){
            if(root.left===null){
                root.left=node
            }else{
                this.insertnode(root.left,node)
            }
        }else{
            if(root.right===null){
                root.right=node
            }else{
                this.insertnode(root.right,node)
            }
        }
    }

    search(root,value){
        if(!root){
            return false
        }else{
            if(root.value===value){
                return true
            }else if(value<root.value){
                return this.search(root.left,value)
            }else{
                return this.search(root.right,value)
            }
        }
    }
}

const bst=new binarysearchtree()
console.log("it is empty",bst.isempty());

bst.insert(10)
bst.insert(5)
bst.insert(15)

console.log(bst.search(bst.root,10));
console.log(bst.search(bst.root,5));
console.log(bst.search(bst.root,15));
console.log(bst.search(bst.root,20));