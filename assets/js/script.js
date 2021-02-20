var lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
var upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericChar = "0123456789"; 
var specialCharacter = "!#$%&'()*+-/<=>?@[]^_`{|}~";
var lengthPrompt;

var charSet;

var passwordLength = function() {
  lengthPrompt = prompt(
    // prompt for password length (8-128)
    "How long would you like your password? It must be between 8 and 128 characters."
    );
    // need to validate there is proper input
    if (lengthPrompt < 8 || lengthPrompt > 128) {
      alert("Password should be between 8 and 128 characters");
      return generatePassword();
    }

    if (lengthPrompt === "" || lengthPrompt === null || isNaN(lengthPrompt)) {
      alert("Your entry is invalid");
      return generatePassword();
    }
};

var charTypePrompt = function() {
      var upperCase = confirm("Do you want uppercase characters in your password? Select OK for YES and CANCEL for NO.");
      var lowerCase = confirm("Do you want lowercase characters in your password? Select OK for YES and CANCEL for NO.");
      var numChar = confirm("Do you want numeric characters in your password? Select OK for YES and CANCEL for NO.");
      var specialChar = confirm("Do you want special characters in your password? Select OK for YES and CANCEL for NO.");

      if (upperCase) {
        charSet = upperCaseChar;
      }
  
      if (lowerCase) {
        charSet = charSet + lowerCaseChar;
      }
  
      if (numChar) {
        charSet = charSet + numericChar;
      }
  
      if (specialChar) {
        charSet = charSet + specialCharacter;
      }  
      if(upperCase || lowerCase || numChar || specialChar) {
        alert('Your password is being generated!'); 
      }
      else {
        alert("You need to select at least one character type.");
        charTypePrompt();
      }
      console.log("charSet: " + charSet);
};

var getRandomIndex = function(str) {
  return Math.floor(Math.random() * str);
}

var generatePassword = function() {
  var newPassword = getRandomIndex();
  var charIndex;
  passwordLength();
  console.log(lengthPrompt);
  charTypePrompt();
  var charSetString = charSet;

  for (var i = 0; i < lengthPrompt; i++) {
    charIndex = getRandomIndex(charSet.length)
    console.log("Charset length: " + charSet.length);
    console.log("CharIndex: " + charIndex);
    newPassword += charSet.charAt(charIndex);
    console.log(newPassword);
  }

  return newPassword;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page