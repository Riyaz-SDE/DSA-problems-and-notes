/**
 * For this problem we should 
 * first find sorted portion in a
 * rotated arr
 * test case : [3,3,3,1,2,3]
 */

function sra(arr,target){

    let i = 0
    let j = arr.length-1;

    while(i <= j){
        let mid = Math.floor((i+j)/2)
        console.log(mid);
        
        if(arr[mid] === target) {
            return true
        }

        if(arr[i] === arr[mid] && arr[j] === arr[mid]){
            i++
            j--
            console.log('l');
            continue
        }

        if(arr[i] <= arr[mid]){
            
            if(arr[i] <= target && target <= arr[mid]){
                j = mid - 1
            }else{
                i = mid + 1
            }
        }else{
            if(arr[mid] <= target &&  target <= arr[j] ){
                i = mid + 1
            }else{
                j = mid - 1
            }
        }
    }
    return false
}

console.log(sra([3,3,3,1,2,3],2))