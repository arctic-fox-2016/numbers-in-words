function in_words(angka){
  // Your code here
  var textOutput = "";
  var millions = Math.floor(angka/1000000);
  var thousands = Math.floor((angka % 1000000)/1000);
  var ones = Math.floor(angka % 1000);

  if (angka == 0) {return "nol";}

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


function numberOneToEleven(angka){
  var hurufSatuan = ["","satu ","dua ","tiga ","empat ","lima ","enam ","tujuh ",
"delapan ","sembilan ","sepuluh ","sebelas "];
  return hurufSatuan[angka];
}


function calculateHundreds(angka){
  var textOutput = "";
  var hundreds = Math.floor(angka/100);
  var ones = Math.floor(angka%100);

//    var hurufBuntut = ["","belas","puluh","ratus","ribu","juta"];

    if (hundreds > 1) { textOutput += numberOneToEleven(hundreds) + "ratus ";
  } else if (hundreds == 1) { textOutput += "seratus ";}

    if (ones > 19) {
      textOutput += numberOneToEleven(Math.floor(ones/10)) + "puluh ";
      textOutput += numberOneToEleven(Math.floor(ones % 10));
    } else if (ones > 11) {
      textOutput += numberOneToEleven(Math.floor(ones % 10)) + "belas ";
    } else {
      textOutput += numberOneToEleven(ones);
    }
    return textOutput;
}


// Driver code
// 
// console.log(in_words(1000000));
// console.log(in_words(4000000));
console.log(in_words(849372456));
//
// console.log(in_words(100));
// console.log(in_words(249));
//
// console.log(in_words(79));
// console.log(in_words(0));
// console.log(in_words(6));
// console.log(in_words(10));
// console.log(in_words(11));
// console.log(in_words(15));
// console.log(in_words(20));
