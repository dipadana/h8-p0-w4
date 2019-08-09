// Angka Prima
// Dengan menggunakan looping, kita bisa membagi terus menerus sebanyak bilangan yang akan dicek
// Jika hasil baginya adalah 0 selain dari hasil bagi dengan dirinya sendiri, berarti bilangan tersebut bukan bilangan prima
function angkaPrima2(num){
    for(var i = 2; i < num; i++){
        if(num % i === 0) return false;
    }
    // Jika kondisi diatas sudha selesai di cek, dan menemukan bilangan prima, 
    // Selanjutnya melakukan pengecekan, apakah bilangan tersebut bilangan negatif atau dibawah satu,
    // jika tidak, maka dia adalah bilangan prima
    return num > 1;
}

  // TEST CASES
  console.log(angkaPrima2(3)); // true
  console.log(angkaPrima2(7)); // true
  console.log(angkaPrima2(6)); // false
  console.log(angkaPrima2(23)); // true
  console.log(angkaPrima2(33)); // false