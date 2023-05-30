// find longest word in a string
// Ex. "Lorem ipsum is placeholder text commonly used in the graphic."
// Ex. "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
// This is the basic solucation
function findLongestWord(string) {
    var words = string.split(' ');
    var maxLength = 0;
    for (const key in words) {
        if (Object.hasOwnProperty.call(words, key)) {
            var element = words[key];
            if (element.length > maxLength) {
                maxLength = element.length
            }
        }
    }
    return maxLength
}
console.log(findLongestWord("Lorem ipsum is text commonly used in the graphic."))
console.log(findLongestWord("Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."))