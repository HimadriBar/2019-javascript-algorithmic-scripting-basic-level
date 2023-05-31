// Titel Case a Sentence
// "I'm a little tea pot"
// Intermediate Solution
function titleCase(str) {
    var convertToArray = str.toLowerCase().split(' ');
    var result = convertToArray.map((val) => {
        return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
    })
    return result.join(' ');
}

console.log(titleCase("I'm a little tea pot"))


// Or


function titleCaseAnather(str) {
    // Split the str into an array of words
    // Iterate through each word
    var words = str.toLowerCase().split(" ").map((item, index)=>{
        // Capitalize the first character of each word
     return item = item[0].toUpperCase() + item.slice(1);
    });
  
    // Join the words back into a sentence
  
    return words.join(" ");
  };
  console.log(titleCaseAnather("I'm a little tea pot")); // Output: "This Is An Example Sentence"
  
