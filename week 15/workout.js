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
        let curr=queue.shift()
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
    }
    if(value===root.value){
        return true
    }else{
        if(value<root.value){
           return this.search(root.left,value)
        }else{
           return this.search(root.right,value)
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
        return (recurse(root.left,min,root.value)&&recurse(root.right,root.value,max))
    }
    return recurse(root,-Infinity,Infinity)
  }

  height(root){
    if(!root){
        return 0
    }else{
        let left=this.height(root.left)
        let right=this.height(root.right)
        return Math.max(left,right)+1
    }
  }

  thirdhighest(root){
    if(!root){
        return null
    }
    let count=0
    let third
    function traverse(node){
        if(!node||count>=3){
            return
        }
        traverse(node.right)
        if(count===3){
            count++
            return third=node.value
           
            

        }
        traverse(node.left)
    }
    traverse(root)
    return third
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
    if(!root){
        return root
    }else{
        if(value<root.value){
            this.deletenode(root.left,value)
        }else if(value>root.value){
            this.deletenode(root.right,value)
        }else{
            if(!root.right&&!root.right){
                return null
            }
            if(!root.left){
                return root.right
            }else if(!root.right){
                return root.left
            }
            root.value=this.min(root.right)
            root.right=this.deletenode(root.value,root.right)
        }
    }
    return root
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
}


const bst=new binarysearchtree()

