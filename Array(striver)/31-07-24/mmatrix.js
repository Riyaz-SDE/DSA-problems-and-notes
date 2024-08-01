var x = [
    [1,1,1,1],
    [1,0,1,1],
    [1,1,1,1],
    [0,1,1,1]
]

// replace the row and column of zero th element into -1

for(i=0;i<x.length;i++){
    for(j=0; j<x[i].length; j++){
        if(x[i][j] === 0){
            for(k=0;k<x.length;k++){ // mark column as -1
                if(x[k][j]!==0){
                    x[k][j] = -1
                }
            }
            for(l=0;l<x[i].length;l++){ //mark row as -1
                if(x[i][l]!==0){
                x[i][l] = -1
                }
            }
        }
    }
}
console.log(x);

for(let i=0; i<x.length; i++){
    for(let j=0; j<x.length; j++){
        if(x[i][j] === -1){
            x[i][j] = 0
        }
    }
}
console.log(x);

//optimal 
var x = [
    [1,1,1,1],
    [1,0,1,1],
    [1,1,1,1],
    [0,1,1,1]
]

let row = Array(x[0].length).fill(0)
let column = Array(x.length).fill(0)

for(let i = 0; i<x.length; i++){
    for (let j = 0; j < x.length; j++) {
        if(x[i][j] === 0){
            row[i] = -1
            column[j] = -1
        }
    }
}
console.log('row',row,'coloumn',column);

for(let j=0; j<x.length; j++){
    for(let k = 0; k<x[j].length; k++){
        // console.log(x[j][k],`row:${row[j]} column:${column[k]}`);
        if(row[j] === -1){
            x[j][k] = 0
        }else if( column[k] === -1 ){
            x[j][k] = 0
        }
    }
}

console.log('optimal',x);