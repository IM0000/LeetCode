/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    while(b !== 0) {
        let num = a & b;
        a ^= b;
        b = num << 1;
    }
    return a;
};