// Challenge 2:
//   Just like Challenge 1 but this time with repeated delay values.
//   Print Hello World 5 times with a delay of 100 ms.
//   Then Print it again 5 more times with a delay of 200 ms.
//   Then print it again 5 more times with a delay of 300 ms.
//   And so on until the program is killed.
//   Include the delay in the printed message:
//   Constraints:
//    - Only use setInterval (not setTimeout)
//    - Use only ONE if statement

const recurse = delay => {
  let counter = 0;
  const intervalId = setInterval(() => {
    console.log("Hello World. " + delay);
    counter += 1;

    if (counter === 5) {
      clearInterval(intervalId);
      shrug(delay + 100)
    }

  }, delay);
}

recurse(100);
