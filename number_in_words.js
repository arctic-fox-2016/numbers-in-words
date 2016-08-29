
var ribuan = ['','ribu','juta', 'milyar','triliun'];
var satuan = ['nol','satu','dua','tiga','empat', 'lima','enam','tujuh','delapan','sembilan'];
var belasan = ['sepuluh','sebelas','dua belas','tiga belas', 'empat belas','lima belas','enam belas', 'tujuh belas','delapan belas','sembilan belas'];
var puluhan = ['dua puluh','tiga puluh','empat puluh','lima puluh', 'enam puluh','tujuh puluh','delapan puluh','sembilan puluh'];

function in_words(x) {
  x = x.toString();
  x = x.replace(/[\, ]/g,'');
  if (x != parseFloat(x)) return 'bukan angka';
  var y = x.indexOf('.');
  if (y == -1)
  y = x.length;
  if (y > 15)
  return 'terlalu besar';
  var n = x.split('');
  var str = '';
  var sk = 0;
  for (var i=0;   i < y;  i++) {
    if ((y-i)%3==2) {
      if (n[i] == '1') {
        str += belasan[Number(n[i+1])] + ' ';
        i++;
        sk=1;
      } else if (n[i]!=0) {
        str += puluhan[n[i]-2] + ' ';
        sk=1;
      }
    } else if (n[i]!=0) { // 0235
      str += satuan[n[i]] +' ';
      if ((y-i)%3==0) str += 'ratus ';
      sk=1;
    }
    if ((y-i)%3==1) {
      if (sk)
      str += ribuan[(y-i-1)/3] + ' ';
      sk=0;
    }
  }

  if (y != x.length) {
    var z = x.length;
    str += 'koma ';
    for (var i=y+1; i<z; i++)
    str += satuan[n[i]] +' ';
  }
  return str.replace(/\x+/g,' ');
}
ubahKata(5432);// Masukkan angka


// kode perintah
console.log(in_words(1000000));
