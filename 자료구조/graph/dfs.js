const MAX_NODE = 6;
const insertData = [
	[0, 1],
	[0, 4],
	[1, 2],
	[4, 5],
	[3, 4],
	[6, 5],
];
const createTree = (inputArr = []) => {
	const tree = {};

	inputArr.map((row) => {
		const first = row[0];
		const second = row[1];

		if (tree[first]) {
			tree[first].push(second);
		} else {
			tree[first] = [second];
		}

		if (tree[second]) {
			tree[second].push(first);
		} else {
			tree[second] = [first];
		}
	});
	return tree;
};
const tree = createTree(insertData);
const visitied = new Array(MAX_NODE).fill(false);
const dfs = (tree, start, visitied) => {
	if (!tree[start]) {
		console.log("시작점이 잘못 되었습니다.");
		return;
	}
	visitied[start] = true;
	console.log(start);
	for (let i = 0; i < tree[start].length; i++) {
		const node = tree[start][i];
		/**
		 * any logic
		 */
		if (!visitied[node]) dfs(tree, node, visitied);
	}
};
dfs(tree, 0, visitied);
// dfs(tree, 2);
// dfs(tree, 9);
