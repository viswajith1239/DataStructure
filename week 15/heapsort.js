//max heap method
//  function heapSort(arr) {                                        
//     let n = arr.length
//     for(let i = Math.floor(n / 2) - 1; i >= 0; i--) {
//       heapify(arr, n, i)
//     }
  
//     for(let i = n-1; i>0; i--) {
//       [arr[0], arr[i]] = [arr[i], arr[0]]
//       heapify(arr, i, 0)
//     }
  
   
//   }
  
//   function heapify(arr, n, i ) {
//     let left = 2*i+1
//     let right = 2*i+2
//     let smallest = i
  
//     if(left < n && arr[smallest] > arr[left]) {
//       smallest = left
//     }
  
//     if(right < n && arr[smallest] > arr[right]) {
//       smallest = right
//     }
  
//     if(smallest != i) {
//       [arr[smallest], arr[i]] = [arr[i], arr[smallest]]
//       heapify(arr, n, smallest)
//     }
  
//   }
  
//   let arr = [2,-2,-1,4,6,3,55,8]
//   heapSort(arr)
//   console.log(arr);
  
//   let top = arr[arr.length-1]
//   console.log(top);

// min heap method

function heapSort(arr) {
    let n = arr.length;
  
    // Build a max-heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      heapify(arr, n, i);
    }
  
    // One by one extract an element from heap
    for (let i = n - 1; i > 0; i--) {
      // Move current root to end
      let temp = arr[0];
      arr[0] = arr[i];
      arr[i] = temp;
  
      // Call max heapify on the reduced heap
      heapify(arr, i, 0);
    }
  }
  
  function heapify(arr, n, i) {
    let largest = i; // Initialize largest as root
    let left = 2 * i + 1; // left = 2*i + 1
    let right = 2 * i + 2; // right = 2*i + 2
  
    // See if left child of root exists and is greater than root
    if (left < n && arr[left] > arr[largest]) {
      largest = left;
    }
  
    // See if right child of root exists and is greater than root
    if (right < n && arr[right] > arr[largest]) {
      largest = right;
    }
  
    // Swap and continue heapifying if root is not largest
    if (largest != i) {
      let temp = arr[i];
      arr[i] = arr[largest];
      arr[largest] = temp;
  
      // Recursively heapify the affected sub-tree
      heapify(arr, n, largest);
    }
  }
  
  // Example usage:
  let arr = [2, -2, -1, 4, 6, 3, 55, 8];
  heapSort(arr);
  console.log(arr); // Output: [-2, -1, 2, 3, 4, 6, 8, 55]
  
  let top = arr[arr.length - 1];
  console.log(top); // Output: 55
  
  