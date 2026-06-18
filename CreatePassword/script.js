const result = document.querySelector('#result');
const copyBtn = document.querySelector('.btn-copy');
const passwordLength = document.querySelector('#charachterLength')
const lowerCaseCheck = document.querySelector('#lowercaseCharachter');
const upperCaseCheck = document.querySelector('#uppercaseCharachter');
const numberCheck = document.querySelector('#numberCharachter');
const symbolCheck = document.querySelector('#symbolCharachter');
const generateBtn = document.querySelector('.btn-generate');
const successMsg = document.querySelector('.success-msg')

const getLowerCharachters = () => {
    const charachterString = String.fromCharCode(Math.floor(Math.random() * 26) + 97);

    return charachterString;
}

const getUpperCharachters = () => {
    const charachterString = String.fromCharCode(Math.floor(Math.random() * 26) + 65);

    return charachterString;
}

const getNumberCharachters = () => {
    const charachterString = String.fromCharCode(Math.floor(Math.random() * 10) + 48);

    return charachterString;
}

const getSymbolCharachters = () => {
    const symbol = '!@#$%^&*()_+{}:"<>?';
    return symbol[Math.floor(Math.random() * symbol.length)];
}

const getRandomCharachter = {
    lowercase: getLowerCharachters,
    uppercase: getUpperCharachters,
    number: getNumberCharachters,
    symbol: getSymbolCharachters,
};

const generatePassword = (
    length,
    lowercase,
    uppercase,
    number,
    symbol
) => {
    let generatedPassword = '';
    const checkCuont = lowercase + uppercase + number + symbol;

    const checks = [
        { lowercase },
        { uppercase },
        { number },
        { symbol }
    ].filter(item => Object.values(item)[0]);

    if (checkCuont === 0) {
        return '';
    }
    for (let i = 0; i < length; i += checkCuont) {
        checks.forEach(checks => {
            const randomCharachterFunction = Object.keys(checks)[0];
            generatedPassword += getRandomCharachter[randomCharachterFunction]();
        })
    }
    result.value = generatedPassword;
}

generateBtn.addEventListener('click', () => {
    const length = +passwordLength.value;
    const lowercase = lowerCaseCheck.checked;
    const uppercase = upperCaseCheck.checked;
    const number = numberCheck.checked;
    const symbol = symbolCheck.checked;
    generatePassword(length, lowercase, uppercase, number, symbol);
});

const copyPassword = () => {
    result.select();
    document.execCommand('copy');
    successMsg.style.opacity='1';
    setTimeout(() => {
        successMsg.style.opacity= '0';
    }, 2000);
}
copyBtn.addEventListener('click', copyPassword);