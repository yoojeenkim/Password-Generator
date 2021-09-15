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

// arrays 
var upperCaseChars = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCaseChars = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numericChars = ["0","1","2","3","4","5","6","7","8","9"];
var specialChars = ["~","!","@","#","$","%","^","&","*"];

var length = prompt("Length?");
  if (length < 8) {
    alert("Password must be at least 8 characters long.");
  } else if (length > 128) {
      alert("Password must not exceed 128 characters.");
  }