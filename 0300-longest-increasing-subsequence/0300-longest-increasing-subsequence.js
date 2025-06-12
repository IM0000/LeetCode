/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let lis = [nums[0]];

    for(let i=1; i<nums.length; i++) {
        let num = nums[i];
        
        if(lis[lis.length - 1] < num) {
            lis.push(num);
        } else {
            let l = 0;
            let r = lis.length - 1;
            let index = 0;

            while(l < r) {
                let m = Math.floor((r-l)/2) + l;
                if(lis[m] >= num) {
                    r = m;
                    index = m;
                } else {
                    l = m + 1;
                    index = m + 1;
                }
            }

            if(num < lis[index]) {
                lis[index] = num;
            }
        }
    }
    return lis.length;
};