const readline = require("readline");
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true); // not sure what this line does

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

process.stdin.on("keypress", (str, key) => {
  if (key.ctrl && key.name === "c") {
    console.log("Thanks for using me, ciao!");
    process.exit();
  } else if (key.name === "b") {
    process.stdout.write("\x07");
  } else if (nums.includes(Number(key.name))) {
    console.log(`Setting a timer for ${key.name} seconds`);
    setTimeout(() => {
      process.stdout.write("\x07");
    }, Number(key.name) * 1000);
  }
});

// adapted code from https://thisdavej.com/making-interactive-node-js-console-apps-that-listen-for-keypress-events/
