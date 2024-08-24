
/**
 * @param {number[]} arr
 * @returns {number[]}
 * @example 
 * input : [2,6,3,9,4,2,4]
 * output : [6,9,9,-1,-1,4,-1]
 */

function nge1(arr){
    let ngeArray = new Array(arr.length).fill(-1)
    let monoSt = []
    for (let i = arr.length-1 ; i >= 0; i--) {
        
        while(monoSt.length && monoSt[monoSt.length-1]<=arr[i]){
            monoSt.pop()
        }
        if(monoSt.length){
            ngeArray[i] = monoSt[monoSt.length-1]
        }
            monoSt.push(arr[i])
    }
    return ngeArray
}
let input = [2,6,3,9,4,2,4]
console.log(nge1(input));
