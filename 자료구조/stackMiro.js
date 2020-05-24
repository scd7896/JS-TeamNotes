const map = [
  [0,1,0,1,1,1,0],
  [0,0,0,1,0,0,0],
  [1,1,0,0,0,1,0],
  [1,0,1,0,0,1,0],
  [0,0,0,0,0,1,1],
  [1,1,1,1,0,0,0],
  [1,1,1,1,1,1,0]
]

const pushLoc = (stack, x, y) => {
  if (x < 0 || y < 0) {
    return;
  }

}

const calculatorValue = (map, size) => {
  const move = [[1,0], [0,1], [-1,0], [0,-1]];
  const now = [0,0]
  const stack = []
  let lastRocation = null;
  let answer = 0;
  while(now[0] !== size-1 && now[1] !== size-1) {
    
  }
  
  stack.map((rocation) => {
    if (lastRocation === null) {
      answer = 100;
      lastRocation = rocation
      return;
    }

    if (lastRocation === rocation) {
      answer += 100;
    } else {
      answer += 500;
      lastRocation = roaction
    }
  })
  console.log(answer);
}

calculatorValue(map, map.length)