function setPasswordLength() {
  var passwordLength = window.prompt(
    "How long would you like your password? It must be between 8 and 128 characters."
    );
    // need to validate there is proper input

    console.log("Your password will be " + passwordLength + " characters long.");
    return "Your password will be " + passwordLength + " characters long.";
}

function selectCharacterTypes() {
  var lowerCase = window.confirm("Do you want include lowercase characters? Click OK for YES, and CANCEL for NO.");
    if(lowerCase) {
      return "true";
    }
    else {
      return "false";
    }
  var upperCase = window.confirm("Do you want include uppercase characters? Click OK for YES, and CANCEL for NO.");
  var numeric = window.confirm("Do you want include numeric characters? Click OK for YES, and CANCEL for NO.");
  var specialCharacters = window.confirm("Do you want include special characters? Click OK for YES, and CANCEL for NO.");
  selectCharacterTypes();
}

function generatePassword() {
  // prompt for length of password (has to be between 8 and 128 characters)
    setPasswordLength();
  // prompt for types of characters (lowercase, uppercase, numeric, and/or special characters)
    selectCharacterTypes();
  // when prompts are all answered, then password is generated
  // password is displayed as an alert or on the page
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

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