
const insert = (arr,num) =>{
    let low = 0
    let high = arr.length
    let ans ;
    while(low <= high){
        if(arr[mid]){
            return mid
        }
        else if(arr[mid] >= num){
            ans = mid
            mid = mid - 1
         }else{
            mid = mid + 1
         }
    }
}