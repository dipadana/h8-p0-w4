// Ubah Huruf
function ubahHuruf(kata) {
    // Membuat variable tampungan berupa string kosong
    var temp = '';

    // Membuat dua buah variabel abjad, kecil dan kapital,
    // kedua-duanya ditambahkan huruf a/A
    var abjad = 'abcdefghijklmnopqrstuvwxyza';
    var ABJAD = 'ABCDEFGHIJKLMNOPQRSTUVWXYZA';
    
    // Dilakukan pengecekan terhadap semua huruf,
    // dicek semua huruf yang masuk apakah sama dengan abjad/ABJAD,
    // pengecekan dilakukan dengan menggunakan indekOf(), untuk mengetahui letak huruf yang akan dicek
    // Jika hurufnya sama, maka kedalam temp akan dimasukkan huruf setelahnya 
    for(var i = 0; i < kata.length; i++){
        if(kata[i] == abjad[abjad.indexOf(kata[i])]){
            // lalu hasilnya dimasukkan kedalam tampungan
            temp += abjad[abjad.indexOf(kata[i])+1];
        }
        else if(kata[i] == ABJAD[ABJAD.indexOf(kata[i])]){
            temp += ABJAD[ABJAD.indexOf(kata[i])+1];
        }
        else{
            temp += kata[i];
        }
    }

    // semua sudah dijadikan satu kata, maka langsung di return
    return temp;
}

  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu