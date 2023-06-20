// Confirm the Ending
// 'Bastian', 'n'
// 2'nd Solution

const confirmEnding = (str, target) => {
    if (str.substr(str.length - target.length) !== target) {
        return false;
    } else {
        return true;
    };
}

console.log(confirmEnding('Bastian', 'n'))  // true
console.log(confirmEnding('He has to give ma a new name', 'new'))  // false
console.log(confirmEnding('He has to give ma a new name', 'name'))  // true