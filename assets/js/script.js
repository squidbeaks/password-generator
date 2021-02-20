var lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
var upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericChar = "0123456789"; 
var specialCharacter = "!#$%&'()*+-/<=>?@[]^_`{|}~";
var passwordLength;

var charSet;

// prompt user for password length
var lengthPrompt = function() {
  passwordLength = prompt(
    "How long would you like your password? It must be between 8 and 128 characters."
    );

    if (passwordLength < 8 || passwordLength > 128) {
      alert("Password should be between 8 and 128 characters");
      return generatePassword();
    }

    if (passwordLength === "" || passwordLength === null || isNaN(passwordLength)) {
      alert("Your entry is invalid");
      return generatePassword();
    }
};

// prompt user for character types they prefer
var charTypePrompt = function() {
      var upperCasePrompt = confirm("Do you want uppercase characters in your password? Select OK for YES and CANCEL for NO.");
      var lowerCasePrompt = confirm("Do you want lowercase characters in your password? Select OK for YES and CANCEL for NO.");
      var numCharPrompt = confirm("Do you want numeric characters in your password? Select OK for YES and CANCEL for NO.");
      var specCharPrompt = confirm("Do you want special characters in your password? Select OK for YES and CANCEL for NO.");

      if (upperCasePrompt) {
        charSet = upperCaseChar;
      }
  
      if (lowerCasePrompt) {
        charSet = charSet + lowerCaseChar;
      }
  
      if (numCharPrompt) {
        charSet = charSet + numericChar;
      }
  
      if (specCharPrompt) {
        charSet = charSet + specialCharacter;
      }

      if(upperCasePrompt || lowerCasePrompt || numCharPrompt || specCharPrompt) {
        alert('Your password is being generated!'); 
      }
      else {
        alert("You need to select at least one character type.");
        charTypePrompt();
      }
};

// function to randomize character selection for character set
var getRandomIndex = function(stringLength) {
  return Math.floor(Math.random() * stringLength);
}

var generatePassword = function() {
  var charIndex;
  lengthPrompt();
  charTypePrompt();
  var newPassword = '';

// based on password length and character type preferences, will generate random password via for loop
for (var i = 0; i < passwordLength; i++) {
    charIndex = getRandomIndex(charSet.length)
    newPassword += charSet.charAt(charIndex);
  }

  return newPassword;
};

var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

generateBtn.addEventListener("click", writePassword);