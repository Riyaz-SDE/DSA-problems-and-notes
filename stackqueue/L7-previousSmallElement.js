 
/**
 * 
 * 1 - way brute force.
 * 2 - using incresing order monotonic stack.
 * input = [1,4,5,2,6,8,2,4,5,4]
 * output = [-1,1,4,1,2,6,1,2,4,2]
 */

/**
 * 
 * @param {number[]} arr 
 * @returns {number[]}
 */
function previuosSmallerElement(arr) {
    let monoSt = [] // monotonic stack
    let ans = new Array(arr.length).fill(-1) // answer array with default values -1
    
    for(let i = 0; i<arr.length; i++){

        // delete elemet=nt from stack if top > currrent Array element
        while(monoSt.length && monoSt[monoSt.length-1]>=arr[i]){ 
            monoSt.pop()
        }
        // if stack has element update answer
        if(monoSt.length){
            ans[i] = monoSt[monoSt.length-1]
        }
        monoSt.push(arr[i])
    }
    console.log(ans); // loggin the answer
    return ans
}
let input = [1,4,5,2,6,8,2,4,5,4,]
pse(input) // return [-1,1,4,1,2,6,1,2,4,2]
