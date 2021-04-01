


var singleNumber = function(nums) {

    let numSet = new Set();

    for(let num of nums){   //Set has unique elements, if element already exist then we remove it. Eventually we are left with only one element.
        if(numSet.has(num)){
            numSet.delete(num)
        }else{
            numSet.add(num)
        }
    }
    return Array.from(numSet)[0]
};
console.log(singleNumber([4,1,2,1,2]));