const solution = (row, column, arr) => {
	let answer = 0;
	const visited = new Array(row);
	const bfs = (tree, start, visited) => {
		const queue = [];
		queue.push(start);
		visited[start[0]][start[1]] = true;
		const nextDiff = [
			[-1, 0],
			[1, 0],
			[0, -1],
			[0, 1],
		];
		while (queue.length !== 0) {
			const [x, y] = queue.shift();
			for (let i = 0; i < nextDiff.length; i++) {
				const [diffX, diffY] = nextDiff[i];
				const node = [x + diffX, y + diffY];
				if (node[0] < 0 || node[0] >= row) continue;
				if (node[1] < 0 || node[1] >= column) continue;
				if (!visited[node[0]][node[1]] && tree[node[0]][node[1]] === 0) {
					queue.push(node);
					visited[node[0]][node[1]] = true;
				}
			}
		}
	};

	for (let i = 0; i < visited.length; i++) {
		visited[i] = new Array(column).fill(false);
	}
	for (let i = 0; i < row; i++) {
		for (let j = 0; j < column; j++) {
			if (!visited[i][j] && arr[i][j] === 0) {
				bfs(arr, [i, j], visited);
				answer++;
			}
		}
	}

	return answer;
};

const map = [
	[0, 0, 1, 1, 0],
	[0, 1, 0, 1, 1],
	[1, 1, 1, 1, 1],
	[0, 1, 0, 1, 0],
];

console.log(solution(4, 5, map));

const findMiro = (row, column, arr) => {
	const visited = new Array(row);
	let cost = 1;
	for (let i = 0; i < visited.length; i++) {
		visited[i] = new Array(column).fill(false);
	}
	const bfs = (tree, start, visited) => {
		const queue = [];

		queue.push(start);
		visited[start[0]][start[1]] = true;

		const nextDiff = [
			[-1, 0],
			[1, 0],
			[0, -1],
			[0, 1],
		];
		while (queue.length !== 0) {
			const [x, y] = queue.shift();
			for (let i = 0; i < nextDiff.length; i++) {
				const [diffX, diffY] = nextDiff[i];
				const node = [x + diffX, y + diffY];
				if (node[0] < 0 || node[0] >= row) continue;
				if (node[1] < 0 || node[1] >= column) continue;
				if (!visited[node[0]][node[1]] && tree[node[0]][node[1]] !== 0) {
					queue.push(node);
					visited[node[0]][node[1]] = true;
					tree[node[0]][node[1]] += tree[x][y];
				}
			}
		}
	};
	bfs(arr, [0, 0], visited);
	return arr[row - 1][column - 1];
};

const map2 = [
	[1, 0, 1, 0, 1, 0],
	[1, 1, 1, 1, 1, 1],
	[0, 0, 0, 0, 0, 1],
	[1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1],
];

console.log(findMiro(5, 6, map2));
