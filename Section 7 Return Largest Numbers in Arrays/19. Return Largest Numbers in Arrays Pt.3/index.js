// Return Largest Numbers in Arrays
// array will have 583, 999, 113, 55
// Advanced solution

var newArr = [
    [583, 999, 113, 55],
    [600, 187, 798, 444],
    [1432, 457, 6984, 88],
    [56, 3, 76, 689]
];

const largestOfFour = (arr) => {
   return arr.map(Function.apply.bind(Math.max, null))
}


console.log(largestOfFour(newArr), '---')
