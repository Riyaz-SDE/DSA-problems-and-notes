
function floor(nums,target){
    let low = 0;
    let high = nums.length-1
    let ans = -1
    while(low <= high){
        let mid = Math.floor((high +low)/2)
        console.log(mid,nums[mid]);
        
        if(target <= nums[mid]){
            ans = nums[mid]
            high = mid - 1
        }else{
            low = mid + 1
        }
    }
    return ans
}

console.log(floor([1,2,3,5,6,7],3))