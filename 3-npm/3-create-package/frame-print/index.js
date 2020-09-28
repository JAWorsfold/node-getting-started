module.exports = function framePrint (str, frame) {
  const frames = frame.repeat(str.length);
  const printStr = `${frames}\n${str}\n${frames}`;
  console.log(printStr);
}
