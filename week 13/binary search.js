// const binary=function(arr,target){
//     let low=0
//     let higher=arr.length-1
//     let middle
//     while(low<=higher){
//         middle=Math.floor(higher+low/2)
//         if(arr[middle]===target){
//             return middle
//         }if (target<arr[middle]) {
//             low=low+1
//         } else {
//             higher=higher-1
//         }
        
//     }
//     return -1
// }
// console.log(binary([1,2,3,4,5],5));
function binary(arr,target){
    let low=0
    let higher=arr.length-1
    let middle
   while(low<=higher){
    middle=Math.floor(higher+low/2)
   if(arr[middle]===target){
    return middle
   }if(target<arr[middle]){
    low=low+1
   }else{
    higher=higher-1
   }
}
   return -1
}

console.log(binary([1,2,3,4],4));