// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var passwordCriteria = function() {
  //Ask user for password criteria
  var userChoice = window.prompt("How long is your password?");

  //If user presses Terminate, immediately reset all functions
  if (!userChoice) {
    return;
  }

  //
}