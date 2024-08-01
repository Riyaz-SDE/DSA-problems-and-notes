let num = [3,4,5,2,9,3,2,1]

function nextPermutation(num){
    let index = -1
    let len = num.length - 1
    for(let i = len - 1; i>=0; i--){
        if(num[i]<num[i+1]){
            index = i;
            console.log(index,i,num[i],num[i+1]);
            break
        }
    } // find the break point 
    if(index==-1){
        return num.reverse()
    } 
    for(let i=len; i>index; i--){
        if(num[index]<num[i]){
            let temp = num[index]
            num[index] = num[i]
            num[i] = temp
            break
        }
    } // swap variable between bp to closest greater number
    num = num.slice(0,index+1).concat(num.slice(index+1,len+1).reverse())
    //then reverse the subarray after bp to end of an array
    return num;
}

console.log(nextPermutation(num));