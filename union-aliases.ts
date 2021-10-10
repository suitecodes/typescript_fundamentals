/**
 * The below is an example of union types and literal type and type alias
 */
type VarChar = number | string;
type ConversionType = 'as-string' | 'as-number';
type User = {name: string, role: number};

const Administrator: User = {
    name: 'William',
    role: 3
};

function combine(value1: VarChar, value2: VarChar, resultConversion: ConversionType) {
    let result: number | string;
    if (typeof value1 === 'number' && typeof value2 === 'number' && resultConversion === 'as-number') {
        result = Number(value1) + Number(value2);
    } else {
        result = value1.toString() + value2.toString();
    }
    return result;
}

const combineResult1 = combine('1', 'William', 'as-string');
console.log(combineResult1);
const combineResult2 = combine(1, 2, 'as-number');
console.log(combineResult2+', typeOf='+typeof(combineResult2));
const combineResult3 = combine('William', 'Maylene', 'as-string');
console.log(combineResult3);