const nums = [1, 3, 5, 8, 10],
  target = 15;

var twoSum = (nums, target) => {
  let hashMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    let num = target - nums[i];

    if (hashMap.has(num)) return [i, hashMap.get(num)];

    hashMap.set(nums[i], i);
  }

  return [];
};

console.log(twoSum(nums, target));
