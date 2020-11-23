const MAX_NODE = 5;
const insertData = [
	[1, 2, 2],
	[1, 3, 3],
	[1, 4, 1],
	[1, 5, 10],
	[2, 4, 2],
	[3, 4, 1],
	[3, 5, 1],
	[4, 5, 3],
];
const MAX_NUMBER = 100000;
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
		// nodeArray[second - 1][first - 1] = node[2]; // 양방향인 경우
	});
	return nodeArray;
};

const choosing = (distance, maxNode, visitied) => {
	let minPos = -1;
	let min = MAX_NUMBER;
	for (let i = 0; i < maxNode; i++) {
		// 제일 작으면서 방문하지 않는 것을 찾아야한다
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
			if (current === -1) {
				continue;
			}
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

	for (let i = 0; i < maxNode; i++) {
		shortestPath(i);
	}

	return node;
};
greedFind(MAX_NODE, insertData);
