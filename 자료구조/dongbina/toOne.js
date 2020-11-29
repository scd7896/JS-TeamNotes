const toOne = (src, dev) => {
	let num = src;
	let answer = 0;
	while (num !== 1) {
		if (num % dev === 0) {
			num /= dev;
		} else {
			num--;
		}
		answer++;
	}
	return answer;
};

console.log(toOne(4, 2));

const maxNum = (str) => {
	const arr = str.split("");
	return arr.reduce((acc, arg) => {
		if (acc <= 1 || arg <= 1) {
			return acc + arg;
		} else {
			return acc * arg;
		}
	}, 0);
};
console.log(maxNum("023456"));

const getGroup = (arr) => {
	const sortArr = arr.map((a) => a).sort();
	let result = 0;
	let count = 0;

	sortArr.map((one) => {
		count += 1;
		if (count >= one) {
			result += 1;
			count = 0;
		}
	});
	return result;
};

console.log(getGroup([2, 3, 1, 2, 2]));
