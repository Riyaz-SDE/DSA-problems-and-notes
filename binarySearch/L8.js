// [1,2,2,3,3,4,4] at start case 1 done
// [1,1,2,2,3,3,4] at end   case 2 done
// [1,1,2,3,3,4,4] at left type 1 case3 (odd,even) left
// [1,1,2,2,3,4,4] at right type 1 case 4 (even,odd) right
// [1,1,2,3,3,4,4] at left type 2 case 5
// [1,1,3,3,4,5,5] at left type 2 case 6
/**
 * Q-You are given a sorted array consisting of only 
 * integers where every element appears exactly twice, 
 * except for one element which appears exactly once.
 * Return the single element that appears only once.
 * Your solution must run in O(log n) time and O(1) space.
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let n = nums.length-1
    if(n === 0) return nums[n]
    if(nums[0] !== nums[1]) return nums[0]
    if(nums[n] !== nums[n-1]) return nums[n]

    let low = 1
    let high = n-1
    while(low <= high){
        let mid = Math.floor((low+high)/2)
        if(nums[mid-1]!==nums[mid] && nums[mid]!==nums[mid+1]){
            return nums[mid]
        }else if((mid%2 === 0 && nums[mid] ===nums[mid+1]) || 
        (mid%2 === 1 && nums[mid] === nums[mid-1])){
            low = mid + 1
        }else{
            high = mid - 1
        }
    }
    return -1
};