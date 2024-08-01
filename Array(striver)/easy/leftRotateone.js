let x = [1,2,3,1,2,3]

function lrt(arr){
    let temp = arr[0]
    let x=0

    for(i=1; i<arr.length; i++){
        arr[i-1]=arr[i]
    }
    arr[arr.length-1]=temp
    return [arr,x]
}
// console.log(lrt(x));

// D-Rotation
// recursive way
function dRotation(arr,d){
    // d = d>arr.length?d%arr.length:d
    let temp = arr.slice(0,d)
    for(i= d; i<arr.length ;i++){
        arr[i-d] = arr[i]
    }
    for(j=arr.length-d; j<arr.length; j++){
        arr[j] = temp[j-(arr.length-d)]
    }
    return arr
}
console.log(dRotation(x,2));
// optimal way
// [1,2,4,5,6,8,9] - if D is 2 
// [2,1]+[9,8,6,5,4] = [2,1,9,8,6,5,4]:step2-rev(0,d)+rev(d,n)
// reverse the result = [4,5,6,8,9,1,2]:step3:add and rev(0,n)

function rev(arr){
    for(i=0; i<Math.floor(arr.length/2); i++){
        // arr[i] = arr[i][arr[arr.length-1-i],arr[arr.length-1-i]=arr[i]][0]
        let temp = arr[i]
        arr[i] = arr[arr.length-1-i]
        arr[arr.length-1-i] = temp
    }
    return arr
}
function D_rotate(arr,d){
    d=d%arr.length
    let x = [...rev(arr.slice(0,d)),...rev(arr.slice(d,arr.length))]
    return rev(x.slice(0,x.length))
}
console.log(D_rotate([1,2,3,1,2,3,1,2,3],11));