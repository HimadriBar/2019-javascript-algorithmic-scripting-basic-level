    // find longest word in a string
// Ex. "Lorem ipsum is placeholder text commonly used in the graphic."
// Ex. "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
// This is the basic solucation
function findLongestWord(string) {
    return string.split(' ').reduce(function (x, y){
        return Math.max(x, y.length);
    }, 0)
}
console.log(findLongestWord("Lorem ipsum is text commonly used in the graphic."))
console.log(findLongestWord("Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."))