// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  function generatePassword() {
    // prompt for length
    var length = prompt("Length?");
  
    if (length < 8) {
      alert("Password must be at least 8 characters long.");
      return;
    } else if (length > 128) {
        alert("Password must not exceed 128 characters.");
        return;
    }
  
    // arrays 
    var lowerCaseChars = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
    upperCaseChars = lowerCaseChars.map(name => name.toUpperCase()),
    numericChars = ["0","1","2","3","4","5","6","7","8","9"],
    specialChars = ["!","@","#","$","%","^","&","*"];
  
    // confirm characters criteria
    var arrayPassword = [''];
  
    var upperCaseConfirm = confirm("Uppercase Letters?");
      if (upperCaseConfirm) {
        var arrayPassword = arrayPassword.concat(upperCaseChars);
      }
  
    var lowerCaseConfirm = confirm("Lowercase Letters?");
      if (lowerCaseConfirm) {
        var arrayPassword = arrayPassword.concat(lowerCaseChars);
      }
  
    var numericConfirm = confirm("Numeric Characters?");
      if (numericConfirm) {
        var arrayPassword = arrayPassword.concat(numericChars);
      }
    
    var specialConfirm = confirm("Special Characters?");
      if (specialConfirm) {
        var arrayPassword = arrayPassword.concat(specialChars);
      }
    
    if (!upperCaseConfirm || !lowerCaseConfirm || !numericConfirm || !specialConfirm) {
      alert('You must choose at least one of the criteria!');
      return;
    }
    //for loop generates password the amount of times the length is at random each time
    function randomElement (array) {
      return array[Math.floor(Math.random() * array.length)]
    }

    var finalPassword = [''];

    for(i=0; i<length; i++) {
      finalPassword += randomElement(arrayPassword);
    }
    return finalPassword;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);