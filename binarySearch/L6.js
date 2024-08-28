/**
 * find minimum in rotated sorted arr
 * 
 * [4,5,6,1,2,3]
 */

function findMin(nums){
    // let low = 0
    // let high = nums.length
    // let min = Number.MAX_SAFE_INTEGER
    // while(low <= high){
    //     let mid = Math.floor((low+high)/2)
    //     if(nums[low] <= nums[mid]){
    //         min = Math.min(min,nums[low])
    //         low = mid + 1
    //     }else{
    //         min = Math.min(min,nums[mid])
    //         high = mid - 1
    //     }
    // }
    let low = 0;
   let high = nums.length - 1
   let min = 5001
   while(low <= high){
    let mid = Math.floor((low+high)/2)
    if(nums[low] === nums[mid] && nums[mid] === nums[high]){
        low++
        high--
        continue
    }
    if(nums[low] <= nums[mid]){
        min = Math.min(min,nums[low])
        low = mid + 1
    }else{
        high = mid - 1
        min = Math.min(min,nums[mid])
    }
   } 
   return min
    // return min
}
console.log(findMin([4,4,4,4,-1,1,1,4]))