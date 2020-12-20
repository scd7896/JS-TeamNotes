class Heap {
	constructor(compare) {
		this.heap = [null];
		function defaultCompare(a, b) {
			return a < b;
		}
		this.length = 0;
		this.compare = compare || defaultCompare;
	}

	insert_heap(item) {
		let index = this.heap.length;

		while (index !== 1 && this.compare(item, this.heap[parseInt(index / 2, 10)])) {
			this.heap[index] = this.heap[parseInt(index / 2, 10)];
			index = parseInt(index / 2, 10);
		}
		this.heap[index] = item;
		this.length++;
	}

	delete_heap() {
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
// testHeap.insert_heap(3); //
// testHeap.insert_heap(4); //
// testHeap.insert_heap(1); //
// testHeap.insert_heap(5); //
// testHeap.insert_heap(2); //
// testHeap.insert_heap(10); //
// testHeap.insert_heap(4); //
// testHeap.insert_heap(9); //
// testHeap.insert_heap(4); //
// testHeap.insert_heap(8); //
// testHeap.insert_heap(7); //
// testHeap.insert_heap(6); //
// testHeap.insert_heap(0); //

// console.log(testHeap.heap);
// console.log(testHeap.delete_heap()); // 0
// console.log(testHeap.delete_heap()); // 1
// console.log(testHeap.delete_heap()); // 2
// console.log(testHeap.delete_heap()); // 3
// console.log(testHeap.delete_heap()); // 4
// console.log(testHeap.delete_heap()); // 4
// console.log(testHeap.delete_heap()); // 4
// console.log(testHeap.delete_heap()); // 5
// console.log(testHeap.delete_heap()); // 6
// console.log(testHeap.delete_heap()); // 7
// console.log(testHeap.delete_heap()); // 8
// console.log(testHeap.delete_heap()); // 9
// console.log(testHeap.delete_heap()); // 10
// console.log(testHeap.heap);

module.exports = {
	Heap,
};
