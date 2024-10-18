const repeatString = function(stringArg, num) {
    let initString = "";

    for (let i=0; i<num; i++) {
        initString += stringArg;
    }

    if (num < 0) {
        return "ERROR";
    } else {
        return initString;
    }
    

};

// Do not edit below this line
module.exports = repeatString;
