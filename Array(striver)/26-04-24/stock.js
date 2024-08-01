let market = [2,-1,3,4,1,6,9,10]

function bestTime(arr){
    let max = Number.MIN_SAFE_INTEGER
    let bought = arr[0]
    let j = 0
    let sell = 0
    for(let i = 1; i<arr.length; i++){
        let profit = arr[i] - bought
        if(max < profit){
            sell = i
        } 
        max = Math.max(profit,max)
        if(bought > arr[i]){
            j = i
        }
        bought = Math.min(bought,arr[i])
    }
    return [max,[arr[j],arr[sell],]]
}

console.log(bestTime(market));