const x = [
    [1,1,1,1],
    [1,1,1,1],
    [1,1,1,1],
    [0,1,1,0]
]
let col1 = 1
for (let i = 0; i < x.length; i++) {
    for (let j = 0; j < x[i].length; j++) {
        if(x[i][j] === 0){
            x[i][0] = 0
            if(j !== 0){
                x[0][j] = 0
            } else {
                col1 = 0
            }
        }
    }
}

for (let i = 0; i < x.length; i++) {
    for (let j = 0; j < x[i].length; j++) {
        if(x[i][0] === 0 || x[0][j] === 0){
            x[i][j] = 0
        }
    }
}
if(x[0][0] === 0){
    for(let j = 0; j<x[0].length; j++){
        x[0][j] = 0
    }
}
if(col1 === 0){
    for(let i = 0; i<x.length; i++){
        x[i][0] = 0
    }
}

let s = ''
x.forEach(e=>{ s=s+e+'\n'})
console.log('-------------------');
console.log(s);
console.log('-------------------');