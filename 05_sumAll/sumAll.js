const sumAll = function(op1, op2) {
    if (op1 < 0 
        || op2 < 0 
        || !Number.isInteger(op1) 
        || !Number.isInteger(op2)) {
        return "ERROR";
    }

    lowerBound = Math.min(op1, op2);
    upperBound = Math.max(op1, op2);

    let totalSum = 0;

    for (i=lowerBound; i<=upperBound; i++) {
        totalSum += i;
    }

    return totalSum;
};

// Do not edit below this line
module.exports = sumAll;
