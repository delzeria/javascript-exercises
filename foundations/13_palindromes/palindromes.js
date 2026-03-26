const palindromes = function (str) {
    forward = str.replace(/[^\w]/g, "").toLowerCase();
    reverse = forward.split("").reverse().join("");

    return forward === reverse;
};

// Do not edit below this line
module.exports = palindromes;
