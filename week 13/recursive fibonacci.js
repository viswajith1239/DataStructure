function recursicefibonacci(n){
    if(n<2){
        return n
    }

    return recursicefibonacci(n-1)+   recursicefibonacci(n-2)
}

console.log(recursicefibonacci(0));
console.log(recursicefibonacci(1));
console.log(recursicefibonacci(6));