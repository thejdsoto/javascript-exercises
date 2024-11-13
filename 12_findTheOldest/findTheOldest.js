const findTheOldest = function(arr) {
    let today = new Date();
    return arr.reduce((accumulator, currentValue) => {
        if (currentValue.yearOfDeath === undefined) {
            currentValue.yearOfDeath = today.getUTCFullYear();
        }

        if (accumulator.yearOfDeath === undefined) {
            accumulator.yearOfDeath = today.getUTCFullYear();
        }

        if ((currentValue.yearOfDeath - currentValue.yearOfBirth) > (accumulator.yearOfDeath - accumulator.yearOfBirth)) {
            accumulator = currentValue;
        }

        return accumulator;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
