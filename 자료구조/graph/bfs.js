const { createTree, insertData } = require("./graphCreate");

const MAX_NODE = 6;
const tree = createTree(insertData);
const visited = new Array(MAX_NODE).fill(false);
const bfs = (tree, start, visited) => {
	if (!tree[start]) {
		console.log("시작점이 잘못 되었습니다.");
		return;
	}
	const queue = [];
	queue.push(start);
	while (queue.length !== 0) {
		const target = queue.shift();
		console.log(target);
		visited.push(target);
		tree[target].map((node) => {
			if (!visited[node]) {
				queue.push(node);
				visited[node] = true;
			}
		});
	}
};

bfs(tree, 1, visited);
