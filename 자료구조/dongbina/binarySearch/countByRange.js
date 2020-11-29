const countByRange = (arr, n) => {
	let leftIndex = arr.length - 1;
	let rightIndex = 0;

	const binarySearch = (arr, target, start, end, flag) => {
		if (start > end) return null;
		const mid = parseInt((start + end) / 2);
		if (arr[mid] === target) {
			if (flag) {
				leftIndex = leftIndex > mid ? mid : leftIndex;
				binarySearch(arr, target, start, mid - 1, true);
			} else {
				rightIndex = rightIndex < mid ? mid : rightIndex;
				binarySearch(arr, target, mid + 1, end, false);
			}
		}
		if (arr[mid] > target) return binarySearch(arr, target, start, mid - 1, flag);

		return binarySearch(arr, target, mid + 1, end, flag);
	};

	binarySearch(arr, n, 0, arr.length - 1, true);
	binarySearch(arr, n, 0, arr.length - 1, false);
	return rightIndex - leftIndex + 1;
};
const arr3 = [
	1,
	1,
	1,
	1,
	2,
	2,
	2,
	2,
	2,
	3,
	3,
	3,
	3,
	3,
	3,
	4,
	4,
	4,
	4,
	4,
	4,
	4,
	5,
	5,
	5,
	5,
	5,
	5,
	5,
	5,
	5,
	5,
	9,
	9,
	9,
	9,
	9,
	9,
];

console.log(countByRange(arr3, 9), arr3.length);
