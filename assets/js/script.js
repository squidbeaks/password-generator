// generate random uppercase character
var upperCaseChar = String.fromCharCode(Math.floor(Math.random()*26)+65);
console.log(upperCaseChar);

// generate random lowercase character
var lowerCaseChar = String.fromCharCode(Math.floor(Math.random()*10)+97);
console.log(lowerCaseChar);

// generate random numeric character
var numericChar = String.fromCharCode(Math.floor(Math.random()*10)+48);
console.log(numericChar);

// generic random special character
var randomSpecialChar = function() { 
  var specialChar = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  console.log(specialChar[Math.floor(Math.random() * specialChar.length)]);
};

randomSpecialChar();

var userResponses = {};

var charTypePrompt = function() {
      // confirm popup for uppercase
      var upperCase = confirm("Do you want uppercase characters in your password? Select OK for YES and CANCEL for NO.");
      // need to validate
      console.log("Uppercase: " + upperCase);
      if (upperCase) {
        userResponses["upperCase"] = upperCase;
      }
  
      // confirm popup for lowercase
      var lowerCase = confirm("Do you want lowercase characters in your password? Select OK for YES and CANCEL for NO.");
      // need to validate
      console.log("Lowercase: " + lowerCase);
      if (lowerCase) {
        userResponses["lowerCase"] = lowerCase;
      }
  
      // confirm popup for numeric
      var numChar = confirm("Do you want numeric characters in your password? Select OK for YES and CANCEL for NO.");
      // need to validate
      console.log("Num Characters: " + numChar);
      if (numChar) {
        userResponses["numChar"] = numChar;
      }
  
      // confirm popup for special characters
      var specialChar = confirm("Do you want special characters in your password? Select OK for YES and CANCEL for NO.");
      // need to validate
      console.log("Special Characters: " + specialChar);
      if (specialChar) {
        userResponses["specialChar"] = specialChar;
      }
  
      if(upperCase || lowerCase || numChar || specialChar) {
        alert('Your password is being generated!'); 
      }
      else {
        alert("You need to select at least one character type.");
        charTypePrompt();
      }
};

var generatePassword = function() {
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

    //   return "Your password will be " + lengthPrompt + " characters long.";
    console.log("Password length: " + lengthPrompt);


  charTypePrompt();
  console.log(userResponses);


  


  // determine the length of the password
 // for (i = 0; i < lengthPrompt; i++)

  // which character types are true?

  // generate a password of X length using whatever character types are true

  // display password
};

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