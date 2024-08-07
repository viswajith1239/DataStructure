var plusOne = function(digits) {
    let sum=BigInt(digits.join(''))
    sum++
    return sum.toString().split('')
};
console.log([1,2,4]);