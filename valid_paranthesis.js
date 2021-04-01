// Valid parenthesis can be implemented using stack data strucutures.

const isValid = s => {
    const brackets = {
        '(':')',
        '[':']',
        '{':'}'
    }
    let stack = []
    for(let char of s){
        if(brackets[char]){ 
            stack.push(brackets[char])  //insert closing bracket in stack.
        }else{
            if (stack.pop() !== char) return false;
        }
    }

    return !stack.length;
}

console.log(isValid("[][]"))