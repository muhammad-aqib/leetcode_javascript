var fizzBuzz = function(n) {
    
    let finalArray = []
    
    for(let i = 1;i<=n;i++){
        if(i%3 ==0 && i%5 == 0){
            finalArray.push("FizzBuzz")
            continue;
        }
        if(i%3 == 0){
            finalArray.push('Fizz')
        }
        if(i%5 == 0){
            finalArray.push('Buzz')
        }
        if(i%3 != 0 && i%5 != 0){
            finalArray.push(String(i))
        }
        
    }
    
};