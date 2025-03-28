//madLibs.js
/* Step 2: Declare and assign values to variables
Include:
Strings (e.g., const timeOfDay = "sunny afternoon";).
Numbers (e.g., const mathResult = 2 + 2;).
A boolean expression (e.g., const booleanValue = timeOfDay.includes("afternoon");).
An object with properties (e.g., const person = { name: "Mike", age: 25 };).
*/

const timeOfDay = " stormy night";
const numbers = 10 - 7;
const booleanValue = timeOfDay.includes("stormy");
const ghost = {
    name: "Spooky",
    eyes: "glowing",
    body: "floated"
};

// Step 1: Paste in one of the story templates above
const story = `
"On a ${booleanValue} ${timeOfDay}, I ventured into the haunted house. The creaking walls seemed to whisper, sending chills down my spine. Suddenly, a ghost appeared, its ${ghost.eyes} eyes piercing through the darkness. My heart raced as it ${ghost.body} silently toward me. Did you know ${numbers} equals 3? ${ghost.name}, right?"
`;

document.getElementById("madlibs-output").textContent = story;


console.log(story);
