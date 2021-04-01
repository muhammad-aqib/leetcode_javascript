/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

 //starting both indexes anchor and explorer at 0, replace when explorer element is not 0 with element at anchor and then increment anchor.
var moveZeroes = function(nums) {

    let anchor = 0;
    
    for(let explorer = 0; explorer < nums.length; explorer++){
        if(nums[explorer] !== 0){
            //swap two numbers
            let temp = nums[explorer];
            nums[explorer] = nums[anchor];
            nums[anchor] = temp;
            
            anchor++
        }
    }
    return nums;
};