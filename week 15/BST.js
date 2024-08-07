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
    preorder(root){
        if(root){
            console.log(root.value);
            this.preorder(root.left)
            this.preorder(root.right)
        }
    }

    // inOrder(root){
    //     if(root){
    //         this.inOrder(root.left)
    //         console.log(root.value);
    //         this.inOrder(root.right)
    //     }
    // }
    inOrder(root){
        if(root===null){
            return []
        }
        return [...this.inOrder(root.left),root.value,...this.inOrder(root.right)]
    }


    postorder(root){
        if(root){
            this.postorder(root.left)
            this.postorder(root.right)
            console.log(root.value);
        }
    }

    levelorder(){
        const queue=[]
        queue.push(this.root)
        while(queue.length){
            let current=queue.shift()
            console.log(current.value);
            if(current.left){
                queue.push(current.left)
            }
            if(current.right){
                queue.push(current.right)
            }
        }
    }

    min(root){
        if(!root.left){
            return  root.value
        }else{
            return this.min(root.left)
        }
    }

    max(root){
        if(!root.right){
            return root.value

        }else{
            return this.max(root.right)
        }
    }


    delete(value){
        this.root=this.deletenode(this.root,value)
    }
    deletenode(root,value){
        if(root===null){
            return root
        }
        if(value<root.value){
            root.left=this.deletenode(root.left,value)
        }else if(value>root.value){
            root.right=this.deletenode(root.right,value)
        }else{
            if(!root.left&&!root.right){
                return null
            }
            if(!root.left){
                return root.right
            }else if(!root.right){
                return root.left
            }
            root.value=this.min(root.right) 
            root.right=this.deletenode(root.right,root.value)
        }
        return root
    }

    isBST(){
        const inordertraversal=this.inOrder(this.root)
        for(let i=1;i<inordertraversal.length;i++){
            if(inordertraversal[i]<=inordertraversal[i-1]){
                return false
            }
        }
        return true
    }

    getHight(root){
        if(root===null){
            return 0
        }

        const leftHight=this.getHight(root.left)
        const rightHight=this.getHight(root.right)
        return Math.max(leftHight,rightHight)+1
    }

    isbalanced(){
        function checkheight(root){
            if(root==null){
                return 0
            }
            let leftHight=checkheight(root.left)
            if(leftHight==-1){
                return -1
            }
            let rightHight=checkheight(root.right)
            if(rightHight==-1){
                return -1
            }
            if(Math.abs(leftHight-rightHight)>1){
                return -1
            }
            return Math.max(leftHight,rightHight)+1
        }
        return checkheight(this.root)!==-1
    }


    finddepth(target){
        function findMaindepth(root,depth){
            if(root==null){
                return-1
            }
            if(target===root.value){
                return depth
            }
            let leftdepth=findMaindepth(root.left,depth+1)
            let rightdepth=findMaindepth(root.right,depth+1)
            return Math.max(leftdepth,rightdepth)
        }
        return findMaindepth(this.root,0)
    }


    isBst(root=this.root){
        function recurse(root,min,max){
            if(root==null){
                return true
            }
            if(root.value>=max||root.value<=min){
                return false
            }
            return (recurse(root.left,min,root.value)&& recurse(root.right,root.value,max))
    
        }
         return recurse(root,-Infinity,Infinity)
    
    }

    isSumTree(root){
        if(root===null||root.left===null&&root.right===null){
            return true
        }

        let leftsum=this.sumsubtree(root.left)
        let rightsum=this.sumsubtree(root.right)

        if(
            root.value===leftsum+rightsum&&
            this.isSumTree(root.left)&&
            this.isSumTree(root.right)
        ){
            return true
        }
        return false
    }
    sumsubtree(node){
        if(node===null){
            return 0
        }
        return (
            node.value+this.sumsubtree(node.left)+this.sumsubtree(node.right)
        )
        
    }
}

const bst=new binarysearchtree()
console.log("it is empty",bst.isempty());

bst.insert(26)
bst.insert(15)
bst.insert(30)
bst.insert(10)
bst.insert(17)
bst.insert(27)



bst.levelorder()
console.log("deleted");
bst.delete(15)
console.log("after delting  ");
bst.levelorder()

console.log(bst.isBST());
console.log("hello");
console.log(bst.getHight(bst.root));
console.log("Is balanced:", bst.isbalanced());
console.log(bst.finddepth(5));
console.log("hai",bst.isSumTree(bst.root));


// console.log(bst.search(bst.root,10));
// console.log(bst.search(bst.root,5));
// console.log(bst.search(bst.root,15));
// console.log(bst.search(bst.root,20));
// bst.preorder(bst.root)
// bst.inorder(bst.root)
// bst.postorder(bst.root)

// bst.levelorder()

console.log(bst.min(bst.root));
console.log(bst.max(bst.root));