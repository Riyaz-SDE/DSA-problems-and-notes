/**
 * 907. Sum of Subarray Minimums
 * @see {@link https://leetcode.com/problems/sum-of-subarray-minimums/description/}
 * Input: arr = [3,1,2,4]
 * Output: 17
 * Explanation: 
 * Subarrays are [3], [1], [2], [4], [3,1], [1,2], [2,4], [3,1,2], [1,2,4], [3,1,2,4]. 
 * Minimums are 3, 1, 2, 4, 1, 1, 2, 1, 1, 1.
 * Sum is 17.
 * @param {number} arr
 * @returns {number}
 */

function brute(arr){
    let answer = 0;
    for(let i = 0 ; i<arr.length; i++){
        let smallerValue = arr[i]
        for(let j = i; j<arr.length; j++){
            smallerValue = Math.min(arr[j],smallerValue)
            answer += smallerValue
        }
    }
    return answer
}
let input = [3,1,2,4]
console.log(brute(input));

/**
 * 
 * @param {number[]} arr 
 * @returns {number}
 * one of the 
 */
function better(arr){
    let nextSmallerElement = Array(arr.length).fill(arr.length)
    let previuosSmallerElement = Array(arr.length).fill(-1)
    let stack = []

    arr.forEach((e,i) => {
        while(stack.length && arr[stack[stack.length-1]] > e){
            stack.pop()
        }
        if(stack.length){
            previuosSmallerElement[i] = stack[stack.length-1]
        }
        stack.push(i)
    })
    

    stack = []
    for(let i = arr.length-1; i>=0; i--){
        while(stack.length-1 && arr[stack[stack.length-1]] >= arr[i]){
            stack.pop()
        }
        if(stack.length){
            nextSmallerElement[i] =  stack[stack.length-1]
        }
        stack.push(i)
    }
    
    let sum = 0
    for(let i = 0; i<arr.length; i++){
        let left = i - previuosSmallerElement[i]
        let right = nextSmallerElement[i] - i
        sum += ((left) * (right) * arr[i]+1) % (1e9 + 7)
    }
    console.log(sum);
    return sum
}
console.log(better(input));
console.log(better([1,1]));