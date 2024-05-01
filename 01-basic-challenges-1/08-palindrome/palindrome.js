// function isPalindrome(str) {
//     const formattedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

//     const reversedStr = formattedStr.split('').reverse().join('');

//     return formattedStr === reversedStr;
// }

function isAlphanumeric(char) {
    const code = char.charCodeAt(0);

    if (!(code > 47 && code < 58) && !(code > 96 && code < 123)) return false;

    return true;
}

function replaceAlphanumeric(str) {
    let formattedStr = '';
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (isAlphanumeric(char)) {
            formattedStr += char;
        }
    }
    return formattedStr;
}

function isPalindrome(str) {
    const formattedStr = replaceAlphanumeric(str.toLowerCase());
    const reversedStr = formattedStr.split('').reverse().join('');

    return formattedStr === reversedStr;
}

module.exports = isPalindrome;
