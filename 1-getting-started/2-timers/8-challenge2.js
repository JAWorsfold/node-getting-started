// Print "Hello World"
// Every second
// And stop after 5 times
// After 5 times. Print "Done" and let Node exit.

let counter = 1;

const func = () => {
  console.log("Hello World")
  if (counter === 5) {
    clearInterval(interval);
    console.log("Done");
  }
  counter += 1;
}

const interval = setInterval(func, 1000);

// can't use setTimeout
// const func = inter => {
//   clearInterval(inter);
//   console.log("Done");
// };

// setTimeout(func, 5500, interval);
