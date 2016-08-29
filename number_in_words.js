function in_words(angka){
  // Your code here
  var w= {
    '1': "satu", '2':"dua", '3':"tiga", '4':"empat", '5':"lima", '6':"enam", '7':"tujuh",
    '8':"delapan", '9':"sembilan", '0':""
  }

  // var w= ["se", "dua", "tiga", "empat", "lima", "enam", "tujuh", "delapan", "sembilan"]

  var j= ['','puluh','ratus','ribu', 'juta', 'miliar', 'trilliun'];
  var tanda=0
  var nilai=""
  var a= ""+angka;
  var semuanol = true;
  var terbilang="";
  a = a.split("");
  for(var i = a.length -1 ; i >= 0  ; i-- ){
    if (a.length-i===1){

        if(a[i-1]==='1'){
        terbilang = w[a[i]]+'belas'
      }
      else {
        terbilang = w[a[i]]
      }
    } else if (a.length-i===2){
      if (a[i]==='1'){
        terbilang += ""
      }
      else {
        terbilang = w[a[i]] + j[a.length-i-1] + terbilang

      }
    } else {
      if(a.length-i === 4){
        nilai=j[3]
      }else if (a.length === 7){
        nilai=j[4]
      }else if (a.length === 10) {
        nilai=j[5]
      }else if (a.length === 13) {
        nilai=j[6]
      }else {
        if (tanda < 3){
        nilai=j[tanda]
      }else{
        nilai=j[tanda%3]
      }
      }
      if (a[i] ==="0") {
        terbilang = ""
      } else {
    terbilang = w[a[i]] + nilai + terbilang
  }
  }
  tanda++
  }
  return terbilang
}

// Driver code
console.log(in_words(1000000));
