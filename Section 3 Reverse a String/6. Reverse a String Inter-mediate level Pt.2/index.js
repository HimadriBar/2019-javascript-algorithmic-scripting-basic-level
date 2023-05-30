// Reverse a string
// Ex. "Hello" 
// Ex. "Himadri"
// Ex. "Greetings from Earth"

function reverseString(str) {
    var newStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr;
}
console.log(reverseString("Hello"))
console.log(reverseString("Himadri"))
console.log(reverseString("Greetings from Earth"))