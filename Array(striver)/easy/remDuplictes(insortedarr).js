let x=[1,1,2,2,3,3,4,4,5]
//brute - take insert all by iteration - 
// set take's unique only then add this set element into existing array
// ===================
// optimal - two poiter approach

function rem(arr){
    let x;
    let y;
    x = 0
    for(i=0; i<arr.length-1; i++){
        y=i+1
        if(arr[x]!==arr[y]){
            x=x+1
            arr[x]=arr[y]
        }
    }
    return arr.splice(0,x+1)
}

console.log(rem(x));