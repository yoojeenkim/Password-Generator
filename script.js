// Assignment Code
var generateBtn = document.querySelector("#generate");

// arrays 
var lowerCaseChars = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCaseChars = lowerCaseChars.map(name => name.toUpperCase());
var numericChars = ["0","1","2","3","4","5","6","7","8","9"];
var specialChars = ["!","@","#","$","%","^","&","*"];

console.log(upperCaseChars);

function generatePassword() {

  // prompt for length

  var length = prompt("Length?");

  if (length < 8) {
    alert("Password must be at least 8 characters long.");
  } else if (length > 128) {
      alert("Password must not exceed 128 characters.");
  }

  // confirm characters criteria
  var arrayPassword = [''];

  var upperCaseConfirm = confirm("Uppercase Letters?");
    if (upperCaseConfirm) {
      var arrayPassword = arrayPassword.concat(upperCaseChars);
    } else {
      arrayPassword.removeAll(upperCaseChars);
      }

  var lowerCaseConfirm = confirm("Lowercase Letters?");
    if (lowerCaseConfirm) {
      var arrayPassword = arrayPassword.concat(lowerCaseChars);
    } else {
      arrayPassword.removeAll(lowerCaseChars);
      }

  var numericConfirm = confirm("Numeric Characters?");
    if (numericConfirm) {
      var arrayPassword = arrayPassword.concat(numericChars);
    } else {
      arrayPassword.removeAll(numericChars);
    }
  
  var specialConfirm = confirm("Special Characters?");
    if (specialConfirm) {
      var arrayPassword = arrayPassword.concat(specialChars);
    } else {
      arrayPassword.removeAll(specialChars);
    }
}

console.log(arrayPassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);