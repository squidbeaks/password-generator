function generatePassword() {
// prompt for password length (8-128)
var lengthPrompt = prompt(
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

// return "Your password will be " + lengthPrompt + " characters long.";
  console.log("Password length: " + lengthPrompt);

// confirm popup for uppercase
  var upperCase = confirm("Do you want uppercase characters in your password?");
  // need to validate
  console.log("Uppercase: " + upperCase);

  // confirm popup for lowercase
  var lowerCase = confirm("Do you want lowercase characters in your password?");
  // need to validate
  console.log("Lowercase: " + lowerCase);

  // confirm popup for numeric
  var numChar = confirm("Do you want numeric characters in your password?");
  // need to validate
  console.log("Num Characters: " + numChar);

  // confirm popup for special characters
  var specialChar = confirm("Do you want special characters in your password?");
  // need to validate
  console.log("Special Characters: " + specialChar);
};



    // we need to make sure that at least one of the character types above is selected

// generate password
// display password

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