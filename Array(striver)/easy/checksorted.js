let x = [1,2,3]
let y = [3,2,1]

function isSorted(ar) {
    let len = ar.length
    for(i=0; i<len - 1; i++){
        if(ar[i]>ar[i+1]){
            return 'unsorted'
        }
    }
    return 'sorted'
}
console.log(isSorted([...x,...x]));