console.log("ES6 compiler is starting");
let toWords = n => {
  // Your code here
  let satuan_text = ["satu", "dua", "tiga", "empat", "lima", "enam", "tujuh", "delapan", "sembilan"];
  let satuan_number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let belasan_text = ["sebelas", "dua belas", "tiga belas", "empat belas", "lima belas", "enam belas", "tujuh belas", "delapan belas", "sembilan belas"];
  let belasan_number = [11, 12, 13, 14, 15, 16, 17, 18, 19];
  let puluh_text = ["juta", "ratus", "puluh", "ribu", "ratus", "puluh"];
  let puluh_number = [1000000, 100000, 10000, 1000, 100, 10];
  let temp_string_satuan = "";
  let temp_string_puluh = "";
  let temp_number = n;
  let string = "";

  while(temp_number > 0){
    if(temp_number > 10 && temp_number < 20){
      for(var idy = 0; idy < belasan_number.length; idy++){
        if(temp_number == belasan_number[idy]){
          string = belasan_text[idy];
          break;
        }
      }
      break;
    }

    temp_string_satuan = temp_string_puluh = "";
    var current_number_puluh;
    var current_number_satuan = temp_number;
    for(var idx = 0; idx < puluh_number.length; idx++){
      if(temp_number >= puluh_number[idx]){
        temp_string_puluh = puluh_text[idx];
        current_number_puluh = puluh_number[idx];
        current_number_satuan = Math.floor(temp_number / current_number_puluh);
        break;
      }
    }

    for(var idy = 0; idy < satuan_number.length; idy++){
      if(current_number_satuan == satuan_number[idy]){
        temp_string_satuan = satuan_text[idy];
        break;
      }
    }

    if(current_number_satuan == 0) string += "se" + temp_string_puluh + " ";
    else string += temp_string_satuan + " " + temp_string_puluh + " ";
    temp_number -= (current_number_satuan * current_number_puluh);
  }
  return string;
}

// Driver code
for(var idx = 0; idx < 2; idx++){
  var random_number = Math.floor(Math.random() * 20) + 1;

  console.log("\n");
  console.log("Example number : " + random_number);
  console.log(random_number + " : " + toWords(random_number));
  console.log("====================");
}
