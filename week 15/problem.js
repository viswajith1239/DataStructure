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


      search(root,value){
        if(!root){
            return false
        }else{
            if(value===root.value){
                return true
            }
            if(value<root.value){
               return this.search(root.left,value)
            }else{
              return  this.search(root.right,value)
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
          return  this.max(root.right)
        }
      }


      getheight(root){
        if(!root){
            return 0
        }else{
            let lefthight=this.getheight(root.left)
            let rightHight=this.getheight(root.right)
            return Math.max(lefthight,rightHight)+1

        }
      }

      isbst(root=this.root){
       function recuse(root,min,max){
            if(!root){
                return true
            }
            if(root.value>=max||root.value<=min){
                return false
            }
            return(recuse(root.left,min,root.value)&&recuse(root.right,root.value,max))
        }

        return recuse(root,-Infinity,Infinity)
       
      
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

delete(value){
    this.root=this.deletenode(this.root,value)
}
deletenode(root,value){
    if(!root){
        return root
    }else{
        if(value<root.value){
            this.deletenode(root.left,value)
        }else if(value>root.value){
            this.deletenode(root.right,value)
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

        
    }
    return root
}

}


const bst=new binarysearchtree()

bst.insert(50)
bst.insert(40)
bst.insert(55)
bst.insert(35)
bst.insert(45)
bst.insert(51)
bst.insert(56)
bst.levelorder()
console.log("search");
console.log(bst.search(bst.root,76));

console.log((bst.min(bst.root)));
console.log((bst.max(bst.root)));
console.log(bst.getheight(bst.root));
console.log(bst.isbst());

console.log("pre");

bst.preorder(bst.root)
console.log("inoreder");
bst.inorder(bst.root)
console.log("post");
bst.postorder(bst.root)

console.log("befor");
console.log(bst.delete(56));
console.log("after");



class graph{
    constructor(){
        this.adjacencylist={}
    }

    addvertex(vertex){
        if(!this.adjacencylist[vertex]){
            this.adjacencylist[vertex]=new Set()
        }
    }

    addedge(vertex1,vertex2){
        if(!this.adjacencylist[vertex1]){
            this.addvertex(vertex1)
        }
        if(!this.adjacencylist[vertex2]){
            this.addvertex(vertex2)
        }
        this.adjacencylist[vertex1].add(vertex2)
        this.adjacencylist[vertex2].add(vertex1)
    }


    removeedge(vertex1,vertex2){
        this.adjacencylist[vertex1].delete(vertex2)
        this.adjacencylist[vertex2].delete(vertex1)
    }

    removevertex(vertex){
        for(let adjecentvertex of this.adjacencylist[vertex]){
            this.removeedge(adjecentvertex,vertex)
        }
        delete this.adjacencylist[vertex]
    }

    display(){
        for(let vertex in this.adjacencylist){
            console.log(vertex+"=>"+[...this.adjacencylist[vertex]]);
        }
    }

    hascycle(){
        let visited=[]
        let stack=[]
        for(let vertex in this.adjacencylist){
            if(!visited.includes(vertex)){
                stack.push(vertex)
                while(stack.length){
                    let curr=stack.pop()
                    if(visited.includes(curr)){
                        return true
                    }
                    visited.push(curr)
                    for(let v of this.adjacencylist[curr] ){
                        if(!visited.includes(v)){
                            stack.push(v)
                        }
                    }
                }

                

            }
        }
        return false
    }
}

const gr=new graph()
gr.addvertex("a")
gr.addvertex("b")
gr.addvertex("c")
gr.addvertex("d")
gr.addvertex("e")
gr.addvertex("f")

gr.display()


gr.addedge("a","b")
gr.addedge("c","d")
gr.addedge("f","e")
gr.addedge("b","c")
gr.addedge("f","a")
gr.addedge("d","b")
gr.addedge("e","a")

gr.display()

console.log(gr.hascycle());




function heapsort(arr){
    let n=arr.length
    for(let i=Math.floor(arr.length/2);i>=0;i--){
        heapify(arr,n,i)
    }

    for(let i=n-1;i>0;i--){
        let temp=arr[0]
        arr[0]=arr[i]
        arr[i]=temp

        heapify(arr,i,0)
    }

    function heapify(arr,n,i){
        let largest=i
        let left=i*2+1
        let right=i*2+2
        if(left<n&&arr[left]>arr[largest]){
           largest=left
        }
        if(right<n&&arr[right]>arr[largest]){
          largest=right
        }

        if(largest!=i){
            let temp=arr[i]
            arr[i]=arr[largest]
            arr[largest]=temp

            heapify(arr,n,largest)
        }
    }
}


const arr=[2,4,5,6,7,1]
heapsort(arr)
console.log(arr);
let top=arr[arr.length-1]
console.log(top);
