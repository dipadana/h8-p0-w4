// Cari Median
function cariMedian(arr) {
    // Menentukan apakah jumlah element dari array tersebut, ganjil atau genap
    if(arr.length%2 == 0){
        // Jika genap, maka panjang elementnya akan dibagi 2, 
        // hasil perhitungan tersebut akan menghasilkan sebuah indeks array yang ditengah
        var batas = arr.length/2;
        return (arr[batas] + arr[batas-1])/2;
    }
    else{
        // Jika ganjil, maka langsung mencari indeks array yang ada ditengah
        var temp = 0;
        for(var i = 1; i <= arr.length; i++){
            temp += i;
        }
        // Lalu return nilai yang ada di indeks tengah
        return arr[(temp/arr.length)-1];
    }
}

  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 7
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5