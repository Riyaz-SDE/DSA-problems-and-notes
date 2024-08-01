// find all leader in  array

let x = [10,22,8,3,0,6]
let ans = []
for(let i = 1; i<x.length; i++){
    let leader = true;
    for(let j =i+1 ; j<x.length ; j++){
        if(x[i] < x[j]){
            leader = false
            break;
        }
    }
    if(leader) ans.push(x[i])
}
console.log(ans);

//optimal
let ans2 = []
let max = Number.MIN_SAFE_INTEGER
for(k=x.length-1; k>=0; k--){
    if(max < x[k]){
        console.log(max, 'swapped' ,x[k]);
        max = x[k]
        ans2.push(x[k])
    }
}
console.log(ans2);