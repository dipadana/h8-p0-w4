// Faktor Persekutuan Terbesar
function fpb(num1, num2) {
    // Membuat empat 4 array penampung untuk perhitunggan
    var temp1 = []; // Untuk menampung angka pembagi num1 yang sisa hasil baginya 0
    var temp2 = []; // Untuk menampung angka pembagi num2 yang sisa hasil baginya 0
    var temp3 = []; // Untuk penampung gabungan temp1 dan temp2
    var temp4 = []; // Untuk menampung hasil final
    var j = 0; //Merupakan counter dari array penampung

    // Mencari semua angka yang habis membagi 0 angka num1, lalu ditampung
    for(var i = 1; i <= num1; i++){
        if(num1%i == 0){
            temp1[j] = i;
            j++;
        }
    }

    j = 0;
    
    // Mencari semua angka yang habis membagi 0 angka num2, lalu ditampung
    for(var i = 1; i <= num2; i++){
        if(num2%i == 0){
            temp2[j] = i;
            j++;
        }
    }

    // Mengabungkan kedua angka hasil bagi tadi, 
    // kedalam satu array, lalu disort agar mudah untuk mencari FPB nya
    temp3 = temp1.concat(temp2);
    temp3.sort(function(value1, value2){return value1-value2})
    
    j = 0;

    // Setelah didapat array di sort, lalu dicari FPB nya
    // jika muncul dua angka yang paling besar, maka itu adalah FPB nya
    for(i = 0; i < temp3.length-1; i++){
        if(temp3[i] == temp3[1+i]){
            temp4[j] = temp3[i];
            j++; 
        }
    }
    return (temp4[temp4.length-1]);
}


  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1


  //Refrence : https://id.wikipedia.org/wiki/Faktor_persekutuan_terbesar