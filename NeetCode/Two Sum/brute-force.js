/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = (nums, target) => {
  for (let curr = 0; curr < nums.length; curr++) {
    for (let next = curr + 1; next < nums.length; next++) 
      if (nums[next] === target - nums[curr]) return [curr, next];
  }

  return [-1, -1];
};

/*
Time Complexity: O(N^2)
Space Complexity: O(1)

Runtime: 91 ms, beats 53.61%
Memory: 41.6 MB, beats 98.79%
*/
