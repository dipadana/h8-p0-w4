// Mencari Modus
function cariModus(arr) {
    // Menyiapkan semua variable penampung
    var temp = 0; // Menyimpan sementara jumlah suatu element dalam array
    var temp2 = 0;  // Menyimpan element array yang memiliki anggota terbanyak
    var max = 0; // Menyimpan jumlah nilai array yang paling besar

    for(var i = 0; i < arr.length; i++){
        // Lakukan pengecekan pada tiap-tiap komponent, seberapa sering keluar/sama pada array tersebut
        for(var j = 0; j < arr.length; j++){
            if(arr[i]==arr[j]){
                temp += 1;
            }
        }

        // Ketika suatu anggota array sudah diketahui jumlah elemennya,
        // dilakukan pembadingan terhadap nilai max, apakah lebih besar atau lebih kecil,
        // jika lebih besar, maka dia akan menjadi nilai max menggantikan nilai sebelumnya
        if(max < temp){
            temp2 = arr[i];
            max = temp
        }
        temp = 0;
        // Proses diatas terus berulang hingga menemukan max yang paling besar
    }

    // Dengan beberapa ketetuan, maka nilai pun di return
    // Jika tidak ada yang nilai array yang lebih besar dari 1/0,
    // maka di return -1
    if(max <= 1){
        return -1;
    }
    // Jika semua anggota array adalah memiliki nilai yang sama, 
    // maka di return -1
    if(max == arr.length){
        return -1
    }
    else{
        return (temp2);
    }
}

  // TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
console.log(cariModus([10, 2, 12, 12, 2, 2, 10])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5, 5, 3, 9, 8, 3, 1, 2, 3, 4, 5, 6, 7, 8, 9].sort())); // 3 
console.log(cariModus([1,345,23,1,1,1,1,1,2,2,2,2,45,45,45,45,45,45,45,45,45,45,45,45,45,45,2,2,4,4,4,
    4,4,23,23,23,23,23,23,23,23,23,23,23,23,898,675,4653,2342,123,429472974])); // 45 