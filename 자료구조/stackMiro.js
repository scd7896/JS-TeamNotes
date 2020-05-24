const map = [
  [0,1,0,1,1,1,0],
  [0,0,0,1,0,0,0],
  [1,1,0,0,0,1,0],
  [1,0,1,0,0,1,0],
  [0,0,0,0,0,1,1],
  [1,1,1,1,0,0,0],
  [1,1,1,1,1,1,0]
]

const pushLoc = (stack, x, y, moveLocation) => {
  if (x < 0 || y < 0) {
    return
  }  
  if (x === map.length || y === map.length) {
    return;
  }
  if (map[x][y] !== 1) {
    stack.push([x,y])
    moveLocation.push([x,y])
  }
}

const calculatorValue = (map, size) => {
  const moveLocation = []
  const stack = []
  map[size-1][size-1] = 3;
  let x;
  let y;
  let here = [0,0]
  
  while (map[here[0]][here[1]] !== 3) {
    [x,y] = here
    map[x][y] = 1;
    let tmp = stack.length;
    pushLoc(stack, x - 1, y, moveLocation)
    pushLoc(stack, x + 1, y, moveLocation)
    pushLoc(stack, x, y + 1, moveLocation)
    pushLoc(stack, x, y - 1, moveLocation)
    if (stack.length === 0) {
      console.log('실패');
      return;
    } else {
      here = stack.pop();
    }
  }

  console.log(moveLocation)
  let lastRocation = null;
  let answer = 0;
  let now = [0,0]
  
  // moveLocation.map((rocation) => {
  //   if (lastRocation === null) {
  //     answer = 100;
  //     lastRocation = rocation
  //     return;
  //   }

  //   if (lastRocation === rocation) {
  //     answer += 100;
  //   } else {
  //     answer += 500;
  //     lastRocation = rocation
  //   }
  // })
  // console.log(answer);
}

calculatorValue(map, map.length)