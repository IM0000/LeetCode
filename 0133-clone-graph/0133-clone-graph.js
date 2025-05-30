/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function(node) {
    if(!node) return null;

    const map = new Map();
    map.set(node, new _Node(node.val));

    const queue = [node];
    let qIdx = -1;
    while(++qIdx < queue.length) {
        let curr = queue[qIdx];
        let clone = map.get(curr);
        
        for(let neighbor of curr.neighbors) {
            if(!map.get(neighbor)) {
                queue.push(neighbor);
                map.set(neighbor, new _Node(neighbor.val))
            }
            clone.neighbors.push(map.get(neighbor));
        }
    }

    return map.get(node);
};