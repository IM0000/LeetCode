/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    newInterval.sort((a,b) => a[0] - b[0]);
    if(intervals.length === 0) return [newInterval];

    const answer = [];

    let [ns, ne] = newInterval;
    let tempS, tempE;
    let isUsed = false;
    for(let j=0; j<intervals.length; j++) {
        let [s, e] = intervals[j];

        if(ne < s) {
            if(!isUsed) {
                answer.push([ns, ne]);
                isUsed = true;
            }
            answer.push([s, e]);
            continue;
        }

        if(ns > e) {
            answer.push([s, e]);
            continue;
        }

        if(ns <= e || ne >= s - 1) {
            ns = Math.min(ns, s);
            ne = Math.max(ne, e);
            if(!isUsed && j === intervals.length - 1) {
                answer.push([ns, ne]);
                isUsed = true;
            }
            continue;
        }

        answer.push([s, e]);
    }

    if(!isUsed) {
        answer.push([ns, ne])
    }

    return answer;
};