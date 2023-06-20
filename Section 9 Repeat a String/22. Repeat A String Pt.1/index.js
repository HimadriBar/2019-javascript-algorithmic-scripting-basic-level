// Repeat A String Repeat A String 
// 'candy apples', -1, 4
// Basic Soluation

const repeatStringNumTime = (str, num) => {
    if (num > 0) {
        return str.repeat(`${num}`);
    } else {
        return '';
    }
}

console.log(repeatStringNumTime('candy apples', -1));
console.log(repeatStringNumTime('candy apples ', 4));