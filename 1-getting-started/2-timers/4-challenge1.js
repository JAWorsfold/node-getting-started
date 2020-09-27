// first attempt, thought I had to only code in theOneFunc scope
const theOneFunc = () => {
  console.log("Hello");
  setTimeout(() => console.log("Hello"), 4 * 1000);
};

setTimeout(theOneFunc, 4 * 1000);

// second attempt knowing I can go outside func scope

const theOnlyFunc = () => {
  console.log("Yo");
}

setTimeout(theOnlyFunc, 4 * 1000);
setTimeout(theOnlyFunc, 8 * 1000);
