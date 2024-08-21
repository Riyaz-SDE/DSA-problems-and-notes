 let trap = [0,1,0,2,1,0,1,3,2,1,2,1]
 
//  BETTER ========================================
// creating preFix max array
let total = 0
let preMax = Array(trap.length)
let pMax = Number.MIN_SAFE_INTEGER
// FORWARD LOOP
trap.forEach((e,i) => {
    if(e > pMax){
        pMax = e
    }
    preMax[i] = pMax
})

// creating sufFix max array
let sufMax = Array(trap.length)
let sMax = Number.MIN_SAFE_INTEGER

// BACKWARD LOOP
for(let i = trap.length-1; i>=0; i--){
    if(trap[i]>sMax){
        sMax = trap[i]
    }
    sufMax[i] = sMax
}

// FINDING TOTAL
 for (let i = 0; i < trap.length; i++) {
     let rightmax = sufMax[i];
     let leftMax = preMax[i]
 if(trap[i] < leftMax && trap[i] < rightmax ){
     total += Math.min(leftMax,rightmax) - trap[i]
    }
}
console.log(total);
// time complexity O(3n) , space complexity 2n.
//  BETTER ========================================

// OPTIMAL ========================================
better(trap)
// time complexity O(n) , space complexity 5.
// better
function better(tr){
    let leftMax = 0
    let rightmax = 0
    let total = 0
    let r = tr.length-1
    let l = 0
    while(l < r){
        if(tr[l] <= tr[r]){
            if(leftMax > tr[l]){
                total += leftMax - tr[l]
            }else{
                leftMax = tr[l]
            }
            l++
        }else{
            if(rightmax > tr[r]){
                total += rightmax - tr[r]
            }else{
                rightmax = tr[r]
            }
            r--
        }
    }
    console.log(total);
}
// OPTIMAL ========================================