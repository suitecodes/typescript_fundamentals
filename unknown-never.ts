//the following code snippet explains 'unknown' type

let userInput: unknown;
let userName: string;

userInput = null;
userName = 'hello';

if (userInput === 'string') {
    userName = userInput;
}

console.log('userName='+userName);

function generateError(message: string, code: number): never {
    throw {message: message, code: code};
}

generateError('An error occurred!', 500);