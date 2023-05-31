// Titel Case a Sentence
// "I'm a little tea pot"
// Advanced Solution part 2
function titleCase(str) {
    str = str.split(' ');
   return str.map((item)=>{
        item = item.toLowerCase().split('');
        item[0] = item[0].toUpperCase();
        return item.join('');
    }).join(' ');
}

console.log(titleCase("I'm a little tea pot"))
