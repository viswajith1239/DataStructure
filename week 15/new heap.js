



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
        }
    }
    display(){
        console.log(this.heap.join(" "));
    }
}

const heap=new minheap()
heap.add(5)
heap.add(10)
heap.add(16)
heap.add(18)
heap.add(20)
heap.display()

console.log(heap.remove());
heap.display()
