function _add(num1: number, num2: number, isLogResult: boolean, resultPhrase: string) {
    const sum = num1 + num2;
    if (isLogResult) {
        console.log(sum);
    }
    return `${resultPhrase} ${sum}`;
}

const n1 = 100;

const n2 = 10;
const resultPhrase = `Result is:`
const result = _add(n1, n2, false, resultPhrase);

const rootElem = document.getElementById('root')!;
rootElem.innerHTML = `${result}`;