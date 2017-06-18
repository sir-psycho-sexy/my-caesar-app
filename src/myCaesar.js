module.exports = {
    myCipherFunction: function(toEncode){
        const letters = /^[a-zA-Z]/;
        let caesarShiftString = '';
        let string = toEncode.message;
        let number = toEncode.shiftBy;
        
        for( let i = 0; i<string.length; i++){

            if(!letters.test(string[i])){
                caesarShiftString += string[i];
            } else{
                if(string[i] === string[i].toUpperCase()){
                    var checkIfUpper = true;
                } else  {
                    var checkIfUpper = false;
                }

                let letterToNumber = string[i].toUpperCase().charCodeAt() -64;
                letterToNumber += number;
                if(letterToNumber > 26){
                    letterToNumber %= 26;
                }

                if(checkIfUpper) {
                    caesarShiftString += String.fromCharCode(64 + letterToNumber);
                } else{
                    caesarShiftString += String.fromCharCode(96 + letterToNumber);
                }
            }

        }
        return caesarShiftString;
    },

    myHasherFunction: function(key){
        let sum = 0;
        for( let i = 0; i<key.length; i++){
            sum += key[i].charCodeAt();
        }
        return ((sum %= 25) + 1) // véletlenül se 1 legyen az eltolás
    }
};