// Reverse a string
// Ex. "Hello" 
// Ex. "Himadri"
// Ex. "Greetings from Earth"

function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("Hello"))
console.log(reverseString("Himadri"))
console.log(reverseString("Greetings from Earth"))