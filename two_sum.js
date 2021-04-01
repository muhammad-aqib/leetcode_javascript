//https://leetcode.com/problems/two-sum/

var twoSum = function(nums, target) {
    let map = new Map();    //map is a hash map. Dictionary in python (key/value) pairs
    for(let i=0; i<nums.length;i++){
        let remainder = target - nums[i];
        if(map.has(remainder)){
            return [map.get(remainder),i];  //return remainder index and current index.
        }
        map.set(nums[i],i);
    }
}

console.log(twoSum([2,7,11,15],9))