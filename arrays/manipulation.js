
/**removing duplicates, condition was to use nums and not allocate extra space
otherwise set could have been used.
*/
var removeDuplicates = function(nums) {
    let i = 0;
    for(let j = 1; j < nums.length; j++){
        if(nums[i] != nums[j]){
            i++;
            nums[i]=nums[j];
        }
    }
    return i+1;
};

/**
 * Remove elements
 */
 var removeElement = function(nums, val) {
    for (let i = nums.length - 1; i >= 0; i--) {
        if (val === nums[i]) {
            nums.splice(i, 1)
        }
    }
    return nums.length
};