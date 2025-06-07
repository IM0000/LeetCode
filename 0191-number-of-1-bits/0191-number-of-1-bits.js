/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    let cnt = 0;
    while(n !== 0) {
        let a = parseInt(n / 2);
        let b = n % 2;
        n = a;
        if(b === 1) cnt++;
    }
    return cnt;
};