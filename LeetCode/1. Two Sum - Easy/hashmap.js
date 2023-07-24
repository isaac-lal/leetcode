/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 
var twoSum = (nums, target) => {
  let hashMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    let num = target - nums[i];

    if(hashMap.has(num)) return [i, hashMap.get(num)];

    hashMap.set(nums[i], i);
  }

  return [];
};

/*
Time Complexity: O(N)
Space Complexity: O(N)

Runtime: 58 ms, beats 92.10%
Memory: 43 MB, beats 37.22%
*/
