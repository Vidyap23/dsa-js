/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosest = (a, target) => {
    let n = a.length, minD = Number.MAX_SAFE_INTEGER, res = target;
    a.sort((x, y) => x - y);
    for (let i = 0; i < n - 2; i++) {
        let left = i + 1, right = n - 1;
        while (left < right) {
            let sum = a[i] + a[left] + a[right];
            if (sum == target) return target;
            let diff = Math.abs(sum - target);
            if (diff < minD) {
                minD = diff;
                res = sum;
            }
            sum > target ? right-- : left++;
        }
    }
    return res;
};