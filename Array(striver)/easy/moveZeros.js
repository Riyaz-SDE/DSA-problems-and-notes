// brute
function MoveZero(arr){
    let x = arr.length
    let temp=[]
    let a=[]
    let j = 0
    for(i=0; i<x; i++){
        if(arr[i] !== 0){
            a.push(arr[i])
        }
        else{
            j++
        }
    }
    console.log(i,j);
    for(k=0;k<j;k++){
        temp.push(0)
    }
    return [...a,...temp]
}
console.log(MoveZero([1,0,9]));

// optimal
function opt(arr){
    let len = arr.length
    let j = -1
    for(i=0; i<len; i++){
        if(arr[i] === 0){
            j = i
            break
        }
        //  else if(arr[i]!==0 && j!==-1){
        //     arr[j] = arr[i]
        //     arr[i] = 0
        //     j++
        // }
    }
    for(k=j+1; k<len; k++){
        if(arr[k]!==0){
            let temp = arr[k]
            arr[j] = temp
            arr[k] = 0
            j++
        }
    }
    return arr
}
console.log(opt([1,0,2,0,1]));