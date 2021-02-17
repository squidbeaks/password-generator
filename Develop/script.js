function setPasswordLength() {
  var passwordLength = window.prompt(
    "How long would you like your password? It must be between 8 and 128 characters."
    );
    // need to validate there is proper input

    console.log("Your password will be " + passwordLength + " characters long.");
    return "Your password will be " + passwordLength + " characters long.";
}

function selectCharacterTypes() {
  var charactersPrompt = window.prompt(
    "What special characters would you like to include? Select 1 or more options: 1 for lowercase, 2 for uppercase, 3 for numeric, and/or 4 for special characters."
    );
    // need to validate there is proper input and at least one character type must be selected
    charactersPrompt = parseInt(charactersPrompt);
    switch (charactersPrompt) {
      case 1:
        // lowercase
        console.log("lowercase");
      case 2:
        // uppercase
        console.log("uppercase");
      case 3:
        // numeric
        console.log("numeric");
      case 4:
        // special characters
        console.log("special characters");
      default:
        window.alert("You did not pick a valid option. Try again.");
      // select character type again
      selectCharacterTypes();
    }
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