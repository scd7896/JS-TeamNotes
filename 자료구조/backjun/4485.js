var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().split("\n");
let cnt = 0;
while (true) {
	let first = parseInt(input.shift(), 10);
	if (first === 0) break;
	cnt++;
	const arr = new Array(first);
	const INF = Number.MAX_SAFE_INTEGER;
	for (let i = 0; i < first; i++) {
		arr[i] = input[0].split(" ").map((str) => parseInt(str, 10));
		input.shift();
	}
	class Heap {
		constructor(compare) {
			this.heap = [null];
			function defaultCompare(a, b) {
				return a < b;
			}
			this.length = 0;
			this.compare = compare || defaultCompare;
		}

		insertHeap(item) {
			let index = this.heap.length;

			while (index !== 1 && this.compare(item, this.heap[parseInt(index / 2, 10)])) {
				this.heap[index] = this.heap[parseInt(index / 2, 10)];
				index = parseInt(index / 2, 10);
			}
			this.heap[index] = item;
			this.length++;
		}

		deleteHeap() {
			const item = this.heap[1];
			let length = this.length--;
			let tmp = this.heap[length];
			let parent = 1;
			let child = 2;
			if (this.length === -1) {
				return null;
			}

			while (child <= this.length) {
				if (child < this.length && !this.compare(this.heap[child], this.heap[child + 1])) child++;
				if (this.compare(tmp, this.heap[child])) break;
				this.heap[parent] = this.heap[child];
				parent = child;
				child *= 2;
			}
			this.heap[parent] = tmp;
			this.heap.pop();
			return item;
		}

		getLength() {
			return this.heap.length - 1;
		}
	}

	const graph = {};
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr[i].length; j++) {
			const key = i * first + j + 1;
			graph[key] = [];
			if (j + 1 < arr[i].length) graph[key].push([key + 1, arr[i][j + 1]]);
			if (j - 1 >= 0) graph[key].push([key - 1, arr[i][j - 1]]);
			if (i + 1 < arr.length) graph[key].push([key + first, arr[i + 1][j]]);
			if (i - 1 >= 0) graph[key].push([key - first, arr[i - 1][j]]);
		}
	}
	const distance = new Array(first * first + 1).fill(INF);

	const dijkstra = (start) => {
		const q = new Heap((a, b) => {
			return a[1] < b[1];
		});
		q.insertHeap([start, arr[0][0]]);
		distance[start] = arr[0][0];
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

	console.log(`Problem ${cnt}:`, distance[first * first]);
}
