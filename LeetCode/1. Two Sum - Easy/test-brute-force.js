const nums = [1, 3, 5, 8, 10],
  target = 15;

var twoSum = (nums, target) => {
  for (let curr = 0; curr < nums.length; curr++) {
    for (let next = curr + 1; next < nums.length; next++)
      if (nums[next] === target - nums[curr]) return [curr, next];
  }

  return [-1, -1];
};

console.log(twoSum(nums, target));
