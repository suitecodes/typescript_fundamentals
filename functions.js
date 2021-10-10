"use strict";
//the below example specifically says this add function will always return a number
function addNumber(value1, value2) {
    return value1 + value2;
}
//the below function uses void which means the function does not return any values
function printResult(sum) {
    console.log('Sum:' + sum);
}
//the below function uses a callback function as a function argument
function addAndHandle(value1, value2, cb) {
    const sum = value1 + value2;
    cb(sum);
}
//the following is type where a function is defined
let combineValues;
combineValues = addNumber;
printResult(addNumber(10, 12));
console.log(combineValues(1, 1));
console.log(addAndHandle(10, 20, (result) => { console.log(result); }));
