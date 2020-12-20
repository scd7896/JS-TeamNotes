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

// const testHeap = new Heap((a, b) => a > b);
// testHeap.insertHeap(3); //
// testHeap.insertHeap(4); //
// testHeap.insertHeap(1); //
// testHeap.insertHeap(5); //
// testHeap.insertHeap(2); //
// testHeap.insertHeap(10); //
// testHeap.insertHeap(4); //
// testHeap.insertHeap(9); //
// testHeap.insertHeap(4); //
// testHeap.insertHeap(8); //
// testHeap.insertHeap(7); //
// testHeap.insertHeap(6); //
// testHeap.insertHeap(0); //

// console.log(testHeap.heap);
// console.log(testHeap.deleteHeap()); // 0
// console.log(testHeap.deleteHeap()); // 1
// console.log(testHeap.deleteHeap()); // 2
// console.log(testHeap.deleteHeap()); // 3
// console.log(testHeap.deleteHeap()); // 4
// console.log(testHeap.deleteHeap()); // 4
// console.log(testHeap.deleteHeap()); // 4
// console.log(testHeap.deleteHeap()); // 5
// console.log(testHeap.deleteHeap()); // 6
// console.log(testHeap.deleteHeap()); // 7
// console.log(testHeap.deleteHeap()); // 8
// console.log(testHeap.deleteHeap()); // 9
// console.log(testHeap.deleteHeap()); // 10
// console.log(testHeap.heap);

module.exports = {
	Heap,
};
