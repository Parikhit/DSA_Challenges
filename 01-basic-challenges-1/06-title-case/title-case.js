function titleCase(str) {
    const wordsArr = str.toLowerCase().split(' ');

    for (let i = 0; i < wordsArr.length; i++) {
        wordsArr[i] = wordsArr[i][0].toUpperCase() + wordsArr[i].slice(1);
    }

    return wordsArr.join(' ');
}

module.exports = titleCase;
