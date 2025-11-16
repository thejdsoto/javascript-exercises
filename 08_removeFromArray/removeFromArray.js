const removeFromArray = function(args) {
    let array = arguments[0];
    
    for (let i = 0; i < array.length; i++) {
        let element = array[i];

        for (let j = 1; j < arguments.length; j++) {
            let number = arguments[j];

            if (element === number) {
                array.splice(i, 1);
                i--;
            }
        }
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
