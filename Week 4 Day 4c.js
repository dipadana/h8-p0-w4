// Toko X
function countProfit(arr) {
    // Deklarasikan data yang akan digunakan dalam proses perhitungan,
    // Data barang bisa disimpan diluar fungsi atau didalam fungsi.
    let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                        ['Baju Zoro', 500000, 2],
                        ['Sweater Uniklooh', 175000, 1]
                    ];

    // Mendeklarasikan beberapa variable yang dibutuhkan
    var amountTemp = [listBarang[0][2],listBarang[1][2],listBarang[2][2]]; // Variable yang digunakan untuk menampung jumlah barang tersedia
    var shoppersName = [[],[],[]]; // Variable yang digunakan untuk menampung tiap-tiap nama pembeli yang membeli barang
    var profit = [0,0,0]; // Variable yang menampung jumlah uang yang didapatkan dari barang tersebut

    // Dibagian ini dilakukan perhitungan pengelompokkan barang, nama pembeli, dan total profit yang didapat
    for(var i = 0; i < arr.length; i++){
            // Dilakukan pengecekan, apakah barang yang ingin dibeli oleh pembeli, tersedia dijual oleh toko
            if(arr[i].product == listBarang[0][0]){
                // Jika barang tersedia untuk dijual, maka dicek lagi, apakah masih ada stock atau tidak
                if(amountTemp[0] >= arr[i].amount){
                    // Jika masih ada stock, value stock yang lama dikurang
                    amountTemp[0] -= arr[i].amount;
                    // Lalu nama pembeli dimasukkan kedaftar pembeli
                    shoppersName[0].push(arr[i].name);
                    // Lalu profit dikalkulasi dan diupdate jika ada pembeli bertambah
                    profit[0] = listBarang[0][1]*(listBarang[0][2]-amountTemp[0]);
                }
            }
            else if(arr[i].product == listBarang[1][0]){
                if(amountTemp[1] >= arr[i].amount){
                    amountTemp[1] -= arr[i].amount;
                    shoppersName[1].push(arr[i].name);
                    profit[1] = listBarang[1][1]*(listBarang[1][2]-amountTemp[1]);
                }
            }
            else if(arr[i].product == listBarang[2][0]){
                if(amountTemp[2] >= arr[i].amount){
                    amountTemp[2]-= arr[i].amount;
                    shoppersName[2].push(arr[i].name);
                    profit[2] = listBarang[2][1]*((listBarang[2][2]-amountTemp[2]));
            }
        }
    }

    // Dibagian ini dilakukan pemprosesan pembuatan object,
    // untuk direturn sebagai output
    var objTemp = [];

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

// Protoype Fungsi
 // function calculate (amountTemp, buyersAmounts, shoppersName, customerName, profit, price, amount){
    //     if(amountTemp >= buyersAmounts){
    //         amountTemp -= buyersAmounts;
    //         shoppersName.push(customerName);
    //         profit = price*(amount - amountTemp);
    //     }
    // }