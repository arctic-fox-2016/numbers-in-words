let array = [];
let convertAja = function (digitAngka){
  switch (digitAngka) {
    case 1: return 'satu'
    break;
    case 2: return 'dua'
    break;
    case 3: return 'tiga'
    break;
    case 4: return 'empat'
    break;
    case 5: return 'lima'
    break;
    case 6: return 'enam'
    break;
    case 7: return 'tujuh'
    break;
    case 8: return 'delapan'
    break;
    case 9: return 'sembilan'
    break;
    case 0: return ''
    break;
    default: console.log("eror");

  }
}
let satuanAngka = ["","puluh","ratus","ribu","puluhribu","ratusribu","juta"]
let words = ""
function in_words(angka){
    let reminder = angka;
    for (i = 6; i >=0; i--){
      array[i] = Math.floor(reminder/Math.pow(10,i));
      reminder = reminder%Math.pow(10,i);
      if (array[i]===0){
        null
      }else{
        words = words +convertAja(array[i])+ " "+ satuanAngka[i] + " ";
      }

    }
    return words
//e here
}
//jutaan
//ratusan tibu
//puluhan ribu
//ribuan
//ratusan
//puluhan
//satuan
// Driver code
console.log(in_words(1356));
