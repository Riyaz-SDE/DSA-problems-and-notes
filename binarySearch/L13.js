// given  bloomday and integer M and K
// to make M bouquets - M
// use K adjacent flower - K
// Ith flower bloom in bloomDay[i]

// example - 1
var input = [1,10,3,10,2] 
var m = 3
var k = 1 
// example - 2
var input = [1,10,3,10,2] 
var m = 3
var k = 2
// example - 3
var input = [1,10,3,10,2] 
var m = 3
var k = 2
// Find lowest number days to fill else -1
function maxElement(arr){
    let max = 0
    for(let i = 0; i<arr.length; i++){
        max = Math.max(arr[i],max)
    }
    return max
}
function util(arr,k,val,m){
    // val number refers to days 
    let numOfBouquets = 0
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if(val >= arr[i]){
            count++
        }else{
            numOfBouquets =+ count % k
        }
    }
    
    console.log(count);
    numOfBouquets = Math.ceil(count / k)
    console.log(numOfBouquets,m);
    return numOfBouquets >= m
}

util([7,7,7,9,9,10,10,10],3,7,1)
function sol(arr,m,k){
    if(arr.length < k*m) return -1
    let max = maxElement(arr)
    let low = 1
    let high = max
    while (low <= high) {
        let mid = Math.floor((low+high)/2)
        console.log(mid,low);
        if(util(arr,k,mid,m)){
            high = mid - 1
            
        }else{
            low = mid + 1
        }
    }
    return low
}

console.log(sol([7,7,7,8,9,9],3,1));
