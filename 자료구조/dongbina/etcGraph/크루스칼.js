const { findParent, unionParent } = require("./서로소");
const kruskal = (arr, max) => {
	arr.sort((a, b) => a[2] - b[2]);
	let result = 0;
	const parent = new Array(max + 1).fill(0);
	for (let i = 1; i <= max; i++) {
		parent[i] = i;
	}

	for (let i = 0; i < arr.length; i++) {
		if (findParent(parent, arr[i][0]) !== findParent(parent, arr[i][1])) {
			unionParent(parent, arr[i][0], arr[i][1]);
			result += arr[i][2];
		}
	}

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
