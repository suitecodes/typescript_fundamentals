"use strict";
//the following code snippet explains 'unknown' type
let userInput;
let userName;
userInput = null;
userName = 'hello';
if (userInput === 'string') {
    userName = userInput;
}
console.log('userName=' + userName);
function generateError(message, code) {
    throw { message: message, code: code };
}
generateError('An error occurred!', 500);
