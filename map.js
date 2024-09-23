// map----loops through each element of the array

const numbers = [4, 5, 2, 5, 6];
function doubleIt(num){
    console.log('num now', num)
    return num * 2;
}

const result = numbers.map(doubleIt)
// console.log(result)


// const numbers = [4, 5, 2, 5, 6];
const double2 = num => num * 2;
const output = numbers.map(double2)
// console.log(output);

const output2 = numbers.map(num => num * 2);
console.log(output2);

// const doubled = [];
// for (const num of numbers){
//     const double = num * 2;
//     doubled.push(double)
// }