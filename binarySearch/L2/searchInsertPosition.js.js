
const insert = (arr,num) =>{
    let low = 0
    let high = arr.length-1
    let ans = arr.length
    while(low <= high){
        let mid = Math.floor((low+high)/2)
        
         if(arr[mid] >= num){
            ans = mid
            high = mid - 1
         }else{
            low = mid + 1
         }
    }
    return ans
}

console.log(insert([1,2,3,5,6],5));
