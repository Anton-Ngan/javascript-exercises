const reverseString = function(string) {
    let newString = "";
    let stringArr = string.split("");
    for (i = stringArr.length - 1; i >= 0; i--) {
        newString = newString.concat(stringArr[i]);
    }
    return newString
};

// Do not edit below this line
module.exports = reverseString;
