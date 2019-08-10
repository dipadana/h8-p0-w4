// Toko X
function countProfit(arr) {
    // Deklarasikan data yang akan digunakan dalam proses perhitungan,
    // Data barang bisa disimpan diluar fungsi atau didalam fungsi.
    let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                        ['Baju Zoro', 500000, 2],
                        ['Sweater Uniklooh', 175000, 1],
                        ['Celana Boxer', 175000, 1]
                    ];

    // Mendeklarasikan beberapa variable yang dibutuhkan
    var amountTemp = []; // Variable yang digunakan untuk menampung jumlah barang tersedia
    var shoppersName = []; // Variable yang digunakan untuk menampung tiap-tiap nama pembeli yang membeli barang
    var profit = []; // Variable yang menampung jumlah uang yang didapatkan dari barang tersebut
    for(var y = 0; y < listBarang.length; y++){
        amountTemp.push(listBarang[y][2]);
        shoppersName.push([]);
        profit.push(0);
    }
    
    // Dibagian ini dilakukan perhitungan pengelompokkan barang, nama pembeli, dan total profit yang didapat
    for(var i = 0; i < arr.length; i++){
        for(var j = 0; j < listBarang.length; j++){
            // Dilakukan pengecekan, apakah barang yang ingin dibeli oleh pembeli, tersedia dijual oleh toko
            if(arr[i].product == listBarang[j][0]){
                // Jika barang tersedia untuk dijual, maka dicek lagi, apakah masih ada stock atau tidak
                if(amountTemp[j] >= arr[i].amount){
                    // Jika masih ada stock, value stock yang lama dikurang
                    amountTemp[j] -= arr[i].amount;
                    // Lalu nama pembeli dimasukkan kedaftar pembeli
                    shoppersName[j].push(arr[i].name);
                    // Lalu profit dikalkulasi dan diupdate jika ada pembeli bertambah
                    profit[j] = listBarang[j][1]*(listBarang[j][2]-amountTemp[j]);
                }
            }
        }
    }

    // Dibagian ini dilakukan pemprosesan pembuatan object,
    // untuk direturn sebagai output
    var objTemp = [];
    // Jika array inputan kosong, maka yang direnturn adalah array kosong
    if(!arr[0]){
        return objTemp;
    }
    for(i = 0; i < listBarang.length; i++){
        var obj = {
            merk : listBarang[i][0],
            shoopers : shoppersName[i],
            leftOver : amountTemp[i],
            totalProfit : profit[i]
        }
        objTemp[i] = obj;
    }
    return objTemp;
}



  // TEST CASES
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
  //[ { product: 'Sepatu Stacattu',
  //   shoppers: [ 'Windi', 'Vanessa' ],
  //   leftOver: 5,
  //   totalProfit: 7500000 },
  // { product: 'Baju Zoro',
  //   shoppers: [],
  //   leftOver: 2,
  //   totalProfit: 0 },
  // { product: 'Sweater Uniklooh',
  //   shoppers: [],
  //   leftOver: 1,
  //   totalProfit: 0 } ]

console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
  // [ { product: 'Sepatu Stacattu',
  //     shoppers: [ 'Windi' ],
  //     leftOver: 2,
  //     totalProfit: 12000000 },
  //   { product: 'Baju Zoro',
  //     shoppers: [ 'Devi', 'Lisa' ],
  //     leftOver: 0,
  //     totalProfit: 1000000 },
  //   { product: 'Sweater Uniklooh',
  //     shoppers: [ 'Rani' ],
  //     leftOver: 0,
  //     totalProfit: 175000 } ]

console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
  // [ { product: 'Sepatu Stacattu',
  //     shoppers: [],
  //     leftOver: 10,
  //     totalProfit: 0 },
  //   { product: 'Baju Zoro',
  //     shoppers: [],
  //     leftOver: 2,
  //     totalProfit: 0 },
  //   { product: 'Sweater Uniklooh',
  //     shoppers: [],
  //     leftOver: 1,
  //     totalProfit: 0 } ]

  console.log(countProfit([])); //[]
