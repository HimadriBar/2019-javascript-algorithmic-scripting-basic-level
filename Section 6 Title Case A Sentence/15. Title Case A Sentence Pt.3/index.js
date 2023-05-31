// Titel Case a Sentence
// "I'm a little tea pot"
// Advanced Solution
function titleCase(str) {
    return str.toLowerCase().replace(/(^|\s)\S/g, (L)=> L.toUpperCase())
}

console.log(titleCase("I'm a little tea pot"))
