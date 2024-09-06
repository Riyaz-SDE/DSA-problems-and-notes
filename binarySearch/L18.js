// painter partion (or) split array largest sum

let arr = [10,20,30,40] 
// 90,70,60
let sum = 0
let minElement = 1e9
let maxElement = -1
for(let i = 0; i<arr.length; i++){
    sum += arr[i]
    minElement = Math.min(arr[i],minElement)
    maxElement = Math.max(arr[i],maxElement)
}

function condition(arr,)
let max = -1
let min = 1e9
let p1 = 0
let p2 = sum 
for(let i = 0; i<arr.length-1; i++){
    p1 += arr[i]
    p2 -= arr[i]
    max = Math.max(p1,p2)
    min = Math.min(p1,p2)
}

console.log(max,min);


