// var passwordChar = ["0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"];

// for (var i = 0; i < 128; i++) {
// 	var newPassword = passwordChar[Math.floor(Math.random() * passwordChar.length)];
// }
// console.log(newPassword)

// function makePass(length) {
// 	var result = '';
// 	var characters = "A0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
// 	var charactersLength = characters.length;
// 	for ( var i = 0; i < length; i++ ) {
// 	   result += characters.charAt(Math.floor(Math.random() * charactersLength));
// 	}
// 	return result;
//  }
 
//  var newPass = makePass(18)

//  function generate( length = 12 ){
//     var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     var lowercase = 'abcdefghijklmnopqrstuvwxyz';
//     var numbers = '0123456789';
//     var symbols = '!"#$%&\'()*+,-./:;<=>?@^[\\]^_`{|}~';
//     var all = uppercase + lowercase + numbers + symbols;
//     var password = '';
//     for (var index = 0; index < length; index++) {
//         var character = Math.floor(Math.random() * all.length);
//         password += all.substring(character, character + 1);
//     }
//     return password;
// }

// generate();

    // var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    // var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    // var numbers = '0123456789';
	// var symbols = '!"#$%&\'()*+,-./:;<=>?@^[\\]^_`{|}~';
	
// var justCheck = alert('Answer yes or no!')	

// var wantUpperCase = prompt('Would you like to add upper case letters to your password?');
// 	wantUpperCase = wantUpperCase.toLowerCase();

// var wantLowerCase = prompt('Would you like to add lower case letters to your password?');
// 	wantLowerCase = wantLowerCase.toLowerCase();

// var wantNumbers = prompt('Would you like to add numbers to your password?');
// 	wantNumbers = wantNumbers.toLowerCase();

// var wantSymbols = prompt('Would you like to add symbols to your password?');
// 	wantSymbols = wantSymbols.toLowerCase();

// if (wantUpperCase === 'yes' && wantLowerCase === 'yes' && wantNumbers === 'yes' && wantSymbols === 'yes') {
// 	console.log('you want upper case');}


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
			console.log('true'); //this is how you test - done by Brian
			newPassword = newPassword + upperCase;
		}
			var wantLowerCase = confirm('Would you like to have lower case letters in your password?');
		if (wantLowerCase === true) {
			console.log('true'); //this is how you test - done by Brian
			newPassword = newPassword + lowerCase;
		}	
	var wantNumbersCase = confirm('Would you like to have numbers letters in your password?');
		if (wantNumbersCase === true) {
			console.log('true'); //this is how you test - done by Brian
			newPassword = newPassword + numbers;
		}
	var wantSymbolsCase = confirm('Would you like to have symbols in your password?');
		if (wantSymbolsCase === true) {
			console.log('true'); //this is how you test - done by Brian
			newPassword = newPassword + symbols;
		}	
	console.log(newPassword);

	for (var i = 0; i < passLength.length; i++) {
		randomPassword = newPassword[Math.floor(Math.random() * Math.floor(newPassword.length -1))];
}

makePassword();



