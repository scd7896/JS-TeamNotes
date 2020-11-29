const quickSort = (array, start, end) => {
	if (start >= end) return;
	const pivot = start;
	let left = start + 1;
	let right = end;

	while (left <= right) {
		while (left <= end && array[left] <= array[pivot]) left++;
		while (right > start && array[right] >= array[pivot]) right--;

		if (left > right) [array[right], array[pivot]] = [array[pivot], array[right]];
		else [array[left], array[right]] = [array[right], array[left]];
	}
	quickSort(array, start, right - 1);
	quickSort(array, right + 1, end);
};

const arr = [4, 1, 5, 1, 0, 2, 4, 1, 3];
quickSort(arr, 0, arr.length - 1);
console.log(arr);

const countSort = (array) => {
	let min = array[0];
	let max = array[0];
	const answer = [];
	for (let i = 0; i < array.length; i++) {
		if (min > array[i]) min = array[i];
		if (max < array[i]) max = array[i];
	}

	const countArray = new Array(max + 1).fill(0);
	for (let i = 0; i < array.length; i++) countArray[array[i]] += 1;
	for (let i = 0; i < countArray.length; i++) {
		const count = countArray[i];
		for (let j = 1; j <= count; j++) {
			answer.push(i);
		}
	}
	return answer;
};
const arr2 = [4, 1, 5, 1, 0, 2, 4, 1, 3];
console.log(countSort(arr2));
