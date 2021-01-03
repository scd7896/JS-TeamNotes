const togoplogySort = (prerequisites, numCourses) => {
	// 해당 과목의 선수과목의 갯수를 파악하는 배열
	const indegree = new Array(numCourses + 1).fill(0);
	// key -> 선수과목, value -> 후수과목
	const graph = {};

	// 해당 과목들이 1부터 해당 값까지 전부 넣는다.
	for (let i = 1; i <= numCourses; i++) {
		graph[i] = [];
	}
	for (let i = 0; i < prerequisites.length; i++) {
		const target = prerequisites[i];
		graph[target[0]].push(target[1]); // key가 선수 과목, value가 후수 과목
		indegree[target[1]] += 1; // 후수과목의 카운트를 1만큼 늘린다.
	}

	const result = [];
	const queue = [];
	// 선수과목이 0인 과목들을 queue에 넣는다
	for (let i = 1; i <= numCourses; i++) if (indegree[i] === 0) queue.push(i);

	while (queue.length) {
		const now = queue.shift();
		result.push(now);

		for (let i = 0; i < graph[now].length; i++) {
			const nextNode = graph[now][i];
			indegree[nextNode] -= 1;
			// 후수과목의 선수과목 수가 0이 되면 queue에 넣는다.
			if (indegree[nextNode] === 0) queue.push(nextNode);
		}
	}
	return indegree.reduce((acc, val) => acc && val === 0, true);
};
console.log(
	togoplogySort(
		[
			[7, 8],
			[1, 2],
			[1, 5],
			[2, 3],
			[2, 6],
			[3, 4],
			[4, 7],
			[5, 6],
			[6, 4],
		],
		8
	)
);
