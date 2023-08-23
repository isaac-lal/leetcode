# Two Sum | Isaac Lal

### Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

### You may assume that each input would have exactly one solution, and you may not use the same element twice.

### You can return the answer in any order.

<br>

#### Example 1:
    Input: nums = [2,7,11,15], target = 9
    Output: [0,1]
    Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
  
#### Example 2:
    Input: nums = [3,2,4], target = 6
    Output: [1,2]
    
#### Example 3:
    Input: nums = [3,3], target = 6
    Output: [0,1]
 
#### Constraints:
<ul>
<li>- 2 <= nums.length <= 104</li>
<li>- 10^9 <= nums[i] <= 109</li>
<li>- 10^9 <= target <= 109</li>
</ul>
 
#### Only one valid answer exists.

<br>

#### Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

----------------------------------------------------------

#### Brute Force: 
Compares one index after another, which can affect time-complexity but cost the least amount of memory. 

```
It works by comparing the [0] to [1],[2],[3], etc. 

Then comparing [1] to [2],[3] etc.

After comparing all values, it returns [1], [3]
```

##### Time Complexity: O(N^2), Memory Space: O(1)

<br>

#### Hashmap: 
Doesn't compare values, but is looking for if the required number exists by adding the values and indexes to the map and checking which add up to the target.

```
For example, in an array of 4, 7, 10, 15, it is looking for a target of 22. The hashmap will check each index to see if the value exists. 

[0], 22 - 4 = 18, which does NOT exist in the array, but we report the value in our map.

[1], 22 - 7 = 15, which DOES exist since [3] has that number. But the hashmap doesn't know that yet since it didn't check that value so we add the value to our hashmap.

[2], 22 - 10 = 12, which does NOT exist in the array, but report it in hashmap

[3], 22 - 15 = 7, which DOES exist at [1]. 
```

#### Since [1] and [3] exists and adds up to the target, we return both of those indices.

##### Time Complexity: O(N), Memory Space: O(N)

