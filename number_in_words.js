

function in_words(angka){
var jutaan = ['','ribu','juta'];
var satuan = ['','satu','dua','tiga','empat', 'lima','enam','tujuh','delapan','sembilan'];
var belasan = ['sepuluh','sebelas','duabelas','tigabelas', 'empatbelas','limabelas','enambelas', 'tujuhbelas','delapanbelas','sembilanbelas'];
var puluhan = ['duapuluh','tigapuluh','empatpuluh','limapuluh', 'enampuluh','tujuhpuluh','delapanpuluh','sembilanpuluh'];

function test(angka) {

  var depanAngka ="";
  var bilanganHuruf ="";

  for(var i=0;i<puluhanangka.length;i++){
    while(value >= puluhanangka[i]) {
      value = Math.floor(angka/puluhanangka[i]);
      bilanganHuruf += puluhanhuruf[i];
      console.log(value);
       
      }
    }

    return totalangka = belashuruf[i+1] + bilanganHuruf;
  }

// Driver code
console.log(in_words(1000000));
