

function histogram(arr){
    let stack = [-1]
    // monotonic increasing  order stock for trak PSE
    // pop if arr[i]<stack.top()
    // if arr[i]>stack.top() you find out PSE
    // to fin PSE
    // check the stack.top() > arr[i]
    // ele = stack.pop()
    //  if its is you find both 
        // PSE = stack.top() after pop
        // NSE = arr[i]
    let poped;
    let max = 0
    for(let i = 0; i<arr.length; i++){
        while(stack[stack.length-1] !==-1 && arr[stack[stack.length-1]] > arr[i]){
            poped = stack.pop()
            let nse = i
            let width = i-stack[stack.length-1]-1
        
                max = Math.max( max , width*arr[poped])
                console.log(max);
            
        }
        stack.push(i)
    }
    while (stack[stack.length - 1] !== -1) {
        const height = arr[stack.pop()];
        const width = arr.length - stack[stack.length - 1] - 1;
        max = Math.max(max, height * width);
    }
    return max
}

console.log(histogram([2,1,5,6,2,3]))