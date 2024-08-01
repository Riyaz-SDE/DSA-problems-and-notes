// rec way sort array then find index len-i-1 (i=1 initially) before element and validate
// it with condition with while which is (ar[len-i-1]!=ar[len-1]) 
/* pseudo code
let i = 1;
while(ar[len - i - 1]===ar[len - 1]){
    i++
}
return ar[len - i - 1]
*/

// optimal way
function secondlargest(ar){
    let largest = ar[0]
    let secondlargest = ar[0]
    let x =0
    for(i = 0; i<ar.length; i++){
        x++
        if(largest<ar[i]) {
            largest = ar[i] 
        }
        if(secondlargest<ar[i] && ar[i]<largest){
                secondlargest = ar[i]
            }
        }
    //     for(j = 0; j<ar.length; j++){
    //     // x++
    //     if(secondlargest<ar[j] || ar[j]<largest){
    //         secondlargest = ar[j]
    //     }
    // }

    return [largest,secondlargest,{rep:x}]
 }

console.log(secondlargest([9,2,5,710,10]));