// find element has more than n/2 time : example-5/2 = 2
// [2,2,3,3,1,2,2] n=7
// answer = 4
// brute force 
function sol1(arr){
    let len = arr.length
    for(i=0; i<len; i++){
        let count = 0
        for(j=0;j<len;j++){
            if(arr[i] === arr[j]){
                count++
            }
        }
        if(count > len/2) return [count,len/2,i]
    }
}
// better 
function sol2(arr){
    let map = new Map()
    // map.set(arr.map((e,i)=>{
    //     return[e,i]
    // }))
    for(i=0; i<arr.length; i++){

        if(map.has(arr[i])){
            map.set(arr[i],map.get(arr[i])+1)
        }
        else{
            map.set(arr[i],1)
        }

    }

    map.forEach((val,key)=>{
        // console.log(val>arr.length/2);
        console.log('k1');
        if(val > arr.length/2){
            console.log(key);
            return key
        }
        console.log('k3');
        // continue
    })
    // return null
}
// optimal moore's voting algo
// ele; count = 0;
//e= [7,7,5,7,5,1]   [5,7]   [5,5,7,7]   [5,5,5,5] 
//c   1 2 1 2 1 0 e=5 1 0 e=5 1 2 1 0 e=5 1 2 3 4
// verify e is majority
function sol3(arr){
    let len = arr.length 
    let count = 0
    let element;
    for(i=0; i<len; i++){
        if(count === 0){
            count++
            element = arr[i]
        }
        else if(arr[i] === element){
            count++
        }
        else{
            count--
        }
    }
    let count2 = 0;
    for(j=0;j<len;j++){
        if(arr[j] === element) {
            count2++
        }
    }
    if(count2 > len/2){
        return element;
    }
    retrun -1
}
let x =[2,2,3,3,2,3,3,3]
console.log(sol1(x));
console.log(sol2(x));
console.log(sol3(x));