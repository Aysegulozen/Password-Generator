// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  // get user length
  var length = parseInt(prompt("Enter the length of the password (between 8 and 128 characters):"));
  if (length < 8) {
    alert("you need at least 8 characters ")
    return
  }
  if (length > 128) {
    alert("You need less than 128 characters")
    return
  }
  // Prompt user for inclusion of special, numeric, lowercase, and uppercase characters
  var includeSpecial = confirm("Include special characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");

  // Create and return an object containing user options
  var passwordOptions = {
    length: length,
    includeSpecial: includeSpecial,
    includeNumeric: includeNumeric,
    includeLowercase: includeLowercase,
    includeUppercase: includeUppercase,
  }
  return passwordOptions
}


// Function for getting a random element from an array
function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];

}

// Function to generate password with user input
function generatePassword() {
  var options = getPasswordOptions()

  // Initialize an empty array for characters
  var characters = [];

  // Concatenate arrays based on user options
  if (options.includeSpecial) {
    characters = characters.concat(specialCharacters);
  }
  if (options.includeNumeric) {
    characters = characters.concat(numericCharacters);
  }
  if (options.includeLowercase) {
    characters = characters.concat(lowerCasedCharacters);
  }
  if (options.includeUppercase) {
    characters = characters.concat(upperCasedCharacters);
  }

  // Initialize an empty string for the password
  var password = "";

  // Generate password by selecting random characters from the array 
  for (var i = 0; i < options.length; i++) {
    password += getRandom(characters);
  }
  // Return the generated password
  return password;
}


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);