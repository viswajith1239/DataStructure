class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}


class biarysearchtree{
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

    levelordeer(){
        const queue=[]
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

    gethight(root){
        if(!root){
            return 0
        }else{
            let leftHight=this.gethight(root.left)
            let rightHight=this.gethight(root.right)
            return Math.max(leftHight,rightHight)+1
        }
    }

    min(root){
        if(!root.left){
            return root.value
        }else{
          return  this.min(root.left)
        }
    }
    max(root){
        if(!root.right){
            return root.value
        }else{
           return this.max(root.right)
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
        this.root=deletenode(this.root,value)
    }

    deletenode(root,value){
        if(!root){
            return root
        } else {
        if(value<root.value){
            return this.deletenode(root.left,value)
        }else if(value>root.value){
            return this.deletenode(root.right,value)
        }else{
            if(!root.right&&!root.left){
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

    findthirdheighest(root){
        if(!root){
            return null
        }
        let count=0
        let third
        function traverse(node){
            if(!node|| count>=3){
                return
            }
            traverse(node.right)
            count++
            if(count===3){
                third=node.value  
                return
            }
            traverse(node.left)

        }
        traverse(root)
        return third
    }
}




const bst=new biarysearchtree()
bst.insert(10)
bst.insert(20)
bst.insert(4)
bst.insert(40)
bst.insert(50)
bst.insert(70)
bst.insert(5)
bst.levelordeer()
console.log(bst.isbst(bst.root));
console.log(bst.gethight(bst.root));
console.log(bst.min(bst.root));
console.log(bst.max(bst.root));
console.log(bst.search(bst.root,90));
console.log("pre");
bst.preorder(bst.root)
console.log("in");
bst.inorder(bst.root)
console.log("post");
bst.postorder(bst.root)

console.log(bst.findthirdheighest(bst.root));


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
            this.adjecencylist[vertex1].has(vertex2)&&
            this.adjecencylist[vertex2].has(vertex1)
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
        for(let vertex in this.adjecencylist){
            console.log(vertex+"=>"+[...this.adjecencylist[vertex]]);
        }
    }

    hascycle(){
        let  stack=[]
        let visited=[]
        for(let vertex in this.adjecencylist){
            if(!visited.includes(vertex)){
                stack.push(vertex)
                while(stack.length){
                    let curr=stack.pop()
                    if(!visited.includes(curr)){
                        return true
                    }
                    visited.push(curr)

                    for(let  v of this.adjecencylist[curr]){
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
        visited[stack]=true
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
gr.addvertex("f")
gr.display()

gr.addedge("a","b")
gr.addedge("c","b")
gr.addedge("a","d")
gr.addedge("e","a")
gr.addedge("e","f")

gr.display()

console.log(gr.hascycle());
console.log(gr.bfs("c"));
console.log(gr.dfs("a"));


class Nodes{
    constructor(){
        this.children={}
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
            if(!node.children[char]){
                node.children[char]=new Nodes()
            }
            node=node.children[char]
        }
        node.isendofword=true
    }

    contain(word){
        let node=this.root
        for(let char of word){
            if(!node.children[char]){
                return false
            }
            node=node.children[char]
        }
        return node.isendofword
    }

    startwithprefix(prefix){
        let node=this.root
        for(let char of prefix){
            if(!node.children[char]){
                return false
            }
            node=node.children[char]
        }
        return true
    }

    
    getWordWithPrefix(prefix){
        let node=this.root
        for(let char of prefix){
            if(!node.children[char]){
                return []
            }
            node=node.children[char]
        }
        let words=[]
        this.getWord(node,prefix,words)
        return words
    }
    getWord(node,prefix,words){
        if(node.isEndOfWord){
            words.push(prefix)
        }
        for (let [char, childNode] of Object.entries(node.children)) {
          this.getWord(childNode, prefix + char, words);
        }

    }
}

const tr=new trie()
tr.insert("apple")
tr.insert("app")
tr.insert("baloon")
console.log(tr.contain("app"));
console.log(tr.contain("manu"));

console.log(tr.startwithprefix("vu"));



class MinHeap {
    constructor() {
      this.heaps = [];
    }
  
    add(value) {
      this.heaps.push(value);
      this.shiftUp(this.heaps.length - 1);
    }
  
    shiftUp(index) {
      let parent = Math.floor((index - 1) / 2);
  
      while (index > 0 && this.heaps[parent] > this.heaps[index]) {
       
        let temp = this.heaps[parent];
        this.heaps[parent] = this.heaps[index];
        this.heaps[index] = temp;
  
        index = parent;
        parent = Math.floor((index - 1) / 2);
      }
    }
  
    remove() {
      let min = this.heaps[0];
      this.heaps[0] = this.heaps.pop();
      this.shiftDown(0);
      return min;
    }
  
    shiftDown(index) {
      let left = 2 * index + 1;
      let right = 2 * index + 2;
      let smallest = index;
  
      if (left < this.heaps.length && this.heaps[left] < this.heaps[smallest]) {
        smallest = left;
      }
      if (right < this.heaps.length && this.heaps[right] < this.heaps[smallest]) {
        smallest = right;
      }
  
      if (smallest !== index) {
       
        let temp = this.heaps[smallest];
        this.heaps[smallest] = this.heaps[index];
        this.heaps[index] = temp;
  
        this.shiftDown(smallest);
      }
    }
  
    print() {
      console.log(this.heaps.join(" "));
    }
  }
  
 
  const heap = new MinHeap();
  heap.add(10);
  heap.add(5);
  heap.add(3);
  heap.add(2);
  heap.add(4);
  heap.print(); 
  
  console.log(heap.remove());  
  heap.print(); 
  


function heapsort(arr){
    let n=arr.length
    for(let i=Math.floor(arr.length/2)-1;i>=0;i--){
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
        let left=2*i+1
        let right=2*i+2
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

const arr=["abin","mnu","vipin","anathu"]
heapsort(arr)
console.log(arr);

let top=arr[arr.length-1]
console.log(top);


class MaxHeap{
    constructor(){
        this.heap=[]
    }
    add(value){
        this.heap.push(value)
        this.shiftUp(this.heap.length-1)
    }

    shiftUp(index){
        let parent=Math.floor((index-1)/2)
        while(index>0&&this.heap[parent]<this.heap[index]){
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
        this.shiftDown(0)
        return max
    }

    shiftDown(index){
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

            this.shiftDown(largest)
        }
    }

    display(){
        console.log(this.heap.join(" "));
    }
}
const max=new MaxHeap()
max.add(60)
max.add(50)
max.add(40)
max.add(45)
max.add(38)
max.add(30)
max.add(28)
max.display()
console.log(max.remove());
max.display()




class PriorityQueue {
    constructor() {
        this.queue = [];
    }

    getParentIndex(i) {
        return Math.floor((i - 1) / 2);
    }

    getLeftChild(i) {
        return 2 * i + 1;
    }

    getRightChild(i) {
        return 2 * i + 2;
    }

    enqueue(value, priority) {
        this.queue.push({ value, priority });
        this.queueUp(this.queue.length - 1);
    }

    queueUp(index) {
        let current = index;
        while (current > 0 && this.queue[current].priority < this.queue[this.getParentIndex(current)].priority) {
            let parentIndex = this.getParentIndex(current);
          
            let temp = this.queue[current];
            this.queue[current] = this.queue[parentIndex];
            this.queue[parentIndex] = temp;
            current = parentIndex;
        }
    }

    dequeue() {
        if (this.queue.length === 0) {
            return null;
        }
        const root = this.queue[0];
        const last = this.queue.pop();
        if (this.queue.length > 0) {
            this.queue[0] = last;
            this.dequeueDown(0);
        }
        return root;
    }

    dequeueDown(index) {
        let smallest = index;
        const left = this.getLeftChild(index);
        const right = this.getRightChild(index);

        if (left < this.queue.length && this.queue[left].priority < this.queue[smallest].priority) {
            smallest = left;
        }
        if (right < this.queue.length && this.queue[right].priority < this.queue[smallest].priority) {
            smallest = right;
        }

        if (smallest !== index) {
            
            let temp = this.queue[index];
            this.queue[index] = this.queue[smallest];
            this.queue[smallest] = temp;
            this.dequeueDown(smallest);
        }
    }

    printQueue() {
        console.log(this.queue.map(node => `${node.value} (priority: ${node.priority})`));
    }
}

const prq = new PriorityQueue();
prq.enqueue("lunch", 4);
prq.enqueue("Dinner", 1);
prq.enqueue("Supper", 2);
prq.enqueue("Breakfast", 3);

console.log("Print queue after enqueue operations");
prq.printQueue();

console.log("Queue after dequeue operations");
console.log(prq.dequeue());

console.log("Queue after dequeue operation");
prq.printQueue();






 















