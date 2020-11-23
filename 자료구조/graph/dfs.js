const insertData = [
	[0, 1],
	[0, 2],
	[0, 3],
	[1, 2],
	[2, 3],
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

const dfs = (tree, start) => {
	if (!tree[start]) {
		console.log("시작점이 잘못 되었습니다.");
		return;
	}
	const visitied = [];
	const roopDfs = (target) => {
		if (visitied.findIndex((visit) => visit === target) !== -1) return;
		visitied.push(target);
		console.log(target);
		tree[target].map((node) => {
			roopDfs(node);
		});
	};
	roopDfs(start);
};
// dfs(tree, 0);
// dfs(tree, 2);
// dfs(tree, 9);
