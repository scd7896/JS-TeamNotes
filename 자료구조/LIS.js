/**
 * 작은 숫자부터 차례대로 올라가는 알고리즘
 * 큰 순차순으로 할 거면 reverse로 한번 뒤집는다
 * @param {Array<number>} arr
 */
export const LIS = (arr = []) => {
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
