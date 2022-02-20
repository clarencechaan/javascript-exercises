const palindromes = function (string) {
    
    let resultString = "";
    for (let i = string.length - 1; i >= 0; i--) {
        resultString += string[i];
    }

    // strip punctuation, strips spaces, convert to lowercase
    string = string.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()! ]/g,"");
    resultString = resultString.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()! ]/g,"");

    return string === resultString;

};

// Do not edit below this line
module.exports = palindromes;
