const { Heap } = require("./PriorityQueue");

const INF = 1e9;

const inputArr = [
	[1, 2, 4],
	[2, 4, 3],
	[1, 4, 9],
	[3, 4, 2],
	[2, 5, 10],
	[4, 5, 8],
	[7, 8, 10],
	[1, 7, 6],
	[2, 8, 4],
	[3, 9, 5],
	[9, 10, 4],
	[2, 9, 4],
	[2, 6, 10],
];

const graph = {};
for (let i = 0; i < inputArr.length; i++) {
	const key = inputArr[i][0];
	const dest = inputArr[i][1];
	const cost = inputArr[i][2];
	if (graph[key]) {
		graph[key].push([dest, cost]);
	} else {
		graph[key] = [[dest, cost]];
	}

	/** 양방향인 경우 */
	if (graph[dest]) {
		graph[dest].push([key, cost]);
	} else {
		graph[dest] = [[key, cost]];
	}
}
const distance = new Array(11).fill(INF);

const dijkstra = (start) => {
	const q = new Heap((a, b) => {
		return a[1] < b[1];
	});
	q.insertHeap([start, 0]);
	distance[start] = 0;
	while (q.getLength()) {
		const [now, dist] = q.deleteHeap();
		if (distance[now] < dist) continue;
		graph[now].map((i) => {
			const cost = dist + i[1];

			if (cost < distance[i[0]]) {
				distance[i[0]] = cost;
				q.insertHeap([i[0], cost]);
			}
		});
	}
};

dijkstra(1);
console.log(distance);
