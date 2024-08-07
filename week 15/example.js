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
           return this.min(root.right)
        }
    }

    search(root,value){
        if(!root){
            return false
        }else{
            if(value===root.value){
                return true
            }else{
                if(value<root.value){
                  return  this.search(root.left,value)
                }else{
                  return  this.search(root.right,value)
                }
            }
        }
    }

    isbst(root=this.root){
        function recurse(root,min,max){
            if(!root){
                return true
            }
            if(root.value<=min||root.value>=max){
                return false
            }
            return(recurse(root.left,min,root.value)&&recurse(root.right,root.value,max))
            }
            return recurse(root,-Infinity,Infinity)
           
        }

        getheight(root){
            if(!root){
                return 0
            }else{
                let leftHight=this.getheight(root.left)
                let rightHight=this.getheight(root.right)
                return Math.max(leftHight,rightHight)+1

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

        delete(value){
            this.root=this.deletenode(this.root,value)
        }
        deletenode(root,value){
            if(!root){
                return root
            }else{
                if(value<root.value){
                    return this.deletenode(root.left,value)
                }else if(value>root.value){
                    return this.deletenode(root.right,value)
                }else{
                    if(!root.left&&!root.right){
                        return null
                    }
                    if(!root.left){
                        return root.right
                    }else if(!root.right){
                        return root.left
                    }
                }
            }
            return root
        }
       
    }



const bst=new binarysearchtree()
bst.insert(60)
bst.insert(50)
bst.insert(65)
bst.insert(45)
bst.insert(55)
bst.insert(61)
bst.insert(68)
bst.levelorder()
console.log(bst.min(bst.root));
console.log(bst.max(bst.root));
console.log(bst.search(bst.root,90));
console.log(bst.isbst(bst.root));

console.log(bst.getheight(bst.root));
console.log("pre");
bst.preorder(bst.root)
console.log("in");
bst.inorder(bst.root)
console.log("post");
bst.postorder(bst.root)
bst.delete(68)



class graph{
    constructor(){
        this.adjecencylist={}
    }

    addvertex(vertex){
        if(!this.adjecencylist[vertex]){
            this.adjecencylist[vertex]=new Set()
        }
    }

    addedge(vertex1,vertex2){
        if(!this.adjecencylist[vertex1]){
            this.addvertex(vertex1)
        }
        if(!this.adjecencylist[vertex2]){
            this.addvertex(vertex2)
        }
        this.adjecencylist[vertex1].add(vertex2)
        this.adjecencylist[vertex2].add(vertex1)
    }

    removeedge(vertex1,vertex2){
        this.adjecencylist[vertex1].delete(vertex2)
        this.adjecencylist[vertex2].delete(vertex1)
    }

    removevertex(vertex){
        if(!this.adjecencylist[vertex]){
            return null
        }
        for(let adjecentvertex of this.adjecencylist[vertex]){
            this.removeedge(adjecentvertex,vertex)
        }
        delete this.adjecencylist[vertex]
    }

    hasedge(vertex1,vertex2){
        return(
            this.adjecencylist[vertex1].has(vertex2)&&
            this.adjecencylist[vertex2].has(vertex1)
        )
    }

    display(){
        for(let vertex in this.adjecencylist){
            console.log(vertex+"=>"+[...this.adjecencylist[vertex]]);
        }
    }


    hascycle(){
        let visited=[]
        let stack=[]
        for(let vertex in this.adjecencylist){
            if(!visited.includes(vertex)){
                stack.push(vertex)
                while(stack.length){
                    let curr=stack.pop()
                    if(visited.includes(curr)){
                        return true
                    }
                    visited.push(curr)
                    for(let v of this.adjecencylist[curr]){
                        if(!visited.includes(v)){
                            stack.push(v)
                        }
                    }
                }
            }
        }
        return false
    }

      dfs(start){
        let result=[]
        let visited={}
         let stack=[start]
          visited[start]=true
          while(stack.length){
            let curr=stack.pop()
            result.push(curr)
            for(let neighbor of this.adjecencylist[curr]){
                if(!visited[neighbor]){
                    visited[neighbor]=true
                    stack.push(neighbor)
                }
            }
          }
          return result
      }


      bfs(start){
        let result=[]
        let visited={}
        let queue=[start]
        visited[start]=true
        while(queue.length){
            let curr=queue.shift()
            result.push(curr)
            this.adjecencylist[curr].forEach((neighbor)=>{
                if(!visited[neighbor]){
                    visited[neighbor]=true
                    queue.push(neighbor)
                }
            })
        }
        return result
      }
}

const gr=new graph()
gr.addvertex('a')
gr.addvertex('b')
gr.addvertex('c')
gr.addvertex('d')
gr.display()

gr.addedge("a","b")
gr.addedge("c","d")
gr.addedge("d","b")
gr.addedge("d","b")
gr.display()

console.log(gr.bfs("b"));
console.log(gr.dfs("c"));

console.log(gr.hascycle());


function heapsort(arr){
    let n=arr.length
    for(i=Math.floor(arr.length/2)-1;i>=0;i--){
        heapify(arr,n,i)
    }

    for(i=n-1;i>0;i--){
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

const arr=[4,6,7,3,2,1]
heapsort(arr)
console.log(arr);

let top=arr[arr.length-1]
console.log(top);




