/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const indegreeList = Array(numCourses).fill(0);
    const graph = Array.from({length: numCourses}, ()=>[]);
    
    for(let i=0; i<prerequisites.length; i++) {
        const [a, b] = prerequisites[i];
        graph[b].push(a);
        indegreeList[a]++;
    }

    const queue = [];
    for(let i=0; i<numCourses; i++) {
        if(indegreeList[i] === 0) {
            queue.push(i);
        }
    }

    while(queue.length) {
        let pop = queue.shift();
        numCourses--;

        for(let i=0; i<graph[pop].length; i++) {
            const next = graph[pop][i];
            indegreeList[next]--;
            if(indegreeList[next] === 0) {
                queue.push(next);
            }
        }
    }

    if(numCourses !== 0) return false;
    return true;
};