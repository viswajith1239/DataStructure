// let palindrome=function(str){
//     if(str.length<=1){
//         console.log("this is true",str);
//         return true
//     }
//     if(str[0]!==str[str.length-1]){
//         console.log("this is false",str[0], str[str.length - 1]);
//         return false
//     }
//     return palindrome(str.slice(1,-1))
// }
// console.log(palindrome("mom"));


// function palindrome(str){
//     if(str.length <= 1){
//         return true;
//     }else{
//         if(str[0] !== str[str.length-1]){
//             return false;
//         }else{
//             return palindrome(str.slice(1,-1))
//         }
//     }
// }

// console.log(palindrome("mom"));

// function palindrome(str){
//     if(str.length<=1){
//         return true
//     }else if(str[0]!==str[str.length-1]){
//         return false
//     }else{
//         return palindrome(str.slice(1,-1))
//     }
// }
// console.log(palindrome("moms"));


// palindrome using recursion first method

// function palindrome(str){
//     if(str.length<=1){
//         return true
//     }else if(str[0]!==str[str.length-1]){
//         return false
//     }else{
//         return palindrome(str.slice(1,-1))
//     }
// }
// console.log(palindrome("hello"));


// palindrome using recursion second method

function palindrome(str){
    if(str.length<=1){
        return true
    }
    if(str[0]!==str[str.length-1]){
        return false
    }
    return palindrome(str.slice(1,-1))
}

console.log(palindrome("mon"));