function in_words(angka){
  // Your code here
  var w= {
    '1': "satu ", '2':"dua ", '3':"tiga ", '4':"empat ", '5':"lima ", '6':"enam ", '7':"tujuh ",
    '8':"delapan ", '9':"sembilan ", '0':""
  }

  // var w= ["se", "dua", "tiga", "empat", "lima", "enam", "tujuh", "delapan", "sembilan"]

  var j= ['','puluh ','ratus ','ribu ','puluh ribu ','ratus ribu ', 'juta ','puluh juta ','ratus juta ', 'miliar ','puluh miliar ','ratus miliar ', 'trilliun ','puluh triliun ','ratus triliun '];
  var nilai=""
  var a= ""+angka;
  var semuanol = true;
  var terbilang="";
  a = a.split("");
  for(var i = a.length -1 ; i >= 0  ; i-- ){
    if (a.length-i===1){

        if(a[i]==='0'){
        terbilang = ''
      }
      else {
        terbilang = w[a[i]]
      }
    } else if (a.length-i%3===2){
      if (a[i]==='1'){
        if(a[i+1] === '0'){
          terbilang = "sepuluh"
        } else if(a[i+1] === '1'){
        terbilang = "sebelas"
        } else{
          terbilang = terbilang+"belas"
        }
      }
      else {
        if(a[i] !== '0'){
        terbilang = w[a[i]] + j[a.length-i-1] + terbilang  
        }
      }
    } else if (a.length-i===3){
      if(a[i] !== '0'){
      nilai = j[a.length-i-1]
      terbilang = w[a[i]] + nilai + terbilang
      }
    }
    else if(a[i] !== '0'){
      if(a.length-i >= 4 && a.length-i <= 6){
        if (terbilang.indexOf("ribu") >= 0){
          nilai = j[a.length-i-1].split(" ")[0]  
        } else{
          nilai = j[a.length-i-1]
        }
      }else if(a.length-i >= 7 && a.length-i <= 9){
        if (terbilang.indexOf("juta") >= 0){
          nilai = j[a.length-i-1].split(" ")[0]  
        } else{
          nilai = j[a.length-i-1]
        }
        
      }else if(a.length-i >= 10 && a.length-i <= 12){
        if (terbilang.indexOf("juta") >= 0){
          nilai = j[a.length-i-1].split(" ")[0]  
        } else{
          nilai = j[a.length-i-1]
        }
      } else if(a.length-i >= 13 && a.length-i <= 15){
        if (terbilang.indexOf("miliar") >= 0){
          nilai = j[a.length-i-1].split(" ")[0]  
        } else{
          nilai = j[a.length-i-1]
        }
      } else if(a.length-i >= 16 && a.length-i <= 18){
        
        if (terbilang.indexOf("triliun") >= 0){
          nilai = j[a.length-i-1].split(" ")[0]  
        } else{
          nilai = j[a.length-i-1]
        }
      }
        terbilang = w[a[i]] + nilai + terbilang
  }
  }
  return terbilang
}

// Driver code
console.log(in_words(100000));
