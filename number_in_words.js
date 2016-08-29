function in_words(angka){
  // Your code here
  let bilangan = {
    0:"", 1:"satu", 2:"dua", 3:"tiga", 4:"empat", 5:"lima", 6:"enam", 7:"tujuh", 8:"delapan", 9:"sembilan", 10:"sepuluh",11:"sebelas",12:"dua belas",13:"tiga belas",14:"empat belas",
    15:"lima belas", 16:"enam belas", 17:"tujuh belas", 18:"delapan belas", 19:"sembilan belas", 20:"dua puluh", 30:"tiga puluh", 40:"empat puluh", 50:"lima puluh", 60:"enam puluh", 70:"tujuh puluh", 80:"delapan puluh",90:"sembilan puluh", 100:"seratus",
     1000:"seribu", 10000:"sepuluh ribu", 100000:"seratus ribu", 1000000:"satu juta"

  };

    if(angka <= 20){
      return bilangan[angka];
    }

    else if(20 < angka && angka < 100){
      let puluhan = Math.floor(angka / 10) * 10;
      let satuan = angka % 10;
      return bilangan[puluhan] + " " + bilangan[satuan];
    }

    else{
      let ratusan = Math.floor(angka / 100) * 100;
      if(angka - ratusan <= 20){
        return bilangan[(ratusan/100)] + " ratus " + bilangan[(angka-ratusan)];
      }
      else{
        let puluhan = (Math.floor((angka - ratusan) / 10)) * 10;
        let satuan = (angka - ratusan) % 10;
        return bilangan[(ratusan/100)] + " ratus " + bilangan[puluhan] + " " + bilangan[satuan ];
      }
    };
}

// Driver code
console.log(in_words(999));
