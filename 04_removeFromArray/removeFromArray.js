const removeFromArray = function(arrayArg, ...element) {
    let newArray = [];
    
    for (let i=0; i<arrayArg.length; i++) {
        if (element.includes(arrayArg[i]) === false) {
            newArray.push(arrayArg[i]);
        }
    }

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;

