// Confirm the Ending
// 'Bastian', 'n'
// 1'st Solution

const confirmEnding = (str, target) => {
    return str.substr(-target.length) === target;
}

console.log(confirmEnding('Bastian', 'n'))  // true
console.log(confirmEnding('Bast', 'n'))  // false