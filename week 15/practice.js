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
           this.insetnode(this.root,node)
        }
    }
    insetnode(root,node){
        if(value<root.value){
            if(root.left===null){
                root.left=node
            }else{
                this.insetnode(root.left,node)
            }
        }else{
            if(root.right===null){
                root.right=node
            }else{
                this.insetnode(root.left,node)
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
    const queue=[]
    queue.push(this.root)
    while(queue.length){
        let current=queue.shift()
        console.log(current.value);
    }
    if(current.left){
        queue.push(current.left)

    }
    if(current.right){
        queue.push(current.right)
    }
   }

   min(root){
    if(!root.left){
        return root.value
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

}



class tree{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}

class bst{
    constructor(){
        this.root=null
    }
    isempty(){
        return this.root===null
    }

    insert(value){
        const node=new tree(value)
        if(this.isempty()){
            this.root=node
        }else{
           this,insetnode(this.root,node)
        }
    }

    insetnode(root,node){
        if(node.value<root.value){
            if(root.left===null){
                root.left=node
            }else{
                this.insetnode(root.left,node)
            }
        }else{
            if(root.right===null){
                root.right=node
            }else{
                this.insetnode(root.right,node)
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
            return root.value
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


    insert(value){
        const node=new tree(value)
        if(this.isempty()){
            this.root=node
        }else{
            this.insetnode(this.root,node)
        }
    }
   insetnode(root,node){
    if(node.value<root.value){
        if(root.left===null){
            root.left=node
        }else{
            this.insetnode(root.left,node)
        }
    }else{
        if(root.right===null){
            root.right=node
        }else{
            this.insetnode(root.right,node)
        }
    }
   }
   delete(value){
    this.root=deletenode(this.root,value)
   }
   deletenode(root,value){
    if(!root===null){
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
        root.right=this.min(root.right)
        root.right=this.deletenode(root.right,root.value)
    }
    return root
   }

   gethieght(root){
    if(root===null){
        return 0
    }
        const leftHight=this.gethieght(root.left)
        const rightHight=this.gethieght(root.right)
        return Math.max(leftHight,rightHight)+1
    
   }
   
}