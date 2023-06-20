// Return Largest Numbers in Arrays
// array will have 583, 999, 113, 55
// Basic solution

var newArr = [
    [583, 999, 113, 55],
    [600, 187, 798, 444],
    [1432, 457, 6984, 88],
    [56, 3, 76, 689]
];

const largestOfFour = (newArr) => {
    let result = [];
    for (let i = 0; i < newArr.length; i++) {
        var largestNum = newArr[i][0];
        for (let subArr = 0; subArr < newArr[i].length; subArr++) {
            if (newArr[i][subArr] > largestNum) {
                largestNum = newArr[i][subArr];
            }
        }
        result[i] = largestNum;
        console.log(result, '_+')
    }
    return result;
}


console.log(largestOfFour(newArr), '---')



// const largestOfFour = (newArr) => {
//     let lrgNumArr = [];
//     newArr.map((val, index) => {
//         let currentNum = 0;
//         let lrgNum = 0;
//         if (val.length > 0) {
//             val.map((item, itemIndex) => {
//                 currentNum = item;
//                 if (currentNum > lrgNum) {
//                     lrgNum = currentNum
//                 }
//             });
//             console.log(lrgNum, '++')
//             lrgNumArr.push(lrgNum)
//         }
//     })
//     return lrgNumArr
// }