// lower bound means 
//  element which >= target on most lowest index

function lb(arr,target) {
    let low = 0
    let high = arr.length-1
    let ans = arr.length
    while(low<=high){
        let mid = (low+high)/2
        if(arr[mid] >= target){
            ans = mid
            low = mid-1
        }else{
            mid = mid + 1 
        }
    }
    return ans
}
function upb(arr,target) {
    let low = 0
    let high = arr.length-1
    let ans = arr.length
    while(low<=high){
        let mid = (low+high)/2
        if(arr[mid] > target){
            ans = mid
            low = mid-1
        }else{
            mid = mid + 1 
        }
    }
    return ans
}
console.log();