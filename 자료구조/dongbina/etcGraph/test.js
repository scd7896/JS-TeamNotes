const { UnionFind, findCycle } = require("./UnionFind");
console.log(
	findCycle(
		[
			[1, 2],
			[2, 3],
			[3, 2],
			[3, 4],
			[4, 1],
		],
		4
	)
);
const test = (edges) => {
	let edge1 = new Array(2).fill(0);
	let edge2 = new Array(2).fill(0);
	let parent = new Array(edges.length + 1);
	const uf = new UnionFind(edges.length + 1);
	for (let i = 0; i < edges.length; i++) {
		let nodeU = edges[i][0];
		let nodeV = edges[i][1];
		if (parent[nodeV] > 0) {
			edge1 = [parent[nodeV], nodeV];
			edge2 = [nodeU, nodeV];
			edges[i][0] = -1;
			edges[i][1] = -1;
		}
		parent[nodeV] = nodeU;
	}

	for (let i = 0; i < edges.length; i++) {
		let nodeU = edges[i][0];
		let nodeV = edges[i][1];
		if (nodeU < 0 || nodeV < 0) continue;
		if (uf.isConnect(nodeU, nodeV)) {
			// 사이클 발견!
			console.log(nodeU, nodeV, edge1);
			return edge1[0] == 0 ? [nodeU, nodeV] : edge1;
		}
		uf.union(nodeU, nodeV);
	}
	return edge2;
};

// console.log(
// 	test([
// 		[1, 2],
// 		[2, 3],
// 		[3, 4],
// 		[4, 1],
// 	])
// );
