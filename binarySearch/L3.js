/**
 * find first and last occurence of index
 * input [1,2,3,3,3,4,5]
 * first occurence : 3 , index : 2
 * last occurence : 3 , index : 4
 * @param {Number[]} nums 
 * @param {Number} target 
 */

function findOccurence(nums,target){
    let low = 0
    let high = nums.length - 1
    let first = -1
    let last = -1
    while(low <= high){
        let mid = Math.floor((low+high)/2)
        console.log(mid);
        
        if(nums[mid] === target){
            first = mid
            console.log(mid);
            
            high = mid - 1
        }else if(nums[mid] < target){
            low = mid + 1
        }else{
            high = mid - 1
        }
    }
    if(first == -1) return [-1,-1,0]
    low = 0
    high = nums.length - 1
    while(low <= high){
         mid = Math.floor((low+high)/2)
        if(nums[mid] === target){
            last = mid
            low = mid + 1
        }else if(nums[mid] < target){
            low = mid+1
        }else{
            high = mid - 1
        }
    }
    // for findind length of repeating numbers
    return [first,last,last-first+1]
}

console.log(findOccurence([2,8,8,8,8,8,11,13],11));
