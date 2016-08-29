function in_words(angka){
  console.log("test");
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


  //Ones and tens

  let array_of_huruf = ["sepuluh","sembilan","delapan","tujuh","enam","lima","empat","tiga","dua","satu"];
  let array_of_angka = [10,9,8,7,6,5,4,3,2,1];

let result = '';
  for(let i = 0; i < array_of_huruf.length; i++) {
    while(angka >= array_of_angka[i]) {
      result = result + array_of_huruf[i]
      angka = angka - array_of_angka[i]
    }
  }
  return result


}

// Driver code

console.log(in_words(10));
