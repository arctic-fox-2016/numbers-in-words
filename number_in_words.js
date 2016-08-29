function in_words(angka){
  // Your code here
  let sisa = angka;
  let puluh = 0;
  let ratusan = 0;
  let ribuan = 0;
  let hasil = "";
  let depan = "";

  sisa = angka%10;
  puluh = Math.floor(angka/10);
  ratusan = Math.floor(angka/100);3179
  ribuan = Math.floor(angka/1000);

  if(ribuan>0)
  {
    hasil+=cetak(ribuan);
    hasil+=' ribu';
    ratusan = ratusan%100;
    ratusan = ratusan%10;

  }

  if(ratusan>0)
  {
    hasil+=cetak(ratusan);
    hasil+=' ratus';
    puluh = puluh%10;

  }
  if(puluh==1){
    hasil+=cetak(sisa)
    hasil+=' belas';
    return hasil;
  }
  if(puluh>0)hasil+=cetak(puluh);
  if(puluh>1&&puluh<10)hasil +=' puluh';
  hasil+=cetak(sisa);

  hasil = hasil.replace("satu ratus", "seratus");
  hasil = hasil.replace("satu ribu", "seribu");


return hasil;

}

function cetak(sisa)
{
  if(sisa==0) return '';
  if(sisa==1) return ' satu';
  if(sisa==2) return ' dua';
  if(sisa==3) return ' tiga';
  if(sisa==4) return ' empat';
  if(sisa==5) return ' lima';
  if(sisa==6) return ' enam';
  if(sisa==7) return ' tujuh';
  if(sisa==8) return ' delapan';
  if(sisa==9) return ' sembilan';
  if(sisa==10) return ' sepuluh';
}

// Driver code
console.log(in_words(9999));
console.log(in_words(121));
console.log(in_words(201));
console.log(in_words(7));
console.log(in_words(99));
console.log(in_words(37));
