function sumToN(n) {
    if (n === 1) {
        return 1;
    }

    return n + sumToN(n - 1);
}

const n = 5;
console.log(sumToN(n)); 