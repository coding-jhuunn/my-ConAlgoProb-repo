function rockPaperScissor(response) {
  let computerPick = Math.floor(Math.random() * 3);
  let computerChoices = ["paper", "rock", "scissor"];
  console.log(computerChoices[computerPick]);
  if ((response === "paper") & (computerChoices[computerPick] === "rock")) {
    return "you win";
  } else if (
    (response === "rock") &
    (computerChoices[computerPick] === "scissor")
  ) {
    return "you win";
  } else if (
    (response === "scissor") &
    (computerChoices[computerPick] === "paper")
  ) {
    return "you win";
  } else if (response === computerChoices[computerPick]) {
    return "draw";
  } else {
    return "you lose";
  }
}

console.log(rockPaperScissor("paper"));
console.log(rockPaperScissor("paper"));
console.log(rockPaperScissor("paper"));
console.log(rockPaperScissor("paper"));
