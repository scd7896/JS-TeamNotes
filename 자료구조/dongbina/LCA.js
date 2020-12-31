const getLCA = (arr, targetA, targetB) => {
	const graph = {};
	const parentGraph = {};
	const depthGraph = {};
	arr.map(([parent, child]) => {
		if (graph[parent]) {
			graph[parent].push(child);
		} else {
			graph[parent] = [child];
		}

		parentGraph[child] = parent;
	});

	const dfs = (node, depth) => {
		depthGraph[node] = depth;
		if (!graph[node]) return;
		graph[node].map((child) => {
			dfs(child, depth + 1);
		});
	};

	dfs(1, 0);
	const lca = (a, b) => {
		while (depthGraph[a] !== depthGraph[b]) {
			if (depthGraph[a] > depthGraph[b]) {
				a = parentGraph[a];
			} else {
				b = parentGraph[b];
			}
		}
		while (a !== b) {
			a = parentGraph[a];
			b = parentGraph[b];
		}
		return a;
	};

	console.log(lca(targetA, targetB));
};

getLCA(
	[
		[1, 3],
		[1, 5],
		[3, 12],
		[5, 8],
		[12, 14],
		[8, 4],
		[8, 15],
		[15, 7],
		[15, 10],
		[12, 2],
		[2, 9],
		[2, 11],
		[2, 13],
		[13, 6],
	],
	9,
	13
);
