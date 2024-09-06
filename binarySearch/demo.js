// find peak element
// [8,9,100,1,2,3,4,5]

/**
 * 
 * @param {Number[]} arr 
 * @param {Number} target 
 * @returns {Number}
 */
function sol(arr,target) {
    let low = 0
    let high = arr.length - 1

    while(low <= high){

        let mid = Math.floor((low+high)/2)
        // let currVal = arr[mid]
        console.log(arr.slice(low, high+1));
        if(arr[mid] === target){
            return mid
        }else if(target <= arr[high]){
            if(arr[mid] < target && target <= arr[high]){
                low = mid + 1
            }else{
                high = mid - 1
            }
        }else{
            if(arr[low] <= target && target < arr[mid]){
                high = mid - 1
            }else{
                low = mid + 1
            }
        }
    }
    return -1
}
function sol2(arr){
    let low = 0
    let high = arr.length-1

    while(low <= high){
        let mid = Math.floor((low+high)/2)

        if(arr[mid] < arr[high]){
            low = mid + 1
        }else if(arr[low] < arr[mid]){
            high = mid - 1
        }else{
            low = mid + 1
        }
    }
    return low
}
let x = [4,2,1,2,3,4,3,2,1]
let a1 = sol(x,7)
let a2 = sol2(x,7)
console.log(a1)
console.log(a2)
// target 7
// low 5
// mid 1
// high 4