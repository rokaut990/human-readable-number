module.exports = function toReadable (number) {
    var ones = new Array('', ' one', ' two', ' three', ' four', ' five', ' six', ' seven', ' eight', ' nine',);
    var teens = new Array('ten', ' eleven', ' twelve', ' thirteen', ' fourteen', ' fifteen', ' sixteen', ' seventeen', ' eighteen', ' nineteen')
    var tens = new Array('', '', ' twenty', ' thirty', ' forty', ' fifty', ' sixty', ' seventy', ' eighty', ' ninety');
    var hundred = ' hundred';
    var output = '';
    var numberString = number.toString();

    if (number == 0) {
        return 0;
    }
    
    if (number < 10) {
        output = ones[number];
        return output.trim();  
    }
    let i = number % 100;
    if (i > 9 && i < 20){
        output = ones[parseInt(numberString.charAt(0))] + hundred;
        output += teens[parseInt(numberString.charAt(2))];
        return output.trim();
    }
    
    if (number > 9 && number < 20) {
        output = teens[number];
        return output.trim();
    }

    
    if (numberString.length == 3) {
        output = ones[parseInt(numberString.charAt(0))] + hundred;
        output += tens[parseInt(numberString.charAt(1))];
        output += ones[parseInt(numberString.charAt(2))];
        return output.trim();
    }

    output += tens[parseInt(numberString.charAt(0))];
    output += ones[parseInt(numberString.charAt(1))];

    return output.trim();
}   
