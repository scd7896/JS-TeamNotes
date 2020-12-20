var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().split("\n");

const first = input
	.shift()
	.split(" ")
	.map((str) => parseInt(str, 10));
const MAX_NODE = first[0];
const MAX_NUMBER = first[1] + 1;
const TARGET_COST = first[2];
const TARGET_NODE = first[3];

const insertData = input.map((row) => row.split(" ").map((numStr) => parseInt(numStr, 10)));

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
for (let i = 1; i <= MAX_NODE; i++) {
	graph[i] = [];
}
for (let i = 0; i < insertData.length; i++) {
	const key = insertData[i][0];
	const dest = insertData[i][1];
	const cost = 1;
	if (graph[key]) {
		graph[key].push([dest, cost]);
	}
}
const distance = new Array(MAX_NODE + 1).fill(MAX_NUMBER);

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

dijkstra(TARGET_NODE);
const answerArr = [];
distance.map((node, index) => {
	if (node === TARGET_COST) {
		answerArr.push(index);
	}
});
if (answerArr.length === 0) console.log(-1);
else {
	for (let i = 0; i < answerArr.length; i++) {
		console.log(answerArr[i]);
	}
}
