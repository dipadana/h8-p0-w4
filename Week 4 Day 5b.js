// Naik Angkot
function naikAngkot(arr) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    
    // Pertama dibuat sebuah variable penampung untuk 
    // menyimpan value data pembayaran dan jumlah transaksi yang terjadi
    var bayar = [];

    // Lalu dilakukan perhitungan untuk menghitung rute dan dikali dengan 2000
    // untuk menghitungkan jarak rute, dilakukan dengan mencari indekOf() pada rute,
    // lalu indeks terbesar akan dikurangi dengan indeks terkecil untuk mendapatkan selisih rute,
    // yang selanjutnya akan digunakan dengan perhitungan
    for(var i = 0; i < arr.length; i++){
        bayar.push(2000*(rute.indexOf(arr[i][2])-rute.indexOf(arr[i][1])));  
    }

    // Setelah didapatkan semua data transaksi, 
    // dilanjutkan dengan pembuatan object,
    // semua object yang sudah digenerate akan ditampung kedalam array dataAngkot
    var dataAngkot = [];
    for(i = 0; i < arr.length; i++){
        var obj = {
            penumpang : arr[i][0],
            naikDari : arr[i][1],
            tujuan: arr[i][2],
            bayar : bayar[i]
        }
        dataAngkot.push(obj);
    }
    
    // Lalu direnturn dataAngkot sebagai outputnya
    return dataAngkot;
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]