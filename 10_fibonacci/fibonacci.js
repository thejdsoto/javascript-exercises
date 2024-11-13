const fibonacci = function(num) {
    let fibSequence = [];
    if (num == 0) {
        return 0;
    } else if (num > 0) {
        for (let i=0; i<num; i++) {
            if (i === 0) {
                fibSequence.push(1);
            } else if (i === 1) {
                fibSequence.push(1);
            } else {
                fibSequence.push(fibSequence[fibSequence.length-1] + fibSequence[fibSequence.length-2]);
            }
        }
    } else {
        return "OOPS";
    }

    return fibSequence[fibSequence.length-1];
};

// Do not edit below this line
module.exports = fibonacci;
