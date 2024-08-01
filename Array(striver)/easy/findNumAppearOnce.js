// find number appears once
// [1,1,2,3,3,4,4,5,5] = answer : 2
// brute
let x = [1,1,2,3,3,4,4,5,5]
function appearsOnce(arr){
    let len = arr.length
    let count = 0;
    for(i=0; i<len; i++){
        let num = arr[i]
        for(j=0; j<len; j++){
            if(arr[j] === num){
                count++
            }
        }
        if(count === 1) return num
        count = 0
    }
}

function maxElement(arr) {
    let max = arr[0]
    for(i=0; i<arr.length; i++){
        if(max<arr[i]) {
            max=arr[i]
        }
    }
    return max
}

// better - using hasmap
function appearsOnce2(arr){
    let len = arr.length
    let hasmap = Array(maxElement(arr) + 1).fill(0)
    for(j=0; j<len; j++){
        // if(hasmap)
        hasmap[arr[j]]++
    }
    // return hasmap
    for(i=0; i<hasmap.length; i++){
        if(hasmap[i] === 1){
            return i
        }
    }
}

// optimal
function appearsOnce3(arr){
    let len = arr.length
    let xor = 0
    for(i=0; i<len; i++){
        xor = xor ^ arr[i]
    }
    return xor
}


console.log(appearsOnce(x));
console.log(appearsOnce2(x));
console.log(appearsOnce3(x));
// console.log(maxElement(x));