var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var numbers = '0123456789';
var symbols = '!"#$%&\'()*+,-./:;<=>?@^[\\]^_`{|}~';
var newPassword = '';
var randomPassword = '';

function makePassword(){
	
	passLength = prompt('How long does your password needs to be? From 8 to 128');
	passLength = parseInt(passLength,10);
	
		if (passLength < 8 || passLength > 128) {
			alert('Number should be higher than 7 and lower than 129');
			return;
		} 
	var wantUpperCase = confirm('Would you like to have upper case letters in your password?');
		if (wantUpperCase === true) {
			newPassword = newPassword + upperCase;
		}
			var wantLowerCase = confirm('Would you like to have lower case letters in your password?');
		if (wantLowerCase === true) {
			newPassword = newPassword + lowerCase;
		}	
	var wantNumbersCase = confirm('Would you like to have numbers letters in your password?');
		if (wantNumbersCase === true) {
			newPassword = newPassword + numbers;
		}
	var wantSymbolsCase = confirm('Would you like to have symbols in your password?');
		if (wantSymbolsCase === true) {
			newPassword = newPassword + symbols;
		}
	console.log(newPassword);

	for (let i = 1; i <= passLength; i++) {
		randomPassword = randomPassword + newPassword.charAt(Math.floor(Math.random() * Math.floor(newPassword.length -1)));
	}
	console.log(randomPassword);
	document.getElementById("password").value = randomPassword;
}

function copyPass() {
	document.getElementById('password').select();
	document.execCommand('Copy');
	alert('Password was copied!')
}


