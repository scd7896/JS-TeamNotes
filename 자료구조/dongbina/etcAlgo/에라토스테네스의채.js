const eratostenes = (num) => {
	const array = new Array(num + 1).fill(true);

	for (let i = 2; i < parseInt(Math.sqrt(num), 10) + 1; i++) {
		if (array[i] === true) {
			for (let j = 2; i * j <= num; j++) {
				array[i * j] = false;
			}
		}
	}
	array.map((i, index) => {
		if (i) {
			console.log(index);
		}
	});
};

eratostenes(26);
