var generateBtn = document.querySelector("#generate")
function generatePassword() {
    //I DEFINED HOW MANY OF THESE CRITERIAS I WILL USE, IF CHOSEN .
    count_of_numeric = 2;
    count_of_upper = 2;
    count_of_special = 2;
    count_of_lower = 2;

    //I DEFINED THE CHARS FOR THE CRITERIAS
    var lowers = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var uppers = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    var specials = ["!", "#", "^", "$", "%", "&", "'", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "["];

    var password = "";
    var passwordLength = window.prompt("How many characters would you like your password to contain ?")
    // I choose a length of at least 8 characters and no more than 128 characters
    if (passwordLength < 8 || passwordLength > 128) {
        alert("Password must be min. 8 and max. 128 character");
        return;
    }


    var numericChoice = window.confirm("Click OK to confirm including numeric characters.")
    var upperCase = window.confirm("Click OK to confirm including uppercase characters.")
    var lowerCase = window.confirm("Click OK to confirm including lowercase characters.")
    var useSpecialChars = window.confirm("Click OK to confirm including special characters.")

    if (numericChoice === false &&
        upperCase === false &&
        lowerCase === false &&
        useSpecialChars === false) {
        alert("At least one character type should be selected. Please try again.");
        return;
    }

    //NUMERICS - length-> count_of_numeric
    var numeric_chars = "";
    if (numericChoice === true) {
        for (i = 0; i < count_of_numeric; i++) {
            random_index = Math.floor(Math.random() * (numbers.length - 1)) + 0;
            numeric_chars += numbers[random_index];
        }

        passwordLength -= count_of_numeric;
        password += numeric_chars;
    }

    //UPPERCASE - length-> count_of_upper
    var upper_chars = "";
    if (upperCase === true) {
        for (i = 0; i < count_of_upper; i++) {
            random_index = Math.floor(Math.random() * (uppers.length - 1)) + 0;
            upper_chars += uppers[random_index];
        }

        passwordLength -= count_of_upper;
        password += upper_chars;
    }

    //SPECIAL CHARACTERS - length-> count_of_special
    var special_chars = "";
    if (useSpecialChars === true) {
        for (i = 0; i < count_of_special; i++) {
            random_index = Math.floor(Math.random() * (specials.length - 1)) + 0;
            special_chars += specials[random_index];
        }

        passwordLength -= count_of_special;
        password += special_chars;
    }

    //LOWERCASE - rest of the passwords length
    var lower_chars = "";
    if (lowerCase === true) {
        for (i = 0; i < count_of_lower; i++) {
            random_index = Math.floor(Math.random() * (lowers.length - 1)) + 0;
            lower_chars += lowers[random_index];
        }

        passwordLength -= count_of_lower;
        password += lower_chars;
    }

    //REST OF THE PASSWORD LENGTH IF ONE OF THE CHOICES WAS FALSE
    if (passwordLength != 0) {
        var rest_chars = "";
        for (i = 0; i < passwordLength; i++) {

            if (lowerCase === true) {
                random_index = Math.floor(Math.random() * (lowers.length - 1)) + 0;
                rest_chars += lowers[random_index];
            } else if (upperCase === true) {
                random_index = Math.floor(Math.random() * (uppers.length - 1)) + 0;
                rest_chars += uppers[random_index];
            } else if (numericChoice === true) {
                random_index = Math.floor(Math.random() * (numbers.length - 1)) + 0;
                rest_chars += numbers[random_index];
            } else if (useSpecialChars === true) {
                random_index = Math.floor(Math.random() * (specials.length - 1)) + 0;
                rest_chars += specials[random_index];
            }
        }
        password += rest_chars;
    }

    return password;
}


function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    if (password != undefined) {
        passwordText.value = password;
    }

}

generateBtn.addEventListener("click", writePassword);
