
/**
 * @param {number[]} arr
 * @returns {number[]}
 * @example 
 * input : [2,6,3,9,4,2,4]
 * output : [6,9,9,-1,6,4,6]
 */

function nge2(arr) {
    let mod = arr.length
    let monoSt = []
    let ans = new Array(arr.length).fill(-1)

    for(let i = arr.length*2 - 1; i>=0; i--){
        while(monoSt.length && monoSt[monoSt.length-1] <= arr[i%mod]){
            monoSt.pop()
        }
        if(monoSt.length && i <arr.length){
            ans[i%mod] = monoSt[monoSt.length-1]
        }
        monoSt.push(arr[i%mod])
    }
    console.log(ans);
    return ans
}
let  input = [2,6,3,9,4,2,4]
nge2(input)
