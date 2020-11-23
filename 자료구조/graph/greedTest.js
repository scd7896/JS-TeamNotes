var fs = require("fs");
// var input = fs.readFileSync("/dev/stdin").toString().split("\n");

const MAX_NODE = 20000;
const MAX_NUMBER = Number.MAX_SAFE_INTEGER;
const target = input
	.pop()
	.split(" ")
	.map((val) => parseInt(val, 10));
const insertData = input.map((row) => row.split(" ").map((numStr) => parseInt(numStr, 10)));

const createTree = (maxNode, inputArr) => {
	const nodeArray = new Array(maxNode);
	for (let i = 0; i < nodeArray.length; i++) {
		nodeArray[i] = new Array(maxNode);
		nodeArray[i].fill(MAX_NUMBER);
		nodeArray[i][i] = 0;
	}
	inputArr.map((node) => {
		const first = node[0];
		const second = node[1];
		nodeArray[first - 1][second - 1] = node[2];
	});
	return nodeArray;
};

const choosing = (distance, maxNode, visitied) => {
	let minPos = 0;
	let min = MAX_NUMBER;
	for (let i = 0; i < maxNode; i++) {
		if (distance[i] < min && !visitied[i]) {
			min = distance[i];
			minPos = i;
		}
	}

	return minPos;
};
const greedFind = (maxNode, inputArr) => {
	const node = createTree(maxNode, inputArr);

	const shortestPath = (start) => {
		const visitied = new Array(maxNode).fill(false);
		const distance = node[start];
		visitied[start] = true;

		for (let i = 0; i < maxNode - 2; i++) {
			const current = choosing(distance, maxNode, visitied);

			visitied[current] = true;
			for (let w = 0; w < maxNode; w++) {
				if (!visitied[w]) {
					if (distance[current] + node[current][w] < distance[w]) {
						distance[w] = distance[current] + node[current][w];
					}
				}
			}
		}
	};
	shortestPath(target[0] - 1);

	return node;
};
const node = greedFind(MAX_NODE, insertData);
