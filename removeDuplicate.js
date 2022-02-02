/*
    This code is to remove duplicate from sorted array.
*/

function removeDuplicates(nums) {
  if (nums.length == 0) {
    return 0;
  }
  let i = 0;
  let j = 1;
  while (j < nums.length) {
    if (nums[i] != nums[j]) {
      i++;
      nums[i] = nums[j];
      j++;
    } else {
      j++;
    }
  }
  return i + 1;
}

let nums = [1, 2, 3, 4];

console.log(removeDuplicates(nums));
