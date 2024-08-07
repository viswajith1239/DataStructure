// class TreeNode{
//     constructor(value){
//         this.value=value
//         this.left=null
//         this.right=null
//     }
// }

// function isBST(node,min=null,max=null){
//     if(node===null){
//         return true
//     }

//     if((min!==null&&node.value<=min)||(max!==null&&node.value>=max)){
//         return false
//     }
//     return isBST(node.left,min,node.value)&&isBST(node.right,node.value,max)
// }


// const root=new TreeNode(10)
// root.left=new TreeNode(5)
// root.right=new TreeNode(15)
// root.left.left=new TreeNode(2)
// root.left.right=new TreeNode(7)
// root.right.left=new TreeNode(12)
// root.right.right=new TreeNode(18)
// console.log(isBST(root));





class TreeNode{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}

function isBST(node,max=null,min=null){
    if(node===null){
        return true
    }
    if((min!=null&&node.value<=min)||(max!=null&&node.value>=max)){
        return false
    }
    return isBST(node.left,min,node.value)&&isBST(node.right,node.value,max)
}
const root=new TreeNode(50)
root.left=new TreeNode(30)
root.right=new TreeNode(70)
root.left.left=new TreeNode(20)
root.left.right=new TreeNode(35)
root.right.left=new TreeNode(65)
root.right.right=new TreeNode(75)
console.log(isBST(root));


class tree{
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
        const node=new node(value)
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
        const queue=[]
        queue.push(root)
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
    max(root){
        if(!root.right){
           return root.value
        }else{
            return Math.max(root.right)
        }
    }

    min(root){
        if(root.left){
           return root.value
        }else{
            return Math.min(root.left)
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
        return this.deletenode(root.right,va)
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
   getheight(){
    if(root===null){
        return 0
    }
    leftheight=this.getheight(root.left)
    rightheight=this.getheight(root.right)
    return Math.max(leftheight,rightheight)+1
   }

   isBST(root=this.root){
    function recurse(root,min,max){
        if(root===null){
            return true
        }
        if(root.value<=min||root.value>=max){
            return false
        }
        return (recurse(root.left,min,root.value)&&recurse(root.right,root.value,max))
    }
    return recurse(root,-Infinity,Infinity)
   }
}





