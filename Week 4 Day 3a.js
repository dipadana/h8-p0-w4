// Digit Perkalian Minimum
function digitPerkalianMinimum(num) {
    var temp = [];
    var temp2 = '';
    var j = 0;

    // Mencari semua faktor pengali dari num, 
    // lalu dimasukan kedalam sebuah array tampungan
    for(var i = 1; i <= num; i++){
        if(num%i == 0){
            temp[j] = i;
            j++;
        }
    }console.log(temp);

    // Jika banyak array tersebut adalah genap, 
    // maka dua angka ditengah yang akan menjadi digit terkecil
    if(temp.length%2 == 0){
        temp2 += temp[(temp.length/2)-1];
        temp2 += temp[temp.length/2]
        return temp2.length;
    }

    // Jika banyak array nya adalah ganjil, otomatis, dia adalah bilangan,
    // pangkat 2 dari angka yang ditengah, maka langsung saja return 2
    else{
        return 2;
    }
}

  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2