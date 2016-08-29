function in_words(number){
    // Initialize variables
    var textOutput = "";
    var millions = Math.floor(number / 1000000);
    var thousands = Math.floor((number % 1000000) / 1000);
    var ones = Math.floor(number % 1000);

    if (number == 0) {
        return "nol";
    }

    if (millions > 0) {
        textOutput += calculateHundreds(millions) + "juta " ;
    }

    if (thousands > 0) {
        textOutput += calculateHundreds(thousands) + "ribu " ;
    }

    if (ones > 0) {
        textOutput += calculateHundreds(ones);
    }

    return textOutput;
}

function calculateHundreds(number){
    // Initialize variables
    var textOutput = "";
    var onesTextArray = ["","satu ","dua ","tiga ","empat ","lima ","enam ","tujuh ", "delapan ","sembilan ","sepuluh ","sebelas "];
    var hundreds = Math.floor(number / 100);
    var ones = Math.floor(number % 100);

    if (hundreds > 1) {
        textOutput += onesTextArray[hundreds] + "ratus ";
    } else if (hundreds == 1) {
        textOutput += "seratus ";}

    if (ones > 19) {
        textOutput += onesTextArray[Math.floor(ones / 10)] + "puluh ";
        textOutput += onesTextArray[Math.floor(ones % 10)];
    } else if (ones > 11) {
        textOutput += onesTextArray[Math.floor(ones % 10)] + "belas ";
    } else if (ones > 0) {
        textOutput += onesTextArray[ones];
    }
    
    return textOutput;
}

// Driver code
console.log(in_words(1000000));
console.log(in_words(849372456));
