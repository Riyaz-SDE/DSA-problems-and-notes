/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {

    function util(arr){
        let max = 0
        let sum = 0
        for(let i = 0; i<arr.length; i++){
            max = Math.max(arr[i],max)
            sum += arr[i]
        }
        return {max : max , sum : sum}
    }

    function util2(arr,max){
        let count = 1
        let sum = 0
        for(let i = 0; i<arr.length; i++){
            if(sum+arr[i] > max){
                count++
                sum = arr[i]
            }else{
                sum += arr[i]
            }   
        }
        return count 
    }

    let {max,sum} = util(weights)
    let low = max
    let high = sum
    let ans = ''
    while(low <= high){
        let mid = Math.floor((low+high)/2)
         if(util2(weights,mid) <= days){
             ans = mid
             high = mid - 1
            }else{
                low = mid + 1
            }
    }
    console.log(ans);
    
    return low
};


console.log(shipWithinDays([1,2,3,4,5,6,7,8,9,10],5));
