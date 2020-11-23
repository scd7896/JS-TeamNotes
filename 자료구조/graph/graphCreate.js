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

module.exports = {
	createTree,
	insertData,
};
// console.log(createTree(insertData));
