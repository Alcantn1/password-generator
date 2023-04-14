
var generateBtn = document.querySelector("#generate");

var minimumNumbers = '0123456789';
var minimumLowerCases = 'abcdefghijklmnopqrstuvwxyz';
var minimumUpperCases = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var minimumSymbol = '!@#$%^&*()+~`{}[]';

function generatePassword(){
  console.log('pressed button');

  // PROMPTS Keep
  var random = "";

    var length = prompt("How many characters would you like to use (1-128)?");
    if (length >= 8 && length <= 128) {
      console.log(length);

    var special = prompt("Do you want to use special characters?");
    if (special === "yes") {
      random += minimumSymbol;
      console.log(random);
    }

    var uppercase = prompt("Do you want to use uppercase letters?");
    if (uppercase === "yes") {
      random += minimumUpperCases;
      console.log(random);
    }

    var lowercase = prompt("Do you want to use lowercase letters?");
    if (lowercase === "yes") {
      random += minimumLowerCases;
      console.log(random);
    }

    var numbers = prompt("Do you want to use numbers?");
    if (numbers === "yes") {
      random += minimumNumbers;
      console.log(random);
    }
    
    var finalpassword = "";
    for (var i = 0; i < length; i++) {
      finalpassword += random.charAt(Math.floor(Math.random() * random.length));
    }

    return finalpassword;
  }
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
