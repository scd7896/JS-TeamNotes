const map = [
	[0, 1, 0, 1, 1, 1, 0],
	[0, 0, 0, 1, 0, 0, 0],
	[1, 1, 0, 0, 0, 1, 0],
	[1, 0, 1, 0, 0, 1, 0],
	[0, 0, 0, 0, 0, 1, 1],
	[1, 1, 1, 1, 0, 0, 0],
	[1, 1, 1, 1, 1, 1, 0],
];

const pushLoc = (stack, x, y, moveLocation) => {
	if (x < 0 || y < 0) {
		return;
	}
	if (x === map.length || y === map.length) {
		return;
	}
	if (map[x][y] === 0) {
		stack.push([x, y]);
		moveLocation.push([x, y]);
	}
};

const isLast = (here, size) => here[0] === size - 1 && here[1] === size - 1;

const calculatorValue = (map, size) => {
	const moveLocation = [];
	const stack = [];
	let x = 0;
	let y = 0;
	let here = [0, 0];
	let round = 0;

	while (!isLast(here, size)) {
		map[x][y] = round + 1;
		pushLoc(stack, x - 1, y, moveLocation);
		pushLoc(stack, x + 1, y, moveLocation);
		pushLoc(stack, x, y + 1, moveLocation);
		pushLoc(stack, x, y - 1, moveLocation);
		if (stack.length === 0) {
			console.log("실패");
			return;
		} else {
			here = stack.pop();
			round = map[x][y];
			[x, y] = here;
		}
	}

	let lastRocation = null;
	let answer = 0;
	console.log(stack);
	moveLocation.map((rocation) => {
		if (lastRocation === null) {
			answer = 100;
			lastRocation = rocation;
			return;
		}

		if (lastRocation === rocation) {
			answer += 100;
		} else {
			answer += 500;
			lastRocation = rocation;
		}
	});
	console.log(answer);
};

calculatorValue(map, map.length);
