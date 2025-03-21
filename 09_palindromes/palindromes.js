const palindromes = function (string) {
    const punc = "$,!;-\"\'.+";
    string = string.toLowerCase();

    let a = 0;
    let b = string.length - 1;
    
    while (a < b) {

        while ((punc.includes(string[a]) || string[a] == " ") && a < b) {
            a++;
        }

        while ((punc.includes(string[b]) || string[b] == " ") && a < b) {
            b--;
        }

        if (string[a] == string[b]) {
            a++;
            b--;
        } else {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
