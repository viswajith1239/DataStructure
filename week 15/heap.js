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
        [this.heaps[parent], this.heaps[index]] = [  this.heaps[index], this.heaps[parent],];
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
        [this.heaps[smallest], this.heaps[index]] = [this.heaps[index], this.heaps[smallest]];
        this.shiftDown(smallest);
      }
    }
  
    print() {
      console.log(this.heaps.join(" "));
    }
  }
  
  const heaps = new Minheaps();
  heaps.add(200);
  heaps.add(34);
  heaps.add(23);
  heaps.add(78);
  heaps.add(33);
  console.log("hello");
  heaps.print()
 heaps.remove();
  
 heaps.print()
 
// max heap method 2

 class MaxHeap {
    constructor() {
      this.heap = [];
    }
  
    insert(value) {
      this.heap.push(value);
      this.shiftUp(this.heap.length - 1);
    }
  
    shiftUp(index) {
      let parent = Math.floor((index - 1) / 2);
      while (index > 0 && this.heap[parent] < this.heap[index]) {
        [this.heap[parent], this.heap[index]] = [
          this.heap[index],
          this.heap[parent],
        ];
        index = parent;
        parent = Math.floor((index - 1) / 2);
      }
    }
  
    shiftDown(index) {
      let left = 2 * index + 1;
      let right = 2 * index + 2;
      let largest = index;
      if (left < this.heap.length && this.heap[left] > this.heap[largest]) {
        largest = left;
      }
      if (right < this.heap.length && this.heap[right] > this.heap[largest]) {
        largest = right;
      }
  
      if (largest !== index) {
        [this.heap[index], this.heap[largest]] = [
          this.heap[largest],
          this.heap[index],
        ];
        this.shiftDown(largest);
      }
    }
  
    remove() {
      let max = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.shiftDown(0);
      return max;
    }
  
    print() {
      console.log(this.heap.join(" "));
    }
  }
  
  const heap = new MaxHeap();
  heap.insert(200);
  heap.insert(34);
  heap.insert(23);
  heap.insert(78);
  heap.insert(33);
  heap.remove();
  
  heap.print();






// min heap



  class minHeap{
    constructor(){
        this.storage=[]
        this.size=0
    }
    getParentIndex(index){
          return Math.floor((index-1)/2);
    }
    getLeftChildIndex(index){
        return 2 * index + 1

    }
    getRightChildIndex(index){
        return 2 * index +2
    }
    hasParent(index){
        return this.getParentIndex(index)>=0
    }
    hasLeftChildIndex(index){
        return this.getLeftChildIndex(index)<this.size

    }
    hasRightChildIndex(index){
        return this.getRightChildIndex(index)<this.size

    }
    swap(index1,index2){
        let temp=this.storage[index1]
        this.storage[index1]=this.storage[index2]
        this.storage[index2]=temp

    }
}


