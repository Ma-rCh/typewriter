const sentence = "hello there from lighthouse labs";
let i = 0;
for (const char of sentence) {
  setTimeout(() => {
    // print the char here
    process.stdout.write(char);
  }, 50 * i);
  i++;
}
setTimeout(() => {
  // print the char here
  console.log(); //process.stdout.write(char);
}, 50 * i);
