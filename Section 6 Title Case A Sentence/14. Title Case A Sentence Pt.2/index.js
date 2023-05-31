// Titel Case a Sentence
// "I'm a little tea pot"
// Basic Solution
function titleCase(str) {
    var convertToArray = str.toLowerCase().split(' ');
    var result = convertToArray.map((val) => {
        return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
    })
    return result.join(' ');
}

console.log(titleCase("I'm a little tea pot"))
