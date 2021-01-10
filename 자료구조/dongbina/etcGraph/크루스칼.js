const { UnionFind } = require("./UnionFind");
const kruskal = (arr, max) => {
	arr.sort((a, b) => a[2] - b[2]);
	let result = 0;
	let total = 0;
	const uf = new UnionFind(max + 1);

	for (let i = 0; i < arr.length; i++) {
		total += arr[i][2];
		if (uf.isConnect(arr[i][0], arr[i][1])) {
			console.log(arr[i][0], arr[i][1], arr[i][2]);
		} else {
			uf.union(arr[i][0], arr[i][1]);
			result += arr[i][2];
		}
	}
	console.log(total, result);
	return result;
};

kruskal(
	[
		[1, 2, 29],
		[2, 3, 35],
		[3, 4, 7],
		[4, 7, 13],
		[4, 6, 23],
		[6, 7, 25],
		[2, 6, 34],
		[1, 5, 75],
		[5, 6, 53],
	],
	7
);
