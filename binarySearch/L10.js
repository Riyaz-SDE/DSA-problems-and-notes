/**
 * find sqrt of num with TC lognNbase2
 * 
 */

// brute
function sq(num){
    let ans = -1
    for(let i = 0; i<num; i++){
        if(i*i <= num){
            ans = i
        }else if(i*i > num){
            break
        }
    }
    return ans
}
console.log(sq(4));

//optimal 
function sqrt(num) {
    let ans = -1
    let low = 1
    let high = num
    while(low <= high){
        let mid = Math.floor((low+high)/2)
        if(mid*mid<=num){
            low = mid + 1
        }else{
            high = mid - 1
        }
    }
    return low

}
