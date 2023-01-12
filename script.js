  var lowCase = "abcdefghijklmnopqrstuvwxyz";
	var upCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var numbers = "0123456789";
	var specialCharecters = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
	var reliablePassword = ""; //empty string to store desirable password
	
	var generateBtn = document.querySelector("#generate"); 
	
	//window alert as a welcome prompt

  function generatePassword() {
  window.alert("Hello. Let me help you to create a reliable password!");

  //function to collect password length

	var lengthSelection = function() 
  {
	var numberOfCharcters = window.prompt("Please pick any number between 8 and 128 for the length of your password");
	if (numberOfCharcters === "" ||  numberOfCharcters < 8 ||  numberOfCharcters > 128) 
  {
	window.alert("Selected option is not valid. Please try again.");
	lengthSelection();
	} 
	return  numberOfCharcters;
	};
	
	//function to collect types characters

	var charTypeSelect = function() {
	var lowC = window.prompt("Would you like to include lowercase letters?");
	if (lowC === "yes" || lowCase === "YES" ) {

	//adding lower case letters for the desired password, if user picks it

	reliablePassword += lowCase;
	} 
	
	var upC = window.prompt("Would you like to include uppercase letters?");
	if (upC === "yes" || upCase === "YES" ) {

    //adding upper case letters for the desired password, if user picks it

    reliablePassword += upCase;
	} 
	
	var uniqueNumers = window.prompt("Would you like to include numbers?");
	if (uniqueNumers === "yes" || numbers === "YES" ) {

    //adding numbers case for the desired password, if user picks it

    reliablePassword += numbers;
	} 
	
	var specialSymbols = window.prompt("Would you like to include any special characters? For instance: !#$%&'()*+,-./:;<=>?@[\]^_`{|}~");
	if (specialSymbols === "yes" || specialCharecters === "YES" ) {

    //adding special characters for the desired password, if user picks it

    reliablePassword += specialCharecters;
	} 
	
	if (reliablePassword === "") {
    window.alert("Select at least one character type. Try one more time.");
	charTypeSelect();
	}
	
	return reliablePassword; 
	};
	
	
	//function collecting length

	var length = lengthSelection();

	//calling function collecting different characters

	charTypeSelect(); 

	
	//generating password of specific length with the specific amount of different characters

	var password = "";
	for (var i = 0; i < length; i++) {

	//generating random characters picked by user

	password += reliablePassword.charAt(Math.floor(Math.random() * reliablePassword.length));
	}
	
	return password;
	};
	
	// Write password to the #password input

	function writePassword() {
	var password = generatePassword();
	var passwordText = document.querySelector("#password");
	
	passwordText.value = password;
	};
	
	// Add event listener to generate button

	generateBtn.addEventListener("click", writePassword);
