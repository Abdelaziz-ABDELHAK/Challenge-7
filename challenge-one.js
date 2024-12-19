//Run the code below to know how many words are in this message

let message = "There is no war in Ba Sing Se";
let words = message.split(" ").filter((word) => word.trim() !== "");
let wordCount = words.length;

console.log(`This message contains ${wordCount} words`);

// Here is a functions that does the same job :

function countWords(text) {
  let words = text.split(" ").filter((word) => word.trim() !== "");
  return words.length;
}

let text = "There is no war in Ba Sing Se";
let wordCount = countWords(text);

console.log(`This text contains ${wordCount} words`);

//**Run these two code blocks seperately**
