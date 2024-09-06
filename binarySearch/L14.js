// integers = [1,2,3,4,5]
// threshold = 5

function findMax(arr){
    let max = 0
    let total = 0 
    for (let i = 0; i < arr.length; i++) {
        total += arr[i]
        max= Math.max(arr[i],max);
    }
    return {max : max , total : total}
}

function findDivisorSum(arr,divisor){
    let ans = 0
    for (let i = 0; i < arr.length; i++) {
        ans += Math.ceil(arr[i]/divisor)
    }
    // console.log(ans);
    
    return ans
}
function sol(arr,threshold){
    let max = findMax(arr).total
    let low = 1
    let high = max

    console.log(findMax(arr),'max',threshold);
    if(threshold > max) return -1
    if(threshold === max) return 1
    while(low <= high){
        let mid = Math.floor((low+high)/2)
        
        if(findDivisorSum(arr,mid) <= threshold){
            high = mid - 1
            
        }else{
            low = mid + 1
        }
    }
    return low
}

console.log(sol([1,2,3,4,5],8));
