// brute approach

function inter(a,b){
    visited = Array(b.length).fill(0)
    let answer = []
    // T() = O(a+b) S()=O(b)
    for(i=0; i<a.length; i++){
        for(j=0; j<b.length; j++){
            if(a[i] === b[j] && visited[j] === 0){
                answer.push(a[i])
                visited[j] = 1
                break
            }
            if(b[j]>a[j]) break;
        }
    }
    return `[${a}] U [${b}] = [${answer}]`
}

// optimal approach
// 2 pointer approach
function interOptimal(a,b){
    let answer = []
    let n1 = a.length
    let n2 = b.length
    let i = 0
    let j = 0
    while(i<n1 && j<n2){
        // striver code 
        // if(a[i] < a[j]){
        //     i++
        // }
        // else if(b[j] < a[j]){
        //     j++
        // }
        // else{
        //     answer.push(a[i])
        //     i++
        // }
        // my own
        if(a[i]===b[j]){
            answer.push(a[i])
            j++
        }
        i++
    }
    return `[${a}] H [${b}] = [${answer}]`
}
console.log(interOptimal([1,2,3,4,5,9,10,11],[1,2,3,9,10,11]));
console.log('                                  ');
console.log(inter([1,2,3,4,5],[1,2,3,9]));


