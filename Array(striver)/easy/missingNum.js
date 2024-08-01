// find missing number from 1 to n 
// ex: [1,2,3,5] 4 is missing
// brute and better ?
// optimal - it has 2 way to solve
// Sum and XOR
function missng(arr,n){
    let sum = 0;
    for(i=0; i<arr.length; i++){
        sum = sum + arr[i]
    }
    console.log(sum);
    return (n*(n+1)/2) - sum
}

let x = [1,2,3,4,5,7]
let n = 7
console.log(x);
console.log(missng(x,n));
console.log(missingXor(x,n));
// by using XOR x^x = 0 , x^0=x

function missingXor(arr,n) {
    let xor1 = 0
    let xor2 = 0
    for(i=0; i<n-1; i++){
        xor1 = xor1 ^ arr[i]
        xor2 = xor2 ^ (i+1);
    }
    xor2 = xor2 ^ n;
    return xor2 ^ xor1
}