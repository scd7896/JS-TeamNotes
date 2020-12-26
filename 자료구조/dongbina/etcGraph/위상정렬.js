const togoplogySort = (arr, max) => {
	const indegree = new Array(max + 1).fill(0);
	const graph = {};
	for (let i = 1; i <= max; i++) {
		graph[i] = [];
	}
	for (let i = 0; i < arr.length; i++) {
		const target = arr[i];
		graph[target[0]].push(target[1]);
		indegree[target[1]] += 1;
	}
	const result = [];
	const queue = [];
	for (let i = 1; i < arr.length; i++) {
		if (indegree[i] === 0) queue.push(i);
	}

	while (queue.length) {
		const now = queue.shift();
		result.push(now);

		for (let i = 0; i < graph[now].length; i++) {
			const nextNode = graph[now][i];
			indegree[nextNode] -= 1;
			if (indegree[nextNode] === 0) queue.push(nextNode);
		}
	}
	console.log(result);
};

togoplogySort(
	[
		[7, 8],
		[1, 2],
		[1, 5],
		[2, 3],
		[2, 6],
		[3, 4],
		[4, 7],
		[5, 6],
		[6, 4],
	],
	8
);
