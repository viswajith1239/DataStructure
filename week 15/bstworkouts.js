// class Tree{
//     constructor(value){
//         this.value=value
//         this.left=null
//         this.right=null
//     }
// }

// class binarysearchtree{
//     constructor(){
//         this.root=null
//     }

//     isEmpty(){
//         return this.root===null
//     }

//     insert(value){
//         const node=new Tree(value)
//         if(this.isEmpty()){
//             this.root=node
//         }else{  
//             this.insertnode(this.root,node)
//         }
//     }
//    insertnode(root,node){
//     if(node.value<root.value){
//         if(this.left===null){
//             this.left=node
//         }else{
//             this.insertnode(root.left,node)
//         }
//     }else{
//         if(this.right===null){
//             this.right=node
//         }else{
//             this.insertnode(root.right,node)
//         }
//     }
//    }
// }

// const bst=new binarysearchtree()
// bst.insert(10)

// bst.insert(20)
// bst.insert(30)

// class Tree {
//     constructor(value) {
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
// }

// class BinarySearchTree {
//     constructor() {
//         this.root = null;
//     }

//     isEmpty() {
//         return this.root === null;
//     }

//     insert(value) {
//         const node = new Tree(value); // Create a new instance of Tree
//         if (this.isEmpty()) {
//             this.root = node;
//         } else {
//             this.insertNode(this.root, node);
//         }
//     }

//     insertNode(root, node) {
//         if (node.value < root.value) {
//             if (root.left === null) {
//                 root.left = node;
//             } else {
//                 this.insertNode(root.left, node);
//             }
//         } else {
//             if (root.right === null) {
//                 root.right = node;
//             } else {
//                 this.insertNode(root.right, node);
//             }
//         }
//     }

//     inorderTraversal(node) {
//         if (node !== null) {
//             this.inorderTraversal(node.left);
//             console.log(node.value);
//             this.inorderTraversal(node.right);
//         }
//     }
// }

// // Example usage
// const bst = new BinarySearchTree();
// bst.insert(10);
// bst.insert(20);
// bst.insert(5);
// bst.insert(30);

// console.log("Inorder traversal:");
// bst.inorderTraversal(bst.root); // Output: 5 10 20 30


// class Tree{
//     constructor(value){
//         this.value=value
//         this.left=null
//         this.right=null
//     }
// }

// class binarysearchtree{
//     constructor(){
//         this.root=null
//     }

//     isEmpty(){
//         return this.root===null
//     }


//     insert(value){
//         const node=new Tree(value)
//         if(this.isEmpty()){
//             this.root=node
//         }else{
//            this.insertnode(this.root,node)
//         }
//     }

//     insertnode(root,node){
//         if(node.value < root.value){
//             if(root.left===null){
//                 root.left=node
//             }else{
//                 this.insertnode(root.left,node)
//             }
//         }else{
//             if(root.right===null){
//                 root.right=node
//             }else{
//                 this.insertnode(root.right,node)
//             }
//         }
//     }

//     inordertraversal(root){
//         if(root){
           
//             this.inordertraversal(root.left)
           
//             this.inordertraversal(root.right)
//             console.log(root.value);
//         }
//     }
// }


// const bst=new binarysearchtree()
// bst.insert(50)
// bst.insert(30)
// bst.insert(60)
// bst.insert(20)
// bst.insert(35)
// bst.insert(55)
// bst.insert(70)

// bst.inordertraversal(bst.root)



// class Tree{
//     constructor(value){
//         this.value=value
//         this.left=null
//         this.right=null
//     }
// }

// class binarysearchtree{
//     constructor(){
//         this.root=null
//     }

//     isempty(){
//         return this.root===null
//     }

//     insert(value){
//         const node=new Tree(value)
//         if(this.isempty()){
//             this.root=node
//         }else{
//            this.insertnode(this.root,node)
//         }
//     }

//     insertnode(root,node){
//         if(node.value<root.value){
//             if(root.left===null){
//                 root.left=node
//             }else{
//                 this.insertnode(root.left,node)
//             }
//         }else{
//             if(root.right===null){
//                 root.right=node
//             }else{
//                 this.insertnode(root.right,node)
//             }
//         }
//     }

//     inordertraversal(root){
//         if(root){
//             this.inordertraversal(root.left)
//             console.log(root.value);
//             this.inordertraversal(root.right)
//         }
//     }

//     preordertraversal(root){
//         if(root){
//             console.log(root.value);
//             this.preordertraversal(root.left)
//             this.preordertraversal(root.right)
//         }
//     }

//     postordertraversal(root){
//         if(root){
//             this.postordertraversal(root.left)
//             this.postordertraversal(root.right)
//             console.log(root.value);
//         }
//     }

//     search(root,value){
//         if(!root){
//             return false
//         }else{
//             if(value===root.value){
//                 return true
//             }else if(value<root.value){
//                 return this.search(root.left,value)
//             }else{
//                 return this.search(root.right,value)
//             }
//         }
//     }
// }

// const bst=new binarysearchtree()
// bst.insert(10)
// bst.insert(50)
// bst.insert(20)
// bst.insert(4)
// bst.insert(90)
// bst.insert(50)
// console.log('preorder');
// bst.preordertraversal(bst.root)
// console.log("inorder");
// bst.inordertraversal(bst.root)
// console.log("postorder");
// bst.postordertraversal(bst.root)


class Tree{
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
        const node=new Tree(value)
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
            if(value===root.value){
                return true
            }else if(value<root.value){
                return this.search(root.left,value)
            }else{
                return this.search(root.right,value)
            }
        }
    }

    inorder(root){
        if(root){
            this.inorder(root.left)
            console.log(root.value);
            this.inorder(root.right)
        }
    }
    preorder(root){
        if(root){
            console.log(root.value);
            this.preorder(root.left)
           
            this.preorder(root.right)
        }
    }

    postorder(root){
        if(root){
            
            this.postorder(root.left)
           
            this.postorder(root.right)
            console.log(root.value);
        }
    }
    
}

const bsts=new binarysearchtree()
bsts.insert(10)
bsts.insert(20)
bsts.insert(50)
bsts.insert(90)
bsts.insert(10)
bsts.insert(10)
console.log("in");
bsts.inorder(bsts.root)
console.log("pre");
bsts.preorder(bsts.root)
console.log("post");
bsts.postorder(bsts.root)
console.log(bsts.search(bsts.root,10));
console.log(bsts.search(bsts.root,90));
console.log(bsts.search(bsts.root,20));



