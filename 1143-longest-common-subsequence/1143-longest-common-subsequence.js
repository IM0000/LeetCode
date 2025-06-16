/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    let t1Len = text1.length;
    let t2Len = text2.length;
    const dp = Array.from({length: t1Len + 1}, () => Array(t2Len + 1).fill(0));

    for(let i = 0; i < t1Len; i++) {
        let t1 = text1[i]

        for(let j = 0; j < t2Len; j++) {
            let t2 = text2[j];

            dp[i+1][j+1] = Math.max(dp[i][j+1], dp[i+1][j]);
            if(t1 == t2) {
                dp[i+1][j+1] = Math.max(dp[i][j] + 1, dp[i+1][j+1]);
            }
        }
    }
    console.log(dp);
    return dp[t1Len][t2Len];
};