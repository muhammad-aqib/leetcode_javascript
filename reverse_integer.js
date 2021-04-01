/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let reverseArray = []
    let xString = x.toString(); //convert number to string
    for(let character of xString){
            reverseArray.unshift(character) //add element to start of array
    }
    if (reverseArray[reverseArray.length-1] == '-'){
        reverseArray.pop(); //remove last element
        reverseArray.unshift('-');
    }
    let final_number = Number(reverseArray.join(""))    // join array element
    let max = Math.pow(2,31)-1
    let min = -1 * Math.pow(2,31)

    if(final_number >= max || final_number <= min){
        return 0;
    }
    return final_number
};

console.log(reverse(12-3));