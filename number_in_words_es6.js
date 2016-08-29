console.log("ES6 compiler is starting");
let toWords = (number) => {

  /*function in_words(angka){
  /*  let array_in_huruf = ["satu","dua","tiga","empat","lima","enam","tujuh","delapan","sembilan","sepuluh",
    "puluh","seratus","ratus","seribu","ribu","sejuta","juta"];
    let array_of_angka = [1,2,3,4,5,6,7,8,9,10,100,1000,10000,100000,1000000];
    let result = ''
    // n = 16
    for(let i = 0; i < array_in_huruf.length; i++) {
      while(angka % array_in_huruf[i] < angka) {
        result = result + array_of_angka[i]
        angka = angka - array_in_huruf[i]
      }
    }

    return result
    */

  /*
    let array_of_huruf_satuan = ["sembilan","delapan","tujuh","enam","lima","empat","tiga","dua","satu"];
    let array_of_angka_satuan = [9,8,7,6,5,4,3,2,1];

    let array_of_huruf_belas = ["sebelas","duabelas","tigabelas","empatbelas","limabelas","enambelas","tujuhbelas","delapanbelas","sembilanbelas"];
    let array_of_angka_belas = [11,12,13,14,15,16,17,18,19];

    let array_of_huruf_puluh = ["juta","ratus","puluh","ribu","ratus","puluh"];
    let array_of_angka_puluh = [1000000,100000,10000,1000,100,10];




  let result='';


  while(angka > 0){

    for(let i = 0; i < array_of_huruf_satuan.length; i++) {
      while(angka >= array_of_angka_satuan[i]) {
        result += array_of_huruf_satuan[i]
        angka -= array_of_angka_satuan[i]
      }
    }

    for(let i = 0; i < array_of_huruf_puluh.length; i++) {
      while(angka >= array_of_angka_puluh[i]) {
        result += array_of_huruf_puluh[i]
        angka -=array_of_angka_puluh[i]


      }
    }


    for(let i = 0; i < array_of_huruf_belas.length; i++) {
      while(angka >= array_of_angka_belas[i]) {
        result += array_of_huruf_belas[i]
        angka -= array_of_angka_belas[i]
      }
    }
    return result

  }
  }

  // Driver code

  console.log(in_words(5));
  console.log(in_words(7));
  console.log(in_words(9));
  console.log(in_words(4));
  console.log(in_words(13));*/


    //Validates the number input and makes it a string
    if (typeof number === 'string') {
      number = parseInt(number, 10);
    }
    if (typeof number === 'number' && !isNaN(number) && isFinite(number)) {
      number = number.toString(10);
    }
    else {
      return 'This is not a valid number';
    }

    //Creates an array with the number's digits and
    //adds the necessary amount of 0 to make it fully
    //divisible by 3
    let digits = number.split('');
    let digitsNeeded = 3 - digits.length % 3;
    if (digitsNeeded !== 3) { //prevents this : (123) ---> (000123)
      while (digitsNeeded > 0) {
        digits.unshift('0');
        digitsNeeded--;
      }
    }

    //Groups the digits in groups of three
    let digitsGroup = [];
    let numberOfGroups = digits.length / 3;
    for (let i = 0; i < numberOfGroups; i++) {
      digitsGroup[i] = digits.splice(0, 3);
    }
    //console.log(digitsGroup) //debug

    //Change the group's numerical values to text
    let digitsGroupLen = digitsGroup.length;
    let numTxt = [
      [null,'satu','dua','tiga','empat','lima','enam','tujuh','delapan','sembilan'], //hundreds
      [null, 'sepuluh', 'dua puluh', 'tiga puluh', 'empat puluh', 'lima puluh', 'enam puluh', 'tujuh puluh', 'delapan puluh', 'sembilan puluh'], //tens
      [null,'satu','dua','tiga','empat','lima','enam','tujuh','delapan','sembilan'] //ones
    ];
    let tenthsDifferent = ['sepuluh','sebelas','dua belas','tiga belas','empat belas','lima belas','enam belas','tujuh belas','delapan belas','sembilan belas']

    // j maps the groups in the digitsGroup
    // k maps the element's position in the group to the numTxt equivalent
    // k values: 0 = hundreds, 1 = tens, 2 = ones
    for (let j = 0; j < digitsGroupLen; j++) {
      for (let k = 0; k < 3; k++) {
        let currentValue = digitsGroup[j][k];
        digitsGroup[j][k] = numTxt[k][currentValue]
        if (k === 0 && currentValue !== '0') { // !==0 avoids creating a string "null hundred"
          digitsGroup[j][k] += ' ratus ';
        }
        else if (k === 1 && currentValue === '1') { //Changes the value in the tens place and erases the value in the ones place
          digitsGroup[j][k] = tenthsDifferent[digitsGroup[j][2]];
          digitsGroup[j][2] = 0; //Sets to null. Because it sets the next k to be evaluated, setting this to null doesn't work.
        }
      }
    }

    //console.log(digitsGroup) //debug

    //Adds '-' for grammar, cleans all null values, joins the group's elements into a string
    for (let l = 0; l < digitsGroupLen; l++) {
      if (digitsGroup[l][1] && digitsGroup[l][2]) {
        digitsGroup[l][1] += ' ';
      }
      digitsGroup[l].filter(function (e) {return e !== null});
      digitsGroup[l] = digitsGroup[l].join('');
    }

    //console.log(digitsGroup) //debug

    //Adds thousand, millions, billion and etc to the respective string.
    let posfix = [null,'ribu','juta','milyar','triliun','quadrillion','quintillion','sextillion'];
    if (digitsGroupLen > 1) {
      let posfixRange = posfix.splice(0, digitsGroupLen).reverse();
      for (let m = 0; m < digitsGroupLen - 1; m++) { //'-1' prevents adding a null posfix to the last group
        if(digitsGroup[m]){ // avoids 10000000 being read (one billion million)
          digitsGroup[m] += ' ' + posfixRange[m];
        }
      }
    }

    //console.log(digitsGroup) //debug

    //Joins all the string into one and returns it
    return digitsGroup.join(' ')

  };

  console.log(toWords(5))
  console.log(toWords(59))
  console.log(toWords(509))
  console.log(toWords(5090))
  console.log(toWords(50900))
  console.log(toWords(509000))
  console.log(toWords(5090000))
