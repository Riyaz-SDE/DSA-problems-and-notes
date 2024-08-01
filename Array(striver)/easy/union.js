// union [1,1,2,3,4]U[2,3,4,4,5,6]=[1,2,3,4,5,6]
//brute force approach
//using set data structure
// x[] => insert_into-->SET:x and
// y[] => insert_into--> SET:x

function union(arr1,arr2){
    let setArrray = new Set()
    for(i= 0; i<arr1.length; i++){
        setArrray.add(arr1[i])
    }
    for(j= 0; j<arr2.length; j++){
        setArrray.add(arr2[i])
    }
    return setArrray
}
let x = [1,3,4]
let y = [2,3,4,5]
// console.log(union([1,3,4],[2,3,4,5]));
// =================
// optimal approach using 2-pointer
// keep i,j pointer first elements of arrays
// first compare smallest(ar1[i],ar2[j])
// if i smallest i++ vice versa

function union2(arr1,arr2){
    let n1 = arr1.length
    let n2 = arr2.length
    let i = 0
    let j = 0
    let unionArray = []
    while(i<n1 && j<n2){
        if(arr1[i] <= arr2[j]){
            if(unionArray.length === 0 ||
            unionArray[unionArray.length-1] !==arr1[i]){
                unionArray.push(arr1[i])
            }
            i++
        } 
        else {
            if(unionArray.length === 0 ||
            unionArray[unionArray.length-1] !==arr2[j]){
                unionArray.push(arr2[j])
            }
            j++
        }
    }
    while(i<n1){
        if(unionArray.length === 0 ||
            unionArray[unionArray.length-1] !==arr1[i]){
                unionArray.push(arr1[i])
            }
            i++
        }
        while(j<n2){
            if(unionArray.length === 0 ||
                unionArray[unionArray.length-1] !== arr2[j]){
                    unionArray.push(arr2[j])
                }
            /    j++
    }
    return unionArray
}

console.log(union2(x,y));