// 양방향 그래프
const findCycle = (arr, max) => {
	const uf = new UnionFind(max + 1);
	for (let i = 0; i < arr.length; i++) {
		if (uf.isConnect(arr[i][0], arr[i][1])) {
			console.log(arr[i][0], arr[i][1]);
			return true;
		}
		uf.union(arr[i][0], arr[i][1]);
	}
};

class UnionFind {
	constructor(N) {
		this.parents = new Array(N);
		for (let i = 0; i < N; i++) this.parents[i] = i;
	}

	isConnect(x, y) {
		return this.find(x) === this.find(y);
	}

	union(x, y) {
		this.parents[this.find(x)] = this.find(y);
	}

	find(x) {
		if (x != this.parents[x]) this.parents[x] = this.find(this.parents[x]);
		return this.parents[x];
	}
}

class UnionFindGroup {
	constructor(N) {
		this.parents = new Array(N);
		for (let i = 0; i < N; i++) this.parents[i] = i;
	}

	isConnect(x, y) {
		return this.find(x) === this.find(y);
	}

	union(x, y) {
		const xParent = this.find(x);
		const yParent = this.find(y);
		this.parents[yParent] = xParent;
		for (let i = 0; i < this.parents.length; i++) {
			if (this.parents[i] === xParent || this.parents[i] === yParent) {
				this.parents[i] = this.parents[this.find(x)];
			}
		}
	}

	find(x) {
		if (x != this.parents[x]) this.parents[x] = this.find(this.parents[x]);
		return this.parents[x];
	}
}

module.exports = {
	findCycle,
	UnionFind,
	UnionFindGroup,
};
