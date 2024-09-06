function findMax(arr){
    let max = 0
    for (let i = 0; i < arr.length; i++) {
        max= Math.max(arr[i],max);
    }
    return max
}
export default findMax