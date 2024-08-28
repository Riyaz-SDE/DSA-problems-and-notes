function rotateK(nums,k) {
    k = nums.length%k
    return [ ...nums.slice(0,k).reverse() ,...nums.slice(k).reverse()].reverse()
}

function find(nums,x){
    let low = 0
    let high = nums.length - 1
    while(low <= high){
        let mid = Math.floor((low+high)/2)
        if(nums[mid] === x){
            return mid
        }else if(nums[high] >= target){
            //left sorted portion
            if(nums[high] >= x && nums[mid]<= x){
                low = mid + 1
            }else{
                high = mid - 1
            }
        }else{
            // right sorted portion
            if(nums[mid] >= x && nums[low] <= x){
                high = mid - 1
            } else{
                low = mid + 1
            }
        }
    }
    return -1
}

console.log(rotateK([1,2,3,4,5],2));
console.log(find([3,4,5,1,2],4));
console.log(find([1,2,3,4,5,6,-2,-1,0],4));
console.log(find([1,2,3,4,5,6,7,8,9,-2,-1,0],9));


