/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    final=[]
    if(x < 0)
      return false;
    if(x < 10)
        return true;
    let xString = x.toString();
    for(let character of xString){
        final.unshift(character)
    }
    finalNumber = final.join("")
    if(xString == finalNumber){
        return true;
    }
    return false;
};

console.log(isPalindrome(121))