// koko eating bananas
function findMax(arr) {
    let ans = -1
    for(let i = 0; i<arr.length; i++){
        ans = Math.max(arr[i],ans)
    }
    return ans
}
// 
function kokoEatingTime(arr,eatBanana){
    let time = 0
    for(let i =0; i<arr.length; i++){
        time += Math.ceil(arr[i]/eatBanana)
        
    }
    return time
}
/**
 * 
 * @param {number[]} nums 
 * @param {*} h 
 * @returns 
 */
function kokoEating(nums,h){
    let max = 0 
    for(let i = 0; i<nums.length; i++){
        max = Math.max(nums[i],max)
    }
    let low = 1
    let high = max
    let ans = -1
    while(low <= high){
        let mid = Math.floor((low+high)/2)
        let time = kokoEatingTime(nums,mid)
        if(time <= h){
            ans = mid
            high = mid - 1
        }else{
            low = mid + 1
        }
    }
    return ans
}

//  1 2 3 4 

console.log(kokoEating([1,2,3,4],19))