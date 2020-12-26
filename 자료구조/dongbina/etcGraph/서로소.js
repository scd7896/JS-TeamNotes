const findParent = (parent, x) => {
	if (parent[x] !== x) {
		parent[x] = findParent(parent, parent[x]);
	}
	return parent[x];
};

const unionParent = (parent, a, b) => {
	a = findParent(parent, a);
	b = findParent(parent, b);
	if (a < b) {
		parent[b] = a;
	} else {
		parent[a] = b;
	}
};

const findCycle = (arr, max) => {
	const parent = new Array(max + 1).fill(0);
	for (let i = 1; i <= max; i++) {
		parent[i] = i;
	}
	let cycle = false;
	for (let i = 0; i < arr.length; i++) {
		if (findParent(parent, arr[i][0]) === findParent(parent, arr[i][1])) {
			cycle = true;
			break;
		} else {
			unionParent(parent, arr[i][0], arr[i][1]);
		}
	}

	console.log(parent, cycle);
};

module.exports = {
	findCycle,
	findParent,
	unionParent,
};
