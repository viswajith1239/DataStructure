class Node{
    constructor(value) {
        this.value =  value
        this.left = null
        this.right = null
        
    }
}

class BinaryTree {
    constructor() {
        this.root = null
    }

    insert(value) {
        let newNode = new Node(value)
        if(this.root === null) {
            this.root = newNode
        } else {
            this.insertNode(this.root, newNode)
        }
    }

    insertNode(node, newNode) {
        if(newNode.value < node.value) {
            if(node.left === null) {
                node.left = newNode
            } else {
                this.insertNode(node.left, newNode)
            }
        } else {
            if(node.right === null) {
                node.right = newNode
            } else {
                this.insertNode(node.right, newNode)
            }
        }
    }

    inorderTraversal(node, result = []) {
        if(node !== null) {
            this.inorderTraversal(node.left, result)
            result.push(node.value)
            this.inorderTraversal(node.right, result)
        }
        return result
    }

    preorderTraversal(node, result = []) {
        if(node !== null) {
            result.push(node.value)
            this.preorderTraversal(node.left, result)
            this.preorderTraversal(node.right, result)
        }
        return result
    }

    postorderTraversal(node, result = []) {
        if(node != null) {
            this.postorderTraversal(node.left, result)
            this.postorderTraversal(node.right, result)
            result.push(node.value)
        }
        return result
    }
    
}

let tree = new BinaryTree() 
tree.insert(4);
tree.insert(2); 
tree.insert(5);
tree.insert(1);
tree.insert(3);



console.log(tree.inorderTraversal(tree.root));

console.log(tree.preorderTraversal(tree.root));

console.log(tree.postorderTraversal(tree.root));




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
        }
        insertNode(this.root,node)
    }

    insertNode(root,node){
        if(node.value<root.value){
            if(root.left===null){
                root.left=node
            }else{
                this.insertNode(root.left,node)
            }
            
        }else{
            if(root.right===null){
                root.right=node
            }else{
                this.insertNode(root.left,node)
            }
        }
    }

    search(root,value){
        if(!root){
            return false
        }else{
            if(value===root.value){
                return true
            }else if(value<root.value){
              return  this.search(root.left,value)
            }else{
              return  this.search(root.right,value)
            }
        }
    }
  preorder(root){
    if(root){
        console.log(root.value);
        this.preorder(root.left)
        this.preorder(root.right)
    }
  }

  inorder(root){
    if(root){
        this.inorder(root.left)
        console.log(root.value);
        this.inorder(root.right)
    }
  }

  postorder(root){
    if(root){
        this.postorder(root.left)
        this.postorder(root.right)
        console.log(root.value);
    }
  }

  levelorder(){
    let queue=[]
    queue.push(this.root)
    while(queue.length){
        let curr=queue.pop()
        console.log(curr.value);
        if(curr.left){
            queue.push(curr.left)
        }
        if(curr.right){
            queue.push(curr.right)
        }
    }
  }
  min(root){
    if(!root){
        return root.value
    }else{
        return this.min(root.left)
    }
  }
  max(root){
    if(!root){
        return root.value
    }else{
        return this.max(root.right)
    }
  }
  getheight(root){
    if(root===null){
        return 0
    }else{
        let leftHight=this.getheight(root.left)
        let rightHight=this.getheight(root.right)
        return Math.max(leftHight,rightHight)+1
    }
  }
  delete(value){
    this.root=deletenode(this.root,value)
  }
  deletenode(root,value){
    if(root===null){
        return root
    }
     if(value<root.value){
        return this.deletenode(root.left,value)
    }else if(value>root.value){
        return this.deletenode(root.right,value)
    }else{
        if(!root.left&&root.right){
            return null
        }
        if(!root.left){
            return root.right
        }else if(root.right){
           return root.left
        }
        root.value=this.min(root.right)
        root.right=this.deletenode(root.right,root.value)
    }
    return root
  }
        
}