    // find longest word in a string
// Ex. "Lorem ipsum is placeholder text commonly used in the graphic."
// Ex. "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
// This is the basic solucation
function findLongestWord(str) {
    str = str.split(' ');
    if (str.length == 1) {
        return str[0].length
    }
    if (str[0].length >= str[1].length) {
        str.splice(1,1);
        return findLongestWord(str.join(' '));
    }
    if (str[0].length <= str[1].length) {
        return findLongestWord(str.slice(1, str.length).join(' '));
    }
    return str.length
}
console.log(findLongestWord("Lorem ipsum is text commonly used in the graphic."))
console.log(findLongestWord("Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."))