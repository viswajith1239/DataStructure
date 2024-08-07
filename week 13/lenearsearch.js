function lenearsearch(arr,target){
    for(i=0;i<arr.length;i++){
        if(arr[i]===target){
            return i
        }
    }
    return -1
}

console.log(lenearsearch([10,2,4,6,5],4));
console.log(lenearsearch([10,2,4,6,5],5));
console.log(lenearsearch([10,2,4,6,5],10));
console.log(lenearsearch([10,2,4,6,5],20));