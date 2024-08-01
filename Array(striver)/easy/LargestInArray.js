//recursive - sort and print laste element 
// optimal
function largest(ar){
    let largest = ar[0]
    for(i = 0; i<ar.length; i++){
        if(largest<ar[i]) largest = ar[i] 
    }
    return largest
 }

console.log(largest([9,2,5,710,10]));