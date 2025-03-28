//madLibs.js
/* Step 2: Declare and assign values to variables
Include:
Strings (e.g., const timeOfDay = "sunny afternoon";).
Numbers (e.g., const mathResult = 2 + 2;).
A boolean expression (e.g., const booleanValue = timeOfDay.includes("afternoon");).
An object with properties (e.g., const person = { name: "Mike", age: 25 };).
*/

const timeOfDay = "stormy night";
const numbers = 10 - 7;
const booleanValue = timeOfDay.includes("night");
const ghost = {
    name: Spooky,
    eyes: glowing,
    body: levitating
};

// Step 1: Paste in one of the story templates above
const story = `
// todo
"On a stormy night, I ventured into the haunted house. The creaking walls seemed to whisper, sending chills down my spine. Suddenly, a ghost appeared, its glowing eyes piercing through the darkness. My heart raced as it floated silently toward me. Did you know 10 - 7 equals 3? Spooky, right?"

`;

document.getElementById("madlibs-output").textContent = story;


console.log(story);
