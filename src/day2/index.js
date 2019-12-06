const { test, readInput } = require("../utils")

const prepareInput = (rawInput) => rawInput

const input = prepareInput(readInput())

const goA = (input) => {
  const numArr = input.toString()
  .trim()
  .split(",")
  .map(Number);

  let currentPosition = 0; // this gets + by 4 each time
  let nextPosition = 4;

  while(currentPosition < nextPosition) {
    if (numArr[currentPosition] === 99) break;

    const mathFn = numArr[currentPosition] === 1 ? (a,b) => a+b : (a,b) => a*b;
    const outuptPosition = numArr[currentPosition + 3];
    const pos1 = numArr[currentPosition+1];
    const pos2 = numArr[currentPosition+2];

    numArr[outuptPosition] = mathFn(numArr[pos1], numArr[pos2]);

    currentPosition = nextPosition;
    nextPosition = nextPosition + 4;
  }

  return numArr[0];
}

const goB = (input) => {
  return
}

/* Tests */

// test(result, expected)

/* Results */

console.time("Time")
const resultA = goA(input)
const resultB = goB(input)
console.timeEnd("Time")

console.log("Solution to part 1:", resultA)
console.log("Solution to part 2:", resultB)
