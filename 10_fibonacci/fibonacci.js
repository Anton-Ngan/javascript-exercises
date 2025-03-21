const fibonacci = function(idx) {
    let a = b = 1;
    let temp;
    
    if (idx < 0) {
        return "OOPS"
    }

    if (idx == 0) {
        return 0;
    }

    if (idx == 1 || idx == 2) {
        return 1;
    }

    for (let i = 0; i < idx-2; i++) {
        temp = b;
        b += a;
        a = temp;
    }

    return b
};

// Do not edit below this line
module.exports = fibonacci;
