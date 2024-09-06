let x = [2,3,4,7,11] , missing = 3
// missing = [1,5,6,8,9,10] // answer 6

//brute force
function brute(arr,k){
    for(let i = 0; i<arr.length; i++){
        if(arr[i] <= k){
            k++
        }else{
            break
        }
    }
    return k
}
console.log(brute([2,3,5,7,9,11],3))
console.log(([2,3,5,7,9,11],3))

function bs(arr,k){
    let low = arr[0]
    let high = arr[arr.length-1]
    while(low <= high){
        let mid = Math.floor((low+high)/2)

        if(arr[mid] > k){
            high = mid - 1
        }else{
            low = mid + 1
        }
    }
    console.log(arr[low],k);
    
}