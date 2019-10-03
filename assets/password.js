// var passwordChar = ["0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"];

// for (var i = 0; i < 128; i++) {
// 	var newPassword = passwordChar[Math.floor(Math.random() * passwordChar.length)];
// }
// console.log(newPassword)

function makePass(length) {
	var result = '';
	var characters = "A0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
	var charactersLength = characters.length;
	for ( var i = 0; i < length; i++ ) {
	   result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
 }
 
 var newPass = makePass(18)

