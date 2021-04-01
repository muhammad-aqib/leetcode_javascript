
/*Approach 
1 - Create two pointers in the beginning point to the first two index of array.
2 - If element at pointer1 and pointer2 are different then place element at pointer2 on next position of pointer1. Then increment both pointers.
3 - Note: We are incrementing pointer1 manually while pointer2 is incremented with for loop.
4 - return pointer1 + 1 so thats the length of the unique elements in array.
*/
        

var removeDuplicates = function(nums) {
    
    if(nums.length === 0){
        return 0;
    }

    let pointer1 = 0;

    for(let pointer2= 1; pointer2<nums.length; pointer2++){
        if (nums[pointer1] != nums[pointer2]){
            pointer1++;
            nums[pointer1] = nums[pointer2]
        }
    }
    return pointer1 + 1;
};



console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));