// two sum
// 1 variation return boolean if it has target
// 2 variation i has target return indices
// let x =[2,6,5,8,11]  
// brute force 
function sol1(arr,target){
    let len = arr.length
    for(i=0; i<len; i++){
        for(j=0; j<len; j++){
            // if(i=j){
            //     continue
            // }
            if(arr[i] + arr[j] === target){
                return [i,j]
            }
        }
    }
}
// better solution
function soll2(arr,target){
    let len = arr.length
    let hash = new Map()
    for(j=0; j<len; j++){
        hash.set(arr[i],i)
    }
    for(i=0; i<len; i++){
        if(hash.has(target - arr[i]) ){
            return [i,hash.get(target - arr[i])]
            // hash.set(arr[i],i)
        }
    }
}
// better
function sol3(arr,target){
    let len = arr.length
    let i = 0
    let j = len - 1
    while(i<j){
        if(arr[i] + arr[j] === target ){
            return [i,j]
        }
        else if(arr[j] + arr[j] < target){
            i++
        }
        else {
            j--
        }
    }
    return null
}


let x =[2,6,5,8,11,1]  
let y =[2,5,6,8,11]
console.log(sol1(x,19));
console.log(soll2(x,19));
console.log(sol3(y,13)); // works only for sorted array