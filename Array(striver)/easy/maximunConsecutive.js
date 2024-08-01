// [1,1,2,2,1,1,1,3,3,3]
// ----/---/-----/-----/
// maximum consecutive of once
function MaxCon(arr){
    let len = arr.length
    let max = 0;
    let counter = 0;
    for(i=0; i<len; i++){
        if(arr[i] === 1){
            counter++
            if(max<counter) {
                max = counter;
            }
        }
        else{
            counter = 0
        }
    }
    return max
}

let x =[1,2,1,1,1,1,0,1,1,1,1,1,1,1,1,1]

console.log(MaxCon(x));