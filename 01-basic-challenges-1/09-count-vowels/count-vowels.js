const checkVowel = (char) => {
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') return true;

    return false;
};

function countVowels(str) {
    const charArr = str.toLowerCase().split('');
    let count = 0;

    for (let i = 0; i < charArr.length; i++) {
        let char = charArr[i];
        if (checkVowel(char)) count++;
    }
    return count;
}

module.exports = countVowels;
