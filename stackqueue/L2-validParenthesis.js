let input = '()[]{}'

function vP(input){
    let stack = []

    let validPar = new Map()
    validPar.set('(',')')
    validPar.set('[',']')
    validPar.set('{','}')
    
    // }
    // (){)}

    for(let i = 0; i<input.length; i++){
        // if(input[i] === '(' || input[i] === '{' || input[i] === '['){
        if(validPar.has(input[i])){
            stack.push(input[i])
        }else{
            if(stack.length === 0 || validPar.get(stack[stack.length-1]) !== input[i]){
                console.log(stack,'not valid');
                return false
            }
            stack.pop()
        }
    }
    console.log(stack,'valid');
    
}
vP(input)
vP(input+'}}')
vP('(({}))[[[()](])]')