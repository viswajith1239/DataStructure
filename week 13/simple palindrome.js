function palindrome(str){
    for(i=0;i<str.length/2;i++){
        if(str[0]===str[str.length-1]){
            return true
        }else{
            return false
        }
    }
}

console.log(palindrome("moms"));