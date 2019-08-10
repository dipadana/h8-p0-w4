// Tukar Ukuran
function tukarBesarKecil(kalimat) {
    // Membuat sebuah string kosong penampung
    var temp = '';

    // Dilakukan pengecekan pada semua huruf,
    // jika huruf tersebut besar, maka dia dikecilkan,
    // dan jika huruf kecil, maka di besarkan,
    // semua hasil perubahan dimasukkan kedalam string penampung tadi.
    for(var i = 0; i < kalimat.length; i++){
        if(kalimat[i] == kalimat[i].toUpperCase()){
            temp += kalimat[i].toLowerCase()
        }
        else if(kalimat[i] == kalimat[i].toLowerCase()){
            temp += kalimat[i].toUpperCase()
        }
    }
    
    // Setelah semua huruf dikonversi dan dimassukan kedalam tampungan,
    // maka string tadi langsung direturn
    return temp;
}

  // TEST CASES
  console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
  console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
  console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
  console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
  console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"

