const reverseString = function(stringArg) {
    let newString = "";
    let stringLastIndex = stringArg.length - 1;

    for (let i=stringLastIndex; i>=0; i--) {
        newString += stringArg[i];
    }

    return newString;
};

// Do not edit below this line
module.exports = reverseString;
