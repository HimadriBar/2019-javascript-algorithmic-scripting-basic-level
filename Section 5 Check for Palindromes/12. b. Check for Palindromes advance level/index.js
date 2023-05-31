// Check for Palindromes
// "A man, a plan, a canal, Panama"
// "Hello, world!"
function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    str = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
    
    // Check if the reversed string is equal to the original string
    return str === str.split('').reverse().join('');
  }
  
  // Example usage
  console.log(isPalindrome("A man, a plan, a canal, Panama"));  // true
  console.log(isPalindrome("Hello, world!"));  // false
  