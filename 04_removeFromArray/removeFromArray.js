const removeFromArray = function(arr, ...elems) {
    return arr.filter(elem => !elems.includes(elem))
};

// Do not edit below this line
module.exports = removeFromArray;
