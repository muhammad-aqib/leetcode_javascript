/**
 * @param {number[]} nums
 * @return {number}
 */

/***LOGIC
 * Missing num = (Length_of_array + sum_of_all_indices) - (sum_of_value_of_each_index);
 * 
 * 
 * ***/



var missingNumber = function(nums) {
    

    let sumIfNoMissing = nums.length;
    let sumOfElements = 0;

    for(let i=0; i<nums.length; i++){
        sumIfNoMissing += i;
        sumOfElements += nums[i];
    }

    return sumIfNoMissing - sumOfElements;
};




console.log(missingNumber([0,1,3,4]));