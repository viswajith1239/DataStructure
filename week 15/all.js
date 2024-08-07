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

    isemty(){
        return this.root===null
    }
    

    insert(value){
        const node=new Node(value)
        if(this.isemty()){
            this.root=node
        }else{
            this.insertNode(this.root,node)
        }
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
                this.insertNode(root.right,node)
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
                this.search(root.left,value)
            }else{
                this.search(root.right,value)
            }
        }
    }

    levelorder(){
        let queue=[]
        queue.push(this.root)
        while(queue.length){
            let current=queue.pop()
            console.log(current.value);
            if(current.left){
                queue.push(current.left)
            }
            if(current.right){
                queue.push(current.right)
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

    getHeight(root){
        if(root===null){
            return 0
        }else{
            let leftHight=this.getHeight(root.left)
            let rightHight=this.getHeight(root.right)
            return Math.max(leftHight,rightHight)+1
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

    delete(value){
        this.root=this.deletenode(this.root,value)
    }

    deletenode(root,value){
        if(root===null){
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

    isbst(root=this.root){
       function recurse(root,min,max){
        if(root===null){
            return true
        }
        if(root.value>=max||root.value<=min){
            return false
        }
        return recurse(root.left,min,root.value)&&recurse(root.right,root.value,max)
       }
       return recurse(root,-Infinity,Infinity)

}
}


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
        if(!this.adjacencylist[vertex]){
            return 
        }
        for(let adjecentvertex of this.adjacencylist[vertex]){
            this.removeedge(adjecentvertex,vertex)
        }
        delete this.adjacencylist[vertex]
    }

    hasedge(vertex1,vertex2){
       return(
        this.adjacencylist[vertex1].has(vertex2)&&
        this.adjacencylist[vertex2].has(vertex1)
       )
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
                    for(let v of this.adjacencylist[curr]){
                        if(!visited.includes(v)){
                            stack.push(v)
                        }
                    }
                }
            }
        }
        return false
    }

    // bfs

    bfs(start){
        const result=[]
        const visited={}
        const queue=[start]
        visited[start]=true

        while(queue.length){
            const currentVertex=queue.shift()
            result.push(currentVertex)
            this.adjacencylist[currentVertex].forEach((neighbour)=>{
                if(!visited[neighbour]){
                    visited[neighbour]=true
                    queue.push(neighbour)
                }
            })
        }
        return result

    }

    // dfs

    dfs(start){
        const result=[]
        const visited={}
        const stack=[start]
        visited[start]=true
        while(stack.length){
            const currentVertex=stack.pop()
            result.push(currentVertex)
            for(let neighbor of this.adjacencylist[currentVertex]){
                if(!visited[neighbor]){
                    visited[neighbor]=true
                    stack.push(neighbor)
                }
            }
        }
        return result
        
    }

}





const bst=new binarysearchtree()
const gr=new graph()
bst.insert(30)
bst.insert(25)
bst.insert(35)
bst.insert(20)
bst.insert(28)
bst.insert(32)
bst.insert(37)
bst.levelorder()
console.log("pre");
bst.preorder(bst.root)
console.log("inorder");
bst.inorder(bst.root)
console.log("post");
bst.postorder(bst.root)
console.log("hieght");
console.log(bst.getHeight(bst.root));

console.log(bst.min(bst.root));
console.log(bst.max(bst.root));
console.log("delete");
console.log(bst.delete(28));
console.log("afterdelete");
bst.levelorder()
console.log(bst.isbst(bst.root));



console.log("graph");
gr.addvertex("a")
gr.addvertex("b")
gr.addvertex("c")
gr.addvertex("d")
gr.addvertex("e")
gr.addvertex("f")

gr.addedge("a","b")
gr.addedge("c","b")
gr.addedge("a","d")
gr.addedge("e","f")
gr.addedge("a","f")
gr.addedge("d","b")
gr.addedge("c","b")
console.log(gr.bfs("a"));
console.log("dfs");
console.log(gr.dfs('a'));
;



gr.display();
console.log(gr.hascycle());



function heapsort(arr){
    let n=arr.length
    for(i=Math.floor(arr.length/2);i>=0;i--){
        heapify(arr,n,i)
    }

    for(let i=n-1;i>0;i--){
        let temp=arr[0]
        arr[0]=arr[i]
        arr[i]=temp
        heapify(arr,i,0)
    }

    function heapify(arr,n,i){
        let smallest=i
        let left=i*2+1
        let right=i*2+2
        if(left<n&&arr[left]>arr[smallest]){
            smallest=left
        }
        if(right<n&&arr[right]>arr[smallest]){
            smallest=right
        }

        if(smallest!=i){
            let temp=arr[i]
            arr[i]=arr[smallest]
            arr[smallest]=temp
            heapify(arr,n,smallest)
        }

    }
}

const arr=[6,5,6,0,9,1,2]
heapsort(arr);
console.log(arr);
let top=arr[arr.length-1]
console.log(top);




// let rows = 3, cols = 4;
// let matrix = [];
// let value = 1;
// for (let i = 0; i < rows; i++) {
//     matrix[i] = [];
//     for (let j = 0; j < cols; j++) {
//         matrix[i][j] = value++;
//     }
// }
// console.log(matrix);



