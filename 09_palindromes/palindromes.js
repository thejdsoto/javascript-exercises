const palindromes = function (word) {
    let wordArray = word.toUpperCase().split("");
    let wordArrayNew = [];
    let wordReversed = [];
    let alphanumeric = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

    for (let i=wordArray.length-1; i>=0; i--) {
        if (alphanumeric.split("").includes(wordArray[i])) {
            wordReversed.push(wordArray[i]);   
        }
    }

    for (let i=0; i<wordArray.length; i++) {
        if (alphanumeric.split("").includes(wordArray[i])) {
            wordArrayNew.push(wordArray[i]);
        }
    }
    
    return wordArrayNew.toString() === wordReversed.toString();
};

// Do not edit below this line
module.exports = palindromes;
