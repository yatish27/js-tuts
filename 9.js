// Hands dirty

// 1. function to check if the string is a palindrome spaces, cases and special characters don't matter
// Try with for loop

function isPalindrome(str){
	var newStr = str.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
	for (var i=0; i<Math.floor(newStr.length / 2); i++) {
      if (newStr.charAt(i) !== newStr.charAt(newStr.length - i - 1)) {
      	return false;
      }
   }
   return true;
}

function isPalindrome(str){
	var newStr = str.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
	return(newStr.split('').reverse().join('') ===  newStr)
}

console.log(isPalindrome("foxof"));
console.log(isPalindrome("Hey I, YEH!"));





