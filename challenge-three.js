// Run this code to know your fate :

let randomizer = Math.floor(Math.random() * 4);
if (randomizer == 0) {
  console.log("Your fate is a certain victory");
} else if (randomizer == 1) {
  console.log("Your fate is not so certain victory");
} else if (randomizer == 2) {
  console.log("Your fate is an uneasy victory");
} else {
  console.log("Your fate is unclear, ô chosen undead");
}
