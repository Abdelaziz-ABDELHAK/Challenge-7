//Run this code to learn some geography ! (Especially if you're American)

let countries = ["China", "Japan", "South Korea", "Vietnam", "Malaysia"];
let capitals = ["Beijing", "Tokyo", "Seoul", "Hanoï", "Kuala Lumpur"];

for (let element in countries && capitals) {
  console.log(`Your country : ${countries[element].toUpperCase()} has the capital named : ${capitals[element].toUpperCase()}`);
}