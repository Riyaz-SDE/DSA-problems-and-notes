/**
 * Find Peak element in an array
 */

function findPeakElement(arr){
    let n = arr.length
    if(arr[0]>arr[1] || n === 1) return arr[0]
    if(arr[n-1]>arr[n-2]) return arr[n-1]

    let low = 1
    let high = n-2

    while(low <= high){
        let mid = Math.floor((low+high)/2)
        if(arr[mid-1]<arr[mid] && arr[mid]>arr[mid+1]){
            return arr[mid]
        }else if(arr[mid]<arr[mid+1]){
            low = mid + 1
        }else{
            high= mid - 1
        }
    }
}

console.log(findPeakElement([1,2,3,1]))
console.log(findPeakElement([1,2,1,3,5,6,4]))
console.log(findPeakElement([1,2,3,1,2,3,1,2,3]))
console.log(findPeakElement([1,2,3,4,5,6,7,5,1] ))
console.log(findPeakElement([1,2,1,2,3,4,5,6,3]))
console.log(findPeakElement([1,2,3,4,5]))
console.log(findPeakElement([5,4,3,2,1] ))
console.log(findPeakElement([1,2,3,4,3,2,5,2,3,4,3,2,1]))