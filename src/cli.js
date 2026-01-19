import readlineSync from "readline-sync";

function getName() {
  const name = readlineSync.question("May I have your name?: ");
  return name;
}

export function beginning() {
  console.log("Welcome to the Brain Games!");
  const name = getName();
  console.log(`Hello, ${name}!`);
  return name;
}
