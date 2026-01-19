import readlineSync from "readline-sync";
import { beginning } from "../cli.js";

function randomizer() {
  let value = Math.floor(Math.random() * 25) + 1;
  return value;
}
function evenGame() {
  let value = randomizer();
  console.log(`Question: ${value}`);

  const answer = readlineSync.question("Your answer: ");
  if (
    (value % 2 === 0 && answer === "yes") ||
    (value % 2 !== 0 && answer === "no")
  ) {
    return [answer, true, value];
  } else return [answer, false, value]
}

function getRandomNumber() {
  for (let i = 0; i < 3; i = i + 1) {
    const userAnswer = evenGame()
    if (userAnswer[1]) {
      console.log("Correct!");
    } else return [userAnswer[0], false, userAnswer[2]];
  }
  return ['wtf', true, 'wtf2'];
}

export function endingEven() {
  const userName = beginning();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const finalAnswer = getRandomNumber()
  if (finalAnswer[1]) {
    return `Congratulations, ${userName}!`;
  } else
return `'${finalAnswer[0]}' is wrong answer ;(. Correct answer was '${finalAnswer[2] % 2 !== 0 ? "no" : "yes"}'.`;
}
