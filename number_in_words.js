let satuanhuruf = ["satu","dua","tiga","empat","lima","enam","tujuh","delapan","sembilan"];
let satuanangka = [1,2,3,4,5,6,7,8,9];

let puluhanhuruf = ["ribu","ratus","puluh"];
let puluhanangka = [1000,100,10];

let belashuruf = ["sebelas","duabelas","tigabelas","empatbelas","limabelas","enambelas","tujuhbelas","delapanbelas","sembilanbelas"];
let belasangka = [11,12,13,14,15,16,17,18,19];


function test(value) {

  var depanAngka ="";
  var bilanganHuruf ="";

  for(var i=0;i<puluhanangka.length;i++){
    while(value >= puluhanangka[i]) {
      value = Math.floor(value/puluhanangka[i]);
      bilanganHuruf += puluhanhuruf[i];
      console.log(value);
        //
        // for(var i=0;i<satuanhuruf.length;i++)
        // {
        //     while (value==satuanangka[i]){
        //       depanAngka += satuanangka[i];
        //       console.log(depanAngka);
        //     }
        // }


      }
    }

    return totalangka = belashuruf[i+1] + bilanganHuruf;
  }



// Driver code
console.log(test(300));
