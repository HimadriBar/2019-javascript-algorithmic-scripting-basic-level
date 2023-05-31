// Titel Case a Sentence
// "I'm a little tea pot"
// Basic Solution
function titleCase(sentence) {
    if (sentence.length === 0) return sentence; // Handle empty sentence case
  
    // Split the sentence into an array of words
    var words = sentence.toLowerCase().split(" ");
  
    // Capitalize the first letter of each word
    for (var i in words) {
      words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    }
  
    // Join the words back into a sentence
    var titleCaseSentence = words.join(" ");
    return titleCaseSentence;
  }

  console.log(titleCase("I'm a little tea pot"))

//   In this example, the titleCase function takes an input sentence and converts it to title case. It first converts the entire sentence to lowercase using the toLowerCase() method, then splits it into an array of words using the split(" ") method.

// Next, it iterates over each word, capitalizes the first letter using the toUpperCase() method, and concatenates it with the rest of the word using substring(1).

// Finally, it joins the modified words back into a sentence using the join(" ") method and returns the title case sentence.

// Note that this implementation assumes words are separated by spaces. If you have a different word separator or punctuation, you may need to adjust the code accordingly.