// I paired by myself

// __________________________________________
// Write your code below.

var secretNumber = 7;

var password = "just open the door";

var allowedIn = false;

var members = ["John", "Mary"];

var members = ["John", "Slavin", "Dales", "Mary", "Henns" ];


// __________________________________________
// Reflection: Use the reflection guidelines to write a reflection here. 
// This was a pretty cool challenge. At first I copied and pasted the entire code into my browser, which gave 
// of course gave me an error message. Only i didn't know what to do next. Then I thought of what my gps instructor
// suggested and test each line of code one at a time. After that, the answer came out rather smoothly. I feel like
// I cheated a little bit, deciding to go to codecademy and learn a little bit of javascript off the beaten path. 
// It turned out better than expected. I feel like I have a good flow writing in java and I'm excited to learn how
// to use it in my websites. 


// __________________________________________
// Test Code:  Do not alter code below this line.

function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)

assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)

assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)

assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)

assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)

assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)

assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)

assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)

assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)

