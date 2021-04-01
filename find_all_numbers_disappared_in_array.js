/**
 * @param {number[]} nums
 * @return {number[]}
 */






console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]))

 //Brute Force Approach
var findDisappearedNumbersBruteForce = function(nums) {
    
    let max_elem = Math.max(...nums)
    let min_elem = Math.min(...nums)
    let empty_arr=[];
    let hasNum = false;

    for(let i=min_elem; i<= max_elem; i++){

        for(let j=0;j<nums.length;j++){
            if(i != nums[j]){
                hasNum= false;
            } else{
                hasNum=true;
                break;
            }
        }
        if(!hasNum){
            empty_arr.push(i)
        }
        hasNum=false;

    }
    return empty_arr;
};