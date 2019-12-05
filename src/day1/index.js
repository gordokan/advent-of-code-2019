const { test, readInput } = require("../utils")

const prepareInput = (rawInput) => rawInput

const input = prepareInput(readInput())

const goA = (input) => {
  return input.toString()
    .trim()
    .split("\n")
    .reduce((acc, val) => {
      const fuel =  Math.floor(val/3) - 2;
      return acc + fuel;
  }, 0);
}

const goB = (input) => {
  return input.toString()
  .trim()
  .split("\n")
  .map(Number)
  .map((val) => {
    const getFuel = (_fuel) => {
      if (_fuel < 0 ) return 0;
      const _newfuel = calculateFuel(_fuel);
      return getFuel(_newfuel) + _fuel;
    };
    const allFuel = getFuel(val);
    return (allFuel - val);
  }).reduce((a, b) => a+b);
}

const calculateFuel = (input) => Math.floor(input/3) - 2;

/* Tests */

// test(result, expected)

/* Results */

console.time("Time")
const resultA = goA(input)
const resultB = goB(input)
console.timeEnd("Time")

console.log("Solution to part 1:", resultA)
console.log("Solution to part 2:", resultB)
