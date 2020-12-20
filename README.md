# 설명

JS로 각각의 알고리즘 라이브러리를 만들어 필요 실전에 복사 붙여넣기만 하는 것으로 구현 시간을 줄이기 위한 프로젝트

# 자료구조

## PriorityQueue

- Heap 알고리즘을 이용한 것이다.

```javascript
const heap = new Heap((a, b) => a > b);
```

위와 같이 사전에 heap이 튀어나올 정렬 순서를 함수로 사용한다.

### example

```javascript
const heap = new Heap((a, b) => a.value < b.value); // maxHeap
heap.insertHeap({
	name: "kkk",
	value: 1,
});
heap.insertHeap({
	name: "sss",
	value: 5,
});
heap.insertHeap({
	name: "ttt",
	value: 4,
});
heap.insertHeap({
	name: "eee",
	value: 2,
});
heap.insertHeap({
	name: "qqq",
	value: 3,
});

console.log(heap.deleteHeap()); // {name: "kkk", value: 1}
console.log(heap.deleteHeap()); // {name: "eee", value: 2}
console.log(heap.deleteHeap()); // {name: "qqq", value: 3}
console.log(heap.deleteHeap()); // {name: "ttt", value: 4}
console.log(heap.deleteHeap()); // {name: "sss", value: 5}
```
