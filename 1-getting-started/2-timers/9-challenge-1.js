// Challenge 1:
//   Print "Hello World" forever. Starting with a delay of 1 second
//   but then incrementing the delay by 1 second each time.
//   The second time will have a delay of 2 seconds
//   The third time will have a delay of 3 seconds.
//   Include the delay in the printed message
//   Constraints: You can only use const (no let or var)

const recurseSolution = delay => {
  setTimeout(() => {
    console.log("Hello World. " + delay);
    recurseSolution(delay + 1);
  }, delay * 1000);
}

recurseSolution(1);
