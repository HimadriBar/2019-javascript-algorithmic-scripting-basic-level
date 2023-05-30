// Reverse a string
// Ex. "Hello" 
// Ex. "Himadri"
// Ex. "Greetings from Earth"

function reverseString(str) {
    var str = str.split('');
    // console.log('After split', str);
    str = str.reverse('');
    // console.log('After reverse', str);
    str = str.join('');
    // console.log('After join', str);
    
    return str
}
console.log(reverseString("Hello"))
console.log(reverseString("Himadri"))
console.log(reverseString("Greetings from Earth"))