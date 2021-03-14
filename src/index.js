module.exports = function toReadable(number) {
    var ones = new Array(
        "",
        " one",
        " two",
        " three",
        " four",
        " five",
        " six",
        " seven",
        " eight",
        " nine"
    );
    var teens = new Array(
        " ten",
        " eleven",
        " twelve",
        " thirteen",
        " fourteen",
        " fifteen",
        " sixteen",
        " seventeen",
        " eighteen",
        " nineteen"
    );
    var tens = new Array(
        "",
        "ten",
        " twenty",
        " thirty",
        " forty",
        " fifty",
        " sixty",
        " seventy",
        " eighty",
        " ninety"
    );
    var hundred = " hundred";
    var output = "";
    var numberString = number.toString();

    if (!number) {
        return "zero";
    }

    if (number < 10) {
        return ones[number].trim();
    }
    if (number === 10) return "ten";
    if (number > 9 && number < 20) {
        output += teens[numberString[1]];
        return output.trim();
    }

    if (numberString.length == 3) {
        let superNumber = number % 100;
        if (superNumber > 9 && superNumber < 20) {
            output = ones[numberString[0]] + hundred;
            output = ones[numberString[0]] + hundred;
            output += teens[numberString[2]];
            return output.trim();
        }
        output = ones[numberString[0]] + hundred;
        output += tens[numberString[1]];
        output += ones[numberString[2]];
        return output.trim();
    }

    output += tens[numberString.charAt(0)];
    output += ones[numberString.charAt(1)];

    return output.trim();
};
