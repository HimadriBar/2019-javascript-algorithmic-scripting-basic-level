// Reverse a string
// Ex. "Hello" 
// Ex. "Himadri"
// Ex. "Greetings from Earth"

function reverseString(str) {
    var newStr = "";
    for (var i = str.length; i > 0; i--) {
        newStr += str[i];
    }
    return newStr;
}
console.log(reverseString("Hello"))
console.log(reverseString("Himadri"))
console.log(reverseString("Greetings from Earth"))