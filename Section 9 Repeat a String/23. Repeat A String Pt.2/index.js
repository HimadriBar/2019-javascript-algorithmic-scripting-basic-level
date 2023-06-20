// Repeat A String Repeat A String 
// 'candy apples', -1, 4
// Intermediated Soluation

const repeatStringNumTime = (str, num) => {
    if (num <= 0) return '';
    if (num === 1) {
        return str;
    } else {
        return str + repeatStringNumTime(str, num - 1);
    }
}

console.log(repeatStringNumTime('candy apples', -1));   // ''
console.log(repeatStringNumTime('candy apples ', 4));   // candy apples candy apples candy apples candy apples