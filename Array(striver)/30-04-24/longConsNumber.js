const x = [102,4,100,1,101,3,2,1,103,104,105]
//brute
function lcn(arr){
    let log = 1
    for(let i=0; i<arr.length; i++){
        let count = 1
        let tempElement = arr[i]
        for(let j=0; j<arr.length; j++){
            if(arr[j] === tempElement+1){
                count++
                tempElement = arr[j]
                j = 0
            }
        }
        log = Math.max(count,log)
    } 
    return log
}
console.log(lcn(x));

//better 
// [1,1,1,2,2,3,4,12,13,14,15,16]
function bet(arr){
    arr = arr.sort()
    let curElement = Number.MIN_SAFE_INTEGER
    let count = 0
    let log = 1
    for(let i=0; i<arr.length; i++){
        if(arr[i]-1 == curElement){
            log++
        }else if(arr[i] !== curElement){
            log = 1
        }
        curElement = arr[i]

        count = Math.max(log,count)
    }
    return count
}

//optimal

function lcnInSet(arr) {
    let set = new Set(arr)
    let count = 0
    set.forEach(e => {
        console.log(e);
        if(!set.has(e-1)){
            let log = 1
            while(set.has(e+log)){
                log++
            }
            count = Math.max(log,count)
        }
    })
    return count
}

console.log(lcnInSet(x));
