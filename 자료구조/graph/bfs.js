const { createTree, insertData } = require("./graphCreate");

const tree = createTree(insertData);
console.log("tree => ", tree);
const bfs = (tree, start) => {
	if (!tree[start]) {
		console.log("시작점이 잘못 되었습니다.");
		return;
	}
	const queue = [];
	const visited = [];
	queue.push(start);
	while (queue.length !== 0) {
		const target = queue.shift();
		visited.push(target);
		console.log(target);
		tree[target].map((node) => {
			if (visited.findIndex((visit) => node === visit) === -1) {
				queue.push(node);
				visited.push(node);
			}
		});
	}
};

bfs(tree, 1);