bst.insert(10)
bst.insert(10)
bst.insert(10)
bst.insert(10)
bst.insert(10)
bst.levelorder()
console.log(bst.search(bst.root,30));
console.log(bst.isbst(bst.root));
console.log(bst.height(bst.root));
console.log(bst.thirdhighest(bst.root));
console.log(bst.max(bst.root));
console.log(bst.min(bst.root));
bst.inorder(bst.root)
bst.preorder(bst.root)
bst.postorder(bst.root)



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
    hasedge(vertex1,vertex2){
        return(
            this.adjecencylist[vertex1].has(vertex1)&&
            this.adjecencylist[vertex2].has(vertex2)
        )
    }

    removevertex(vertex){
        if(!this.adjecencylist[vertex]){
            return
        }
        for(let adjecentvertex of this.adjecencylist[vertex]){
            this.removeedge(vertex,adjecentvertex)
        }
        delete this.adjecencylist[vertex]
    }

    display(){
        for (let vertex in this.adjecencylist){
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
                    for(let v of this.adjecencylist[vertex]){
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
        let stack=[start]
        let result=[]
        let visited={}
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
gr.addvertex("a")
gr.addvertex("b")
gr.addvertex("c")
gr.addvertex("d")
gr.addvertex("e")
gr.display()

gr.addedge("a","b")
gr.addedge("b","d")
gr.addedge("e","c")
gr.addedge("a","e")
gr.addedge("b","e")
gr.display()

console.log(gr.hascycle());
console.log(gr.dfs("a"));
console.log(gr.bfs("b"));


class Nodes{
    constructor(){
        this.childern={}
        this.isendofword=false
    }
}

class trie{
    constructor(){
        this.root=new Nodes()
    }

    insert(word){
        let node=this.root
        for(let char of word){
            if(!node.childern[char]){
                node.childern[char]=new Nodes()
            }
            node=node.childern[char]
        }
        node.isendofword=true
    }

    contains(word){
        let node=this.root
        for(let char of word){
            if(!node.childern[char]){
                return false
            }
            node=node.childern[char]
        }
        return node.isendofword
    }

    startwithprefix(prefix){
        let node=this.root
        for(let char of prefix){
            if(!node.childern[char]){
                return false
            }
            node=node.childern[char]
        }
        return true
    }
   getwordwithprefix(prefix){
    let node=this.root
    for(let char of prefix){
        if(!node.childern[char]){
            return []
        }
        node=node.childern[char]
    }
    let word=[]
    this.getword(node,prefix,word)
    return word
   }
   getword(node,prefix,word){
    if(node.isendofword){
        word.push(prefix)
    }
    for(let [char,childNode]of Object.entries(node.childern)){
        this.getword(childNode,prefix+char,word)
    }
   }
  

   
}

const tr=new trie()

tr.insert("apple")
tr.insert("app")
tr.insert("baloon")
tr.insert("cartoon")
tr.insert("devops")
console.log(tr.contains("apple"));

console.log(tr.startwithprefix("manu"));
console.log(tr.getwordwithprefix("d"));


class minheap{
    constructor(){
        this.heap=[]

    }

    add(value){
        this.heap.push(value)
        this.shiftup(this.heap.length-1)
    }
    shiftup(index){
        let parent=Math.floor((index-1)/2)
        while(index>0&&this.heap.length>this.heap[parent]){
            let temp=this.heap[parent]
            this.heap[parent]=this.heap[index]
            this.heap[index]=temp
            index=parent
            parent=Math.floor((index-1)/2)
        }
    }

    remove(){
        let min=this.heap[0]
        this.heap[0]=this.heap.pop()
        this.shiftdown(0)
        return min
    }

    shiftdown(index){
        let left=2*index+1
        let right=2*index+2
        let smallest=index
        if(left<this.heap.length&&this.heap[left]<this.heap[smallest]){
            smallest=left
        }
        if(right<this.heap.length&&this.heap[right]<this.heap[smallest]){
            smallest=right
        }
        if(smallest!==index){
            let temp=this.heap[smallest]
            this.heap[smallest]=this.heap[index]
            this.heap[index]=temp
            this.shiftdown(smallest)
        }
    }
    display(){
        console.log(this.heap.join(" "));
      }
}


const heap=new minheap()
heap.add(18)
heap.add(20)
heap.add(38)
heap.add(5)
heap.display()
console.log(heap.remove());
heap.display()



class MaxHeap{
    constructor(){
        this.heap=[]

    }
    add(value){
        this.heap.push(value)
        this.shiftup(this.heap.length-1)
    }

    shiftup(index){
        let parent=Math.floor((index-1)/2)
        while(index>0&&this.heap.length>this.heap[parent]){
            let temp=this.heap[parent]
            this.heap[parent]=this.heap[index]
            this.heap[index]=temp
            index=parent
            parent=Math.floor((index-1)/2)
        }
    }

    remove(){
        let max=this.heap[0]
        this.heap[0]=this.heap.pop()
        this.shiftdown(0)
        return max
    }
    shiftdown(index){
        let left=2*index+1
        let right=2*index+2
        let largest=index
        if(left<this.heap.length&&this.heap[left]>this.heap[largest]){
            largest=left
        }
        if(right<this.heap.length&&this.heap[right]>this.heap[largest]){
            largest=right
        }
        if(largest!==index){
            let temp=this.heap[largest]
            this.heap[largest]=this.heap[index]
            this.heap[index]=temp
            this.shiftdown(largest)
        }
    }
    display(){
        console.log(this.heap.join(" "));
    }
}

const max=new MaxHeap()
max.add(20)
max.add(50)
max.add(19)
max.add(65)
max.display()
console.log(max.remove());
max.display()



function heapsort(arr){
    let n=arr.length
    for(let i=Math.floor(arr.length/2);i>=0;i--){
        heapyfy(arr,n,i)
    }
    for(let i=n-1;i>0;i--){
        let temp=arr[0]
        arr[0]=arr[i]
        arr[i]=temp
        heapyfy(arr,i,0)
    }

    function heapyfy(arr,n,i){
        let left=2*i+1
        let right=2*i+2
        let largest=i
        if(left<n&&arr[left]>arr[largest]){
            largest=left
        }
        if(right<n&&arr[right]>arr[largest]){
            largest=right
        }
        if(largest!==i){
            let temp=arr[i]
            arr[i]=arr[largest]
            arr[largest]=temp
            heapyfy(arr,n,largest)
        }
    }
}

const arr=[6,5,4,7,8,0]
heapsort(arr)
console.log(arr);
let top=arr[arr.length-1]
console.log(top);

function check(str){
    for(let i=0;i<=str.length;i++){
        if(str[str.length-1]!=="."){
            str=str+"."
        }
        return str
    }
}
console.log(check("hi welcome"));










