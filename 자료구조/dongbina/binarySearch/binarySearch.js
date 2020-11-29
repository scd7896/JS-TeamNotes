const binarySearch = (arr, target, start, end) => {
	if (start > end) return null;
	const mid = parseInt((start + end) / 2);

	if (arr[mid] === target) return mid;

	if (arr[mid] > target) return binarySearch(arr, target, start, mid - 1);

	return binarySearch(arr, target, mid + 1, end);
};

const arr = [4, 1, 6, 2, 5, 6, 7, 1, 9];
arr.sort();
// console.log(arr);
// console.log(binarySearch(arr, 10, 0, arr.length - 1));

/**
 * 떡자르기
 */
const example = (arr = [], n) => {
	const max = arr.reduce((acc, one) => (acc > one ? acc : one), arr[0]);
	let start = 0;
	let end = max;
	const sliceSimulate = (arr, start, mid, end) => {
		if (start > end) return null;
		const slice = mid;
		let result = 0;
		for (let i = 0; i < arr.length; i++) {
			const value = arr[i];
			result += value - slice > 0 ? value - slice : 0;
		}
		return result;
	};
	const answers = [];
	while (true) {
		let mid = parseInt((start + end) / 2);
		const result = sliceSimulate(arr, start, mid, end);
		if (result === null) break;
		if (result >= n) {
			answers.push({ mid, result });
			start = mid + 1;
		} else {
			end = mid - 1;
		}
	}
	if (answers.length === 0) return -1;
	return answers.reduce((acc, val) => (acc.mid > val.mid ? acc.mid : val.mid));
};
const arr2 = [4, 1, 6, 2, 5, 6, 7, 1, 9];
console.log(example(arr2, 90));
