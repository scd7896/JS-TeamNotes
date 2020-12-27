const twoPoint = (arr, target) => {
	let count = 0;

	let end = 0;
	let sum = 0;
	for (let start = 0; start < arr.length; start++) {
		while (sum < target && end < arr.length) {
			sum += arr[end];
			end += 1;
		}
		if (sum === target) {
			count++;
		}
		sum -= arr[start];
	}

	console.log(count);
	return count;
};

twoPoint([1, 2, 3, 2, 5], 5);

const prefixSum = (arr, left, right) => {
	const sumMemo = new Array(arr.length + 1).fill(0);
	for (let i = 1; i < sumMemo.length; i++) {
		sumMemo[i] = sumMemo[i - 1] + arr[i - 1];
	}
	console.log(sumMemo);
	console.log(sumMemo[right] - sumMemo[left - 1]);
};

prefixSum([10, 20, 30, 40, 50], 3, 4);
