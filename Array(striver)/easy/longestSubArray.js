// find longest subarray with k sum (positive)
// what is sub array 
// -contigous part of array (means taking countinuos portion of array)
// k = 3 posible subarray [1,2],[3],[1,1,1] which one is longest
// answer : [1,1,1]
let x = [1,1,1,1,2,3,0,0,0,1,1,1,1,4,2,3,1,1,1,1]
// brute force - generate all the subarray
function sol1(arr,k){
    let len = arr.length
    let i=0,j=0
    let leng = 0
    for(i-0; i<len; i++){
        let s = 0 //optimized brute
        for(j=i;j<len; j++){
            s += arr[j] //optimize bruet
            // let s = 0
            // for(l=i; l<j; l++){
                //     s += a[k]
                if(s === k){
                    if(leng < j-i+1){
                        leng = j-i+1
                    }
            //     }
            }
        }
    }
    return leng
}
// better - using hashing
const sol2 = (arr,k) => {
    let len = 0
    let sum = 0
    let hashMap = new Map()
    for(i=0; i<arr.length; i++){
        sum += arr[i]
        hashMap.set(sum,i)
        if(sum === k){
            if(len<i+1){
                len = i+1
            }
        }
        let rem = sum - k;
        if(hashMap.get(rem)){
            len2 = i-hashMap.get(rem)
            if(len<len2){
                len = len2
            }
            hashMap[sum] = i
        }
    }
    return len
}
// optimal - 2p and greedu approach
function sol3(arr,k){
    let i = 0;
    let j = 0;
    let sum = arr[0]
    let len = 0
    while(j<arr.length){
        while(i <= j && sum > k){
            sum -= arr[i]
            i++
        }
        if(sum == k){
            len = Math.max(len,j-i+1);
        }
        j++
        if(j<arr.length) {
            sum += arr[j]
        }
    }
    return len
}
console.log(sol1(x,3));
console.log(sol2(x,3));
console.log(sol3(x,4));