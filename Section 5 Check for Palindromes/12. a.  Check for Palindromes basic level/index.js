// Check for Palindromes
// "A man, a plan, a canal, Panama"
// "Hello, world!"

function isPalindrome(str) {
    // assign a front and back pointer
    let front = 0;
    let back = str.length - 1;
    // back and front pointer won't always meet in the middle, so use (back>front)
    while (back > front) {
        // increments front pointer if current cheracter doesn't meet criteria
        while (str[front].match(/[\W_]/)) {
            front++;
            continue;
        }
        // decrements back pointer if current cheracter doesn't meet criteria
        while (str[back].match(/[\W_]/)) {
            back--;
            continue;
        }
        // finally do the comparison on the current cheracter 
        if (str[front].toLowerCase() !== str[back].toLowerCase()) {
            return false
        }
        front++;
        back--;
    }
    return true;
}

// Example usage
console.log(isPalindrome("A man, a plan, a canal, Panama"));  // true
console.log(isPalindrome("Hello, world!"));  // false