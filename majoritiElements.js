/**
 * @param {number[]} nums
 * @return {number}
 */

 //Note: Map/Dictionary is used to reduce complexity and complete task in single iteration otherwise we might require two iteration for this.
var majorityElement = function(nums) {
    
    const halfLength = nums.length/2;
    let elementMap = new Map();
    
    if(nums.length === 1)
        return nums[0]

    for(let num of nums){

        if(elementMap.has(num)){    //if map already has an element.
           elementMap.set(num,elementMap.get(num)+1) 
        }
        else{
            elementMap.set(num,1)   //if elemennt is new to map.
        }
        if(elementMap.get(num) > halfLength){   //if elemennt length is greater than half.
            return num;
        }
    }
    
    return -1;  //if none is greater than half of length.
    
};
