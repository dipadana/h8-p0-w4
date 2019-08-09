// Mengurutkan Abjad
function urutkanAbjad(str) {
    // Membuat sebuah array penampung untuk setiap huruf, 
    // agar bisa di sort (karena sort() merupakan build in function dari array)
    var temp = [];

    // Lalu secara manual masukan semua huruf kedalam array
    for(var i = 0; i < str.length; i++){
        temp[i] = str[i];
    }

    // Lalu array tersebut di sort lalu di join,
    // lalu di return sebagai sebuah string yang utuh
    return temp.sort().join('')
}

  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'