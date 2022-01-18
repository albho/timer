const input = process.argv.slice(2).map(num => Number(num));
if (input.length === 0) return;

input.forEach(num => {
  if (num > 0 && typeof num === "number" && !isNaN(num)) {
    setTimeout(() => {
      process.stdout.write("\x07");
    }, num * 1000);
  }
});
