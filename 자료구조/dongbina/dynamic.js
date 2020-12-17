const { getMax } = require("../getMaxMin");

function fiboMemoZation(x) {
	const memo = {};
	function findFibo(target) {
		if (target === 1 || target === 2) {
			return 1;
		}
		if (memo[target]) return memo[target];
		memo[target] = findFibo(target - 1) + findFibo(target - 2);
		return memo[target];
	}

	return findFibo(x);
}

console.log("피보나치(메모): ", fiboMemoZation(10));

function antWarrior(x) {
	const length = x.length;
	const memo = new Array(length).fill(null);

	function solution(target) {
		if (target === 0 || target === 1) {
			return x[0] > x[1] ? x[0] : x[1];
		}
		if (memo[target]) return memo[target];
		const first = solution(target - 1);
		const second = solution(target - 2) + x[target];
		memo[target] = first > second ? first : second;
		return memo[target];
	}
	const result = solution(length - 1);
	return result;
}

console.log("인접배열 띄고 합산 최대: ", antWarrior([1, 3, 1, 5]));

function toOne(number) {
	const memo = new Array(number + 1).fill(0);
	for (let i = 2; i <= number; i++) {
		let tmp;
		memo[i] = memo[i - 1] + 1;
		if (i % 2 === 0) {
			tmp = memo[i / 2] + 1;
			memo[i] = tmp < memo[i] ? tmp : memo[i];
		}
		if (i % 3 === 0) {
			tmp = memo[i / 3] + 1;
			memo[i] = tmp < memo[i] ? tmp : memo[i];
		}
		if (i % 5 === 0) {
			tmp = memo[i / 5] + 1;
			memo[i] = tmp < memo[i] ? tmp : memo[i];
		}
	}
	return memo[number];
}

console.log("1로 만드는 방법", toOne(27));

function makeMoney(money = [], target) {
	const MAX = 10001;
	const memo = new Array(target).fill(MAX);
	memo[0] = 0;
	for (let i = 0; i < money.length; i++) {
		for (let j = money[i]; j < target + 1; j++) {
			if (memo[j - money[i]] !== MAX) {
				memo[j] = memo[j] < memo[j - money[i]] + 1 ? memo[j] : memo[j - money[i]] + 1;
			}
		}
	}

	return memo[target];
}

console.log("돈 만들기 문제: ", makeMoney([2, 3], 16));

function findMaxGold(arr) {
	const memo = arr.map((e) => e.map((a) => a));

	function getPrevColumnMax(column) {
		let max = 0;
		if (column === 0) {
			for (let i = 0; i < memo.length; i++) {
				max = getMax(max, memo[i][column]);
			}
		} else {
			for (let i = 0; i < memo.length; i++) {
				max = getMax(max, memo[i][column - 1]);
			}
		}
		return max;
	}

	for (let column = 1; column < memo[0].length; column++) {
		const prevMaxColmn = getPrevColumnMax(column);
		for (let i = 0; i < memo.length; i++) {
			memo[i][column] += prevMaxColmn;
		}
	}
	return getPrevColumnMax(memo[0].length);
}

console.log(
	"2차원 배열 누적",
	findMaxGold([
		[1, 3, 3, 2],
		[2, 1, 4, 1],
		[0, 6, 4, 7],
	])
);

/**
 * 작은 숫자부터 차례대로 올라가는 알고리즘
 * 큰 순차순으로 할 거면 reverse로 한번 뒤집는다
 * @param {Array<number>} arr
 */
const LIS = (arr = []) => {
	arr.reverse();
	const memo = new Array(arr.length).fill(1);
	for (let i = 1; i < arr.length; i++) {
		for (let j = 0; j < i; j++) {
			if (arr[j] < arr[i]) {
				memo[i] = getMax(memo[i], memo[j] + 1);
			}
		}
	}
	return arr.length - getMax(...memo);
};

console.log(LIS([15, 11, 4, 8, 5, 2, 4]));
