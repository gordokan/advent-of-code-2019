const { test, readInput } = require("../utils")

const prepareInput = (rawInput) => rawInput

const input = prepareInput(readInput())

const goA = (input, noun, verb) => {
  const numArr = input.toString()
  .trim()
  .split(",")
  .map(Number);

  numArr[1] = noun;
  numArr[2] = verb;

  let instructionPointer = 0; // this gets + by 4 each time
  let nextPosition = 4;

  while(instructionPointer < nextPosition) {
    if (numArr[instructionPointer] === 99) break;

    const instruction = numArr[instructionPointer] === 1 ? (a,b) => a+b : (a,b) => a*b;
    const outuptPosition = numArr[instructionPointer + 3];
    const pos1 = numArr[instructionPointer+1];
    const pos2 = numArr[instructionPointer+2];

    numArr[outuptPosition] = instruction(numArr[pos1], numArr[pos2]);

    instructionPointer = nextPosition;
    nextPosition = nextPosition + 4;
  }

  return numArr[0];
}

const goB = (input) => {
  let noun = 0;
  let verb = 0;
  let _break = false;

  for(let i = 0; i <= 99; i++) {
    for(let j = 0; j <= 99; j++) {
      const output = goA(input, i, j);
      console.log(output);
      if (output === 19690720) {
        noun = i;
        verb = j;
        _break = true;
        break;
      }
    }
    if (_break) {
      break;
    }
  }

  return 100 * noun + verb;
}

/* Tests */

// test(result, expected)

/* Results */

console.time("Time")
const resultA = goA(input, 40, 19)
const resultB = goB(input)
console.timeEnd("Time")

console.log("Solution to part 1:", resultA)
console.log("Solution to part 2:", resultB)
