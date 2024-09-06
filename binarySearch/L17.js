// aggressive cows

// givenn cordinates

let input = [0,3,4,7,10,9]
let cows = 4

// find maxium in minimum distance
function condition(arr,cows,distance){
    let count = 1
    let lastCow = arr[0]

    for(let i = 0; i<arr.length; i++){
        if(arr[i] - lastCow >= distance){
            count++
            lastCow = arr[i]
        }else{

        }
    }
    console.log(count >= cows,count,cows,distance,'hi');
    return count
    // if(count >= cows) return true

    // return false
}
function sol(arr,cows){
    arr.sort((a,b) => a-b)
    let low = 1
    let high = (arr[arr.length-1] - arr[0])
    console.log(high);
    
    while(low <= high){
        let mid = Math.floor((low+high)/2)
        if(condition(arr,cows,mid) >= cows){
            low = mid + 1
        }else{
            high = mid - 1
        }
    }
    return low
}

console.log(sol(input,cows));

