// Iteration 1: Names and Input
let hacker1 = "Santiago R";
let hacker2 = "Karina C";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters`
  );
}

// Iteration 3: Loops
// For Loop Method
let reversed = "";
for (let i = hacker1.length - 1; i >= 0; i--) {
  reversed += hacker1[i] + " ";
}
console.log("For Loop Method: ", reversed);

// Chaining String Methods
let reversedNavigator = hacker1.split("").reverse().join(" ");
console.log("Chaining String Methods: ", reversedNavigator);
//3.3

let order = hacker1.localeCompare(hacker2);

if (order === 1) {
  console.log("The drivers name goes first");
} else if (order === -1) {
  console.log("Yo, the navigator goes first, definitely");
} else {
  console.log("Wow, you both have the same name?");
}

// Bonus 1
let numberOfWords = 0;
const loremText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam malesuada fringilla mauris sed ullamcorper. Maecenas a leo velit. Pellentesque venenatis tortor in arcu semper, vel consectetur leo blandit. Nullam id semper sem. Praesent felis diam, dapibus egestas facilisis vitae, pulvinar in justo. Ut varius cursus elit sed ullamcorper. Aenean tempor maximus neque vel dapibus. Aliquam maximus quam et eleifend elementum. Cras non purus faucibus, pulvinar urna at, dapibus enim. Curabitur consectetur luctus venenatis. Donec quis nisl semper, convallis purus in, imperdiet mi. Suspendisse id placerat massa. Quisque in elit mi. Suspendisse et finibus eros. Duis et auctor neque, at rutrum sem. Suspendisse bibendum urna eu tincidunt aliquam. Morbi dolor tortor, blandit tempor posuere et, lacinia non turpis. Suspendisse potenti. Quisque quis erat nibh. Ut sed sapien ex. Donec pulvinar pharetra lacinia. Donec vestibulum libero odio, sit amet egestas augue fermentum in. Nam dictum nisi in augue sodales bibendum. Etiam rutrum, quam ut consectetur cursus, nibh velit sagittis sapien, ac lacinia turpis eros nec erat. Morbi vitae felis porttitor, dapibus orci scelerisque, finibus purus. Mauris est felis, sagittis euismod mattis sit amet, consectetur nec sapien. Nullam varius pellentesque massa, a venenatis leo rutrum egestas. Donec nec sapien nisl. Proin id neque tempus, mollis massa eu, porta purus. Sed ac pellentesque ante. Nam a nunc ligula. Duis tortor tortor, pellentesque in mattis a, tempor vel augue. Aliquam turpis odio, feugiat et felis nec, consequat viverra orci. Cras gravida mauris a gravida vehicula. Phasellus massa lorem, posuere eget odio sed, convallis vehicula justo. Suspendisse dapibus, est ut sollicitudin feugiat, metus elit pretium tellus, a pulvinar urna est in metus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.";

numberOfWords = loremText.split(" ").length;
console.log("Number of words in loremText: ", numberOfWords);

let counter = 0;
for (let i = 0; i <= numberOfWords; i++) {
  if (loremText.split(" ")[i] === "et") {
    counter++;
  }
}
console.log("The number of times 'et' appears in loremText: ", counter);

// Bonus 2
function phraseToCheck(phrase) {
  const newPhrase = phrase.replace(/\s/g, ""); // method found on google
  let reversed = "";
  for (let i = newPhrase.length - 1; i >= 0; i--) {
    reversed += newPhrase[i];
  }

  console.log(`${phrase} is a palindrome: ${newPhrase === reversed}`);
  return newPhrase === reversed;
}

phraseToCheck("step on no pets");
phraseToCheck("race car");
phraseToCheck("Random words put together should not be a palindrome");
