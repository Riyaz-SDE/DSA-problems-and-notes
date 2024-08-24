/**
 * Trapping Rain Water
 * 1 - brute
 * 2 - better @see {@link better}
 * 3 - optimal @see {@link optimal}
 * @see {@link https://leetcode.com/problems/trapping-rain-water/description/}
 */
 
 let input = [0,1,0,2,1,0,1,3,2,1,2,1]
//  3                 _
//  2          _        _   _
//  1      _     _   _    _   _
//  0    _   _     _  
/**
 * 
 * @param {number[]} arr 
 * @returns {number[]}
 */
 function nge(arr){
     let preMax = Array(arr.length).fill(-1)
     let pMax = Number.MIN_SAFE_INTEGER
     arr.forEach((e,i) => {
         if(e > pMax){
            pMax = e
        }
        preMax[i] = pMax
    })
    return preMax
}

/**
 * 
 * @param {number[]} arr 
 * @returns {number[]}
 */
function pge(arr){
    let sufMax = Array(arr.length)
    let sMax = Number.MIN_SAFE_INTEGER
    for(let i = arr.length-1; i>=0; i--){
        if(arr[i]>sMax){
            sMax = arr[i]
        }
        sufMax[i] = sMax
    }
    return sufMax
    
}

/**
 * BETTER APPROACH
 * @param {number[]} arr 
 * @returns {number[]}
 * time complexity - O(3n)
 * space complexity - 2n
 */
function better(arr){
    let total = 0
    let rightmax = nge(arr) 
    let leftMax = pge(arr)
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] < leftMax[i] && arr[i] < rightmax[i] ){
            total += Math.min(leftMax[i],rightmax[i]) - arr[i]
        }
    }
    console.log(total);
    return total

}


/**
 * OPTIMAL APPROACH
 * @param {number[]} tr 
 * @returns {number[]}
 * time complexity O(n)
 * space complexity 5.
 */

function optimal(tr){
    /**
     * @property {number} leftMax
     * @property {number} rightmax
     * @property {number} total
     * @property {number} r
     * @property {number} l
     */
    let leftMax = 0 
    let rightmax = 0
    let total = 0
    let r = tr.length-1
    let l = 0 
    while(l < r){
        /**
         * this loop chexk the valid 
         */
        if(tr[l] <= tr[r]){
            if(leftMax > tr[l]){
                total += leftMax - tr[l]
            }else{
                leftMax = tr[l]
            }
            l++
        }else{
            if(rightmax > tr[r]){
                total += rightmax - tr[r]
            }else{
                rightmax = tr[r]
            }
            r--
        }
    }
    console.log(total);
}

better(input)
optimal(input)