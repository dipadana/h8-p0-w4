// Deep Sum
function deepSum (arr) {
    // Membuat sebuah variable untuk menampung nilai total sum
    var totalSum = 0;

    // Melakukan proses perhitunga secara terus menerus,
    // sebanyak jumlah arr.length
    for(var i = 0; i < arr.length; i++){
        for(var j = 0; j < arr[i].length; j++){
            for(var k = 0; k < arr[i][j].length; k++){
                totalSum += arr[i][j][k];
            }
        }
    }

    // Dilakukan perkondisian, jika hasil sum lebih besar dari 0,
    // diasumsikan, maka dia bukanlah array kosong
    if(totalSum > 0){
        return totalSum;
    }
    // Tapi jika hasil sum adalah 0 atau tidak ada angka yang masuk,
    // maka langsung direnturn 'No number'
    else{
        return 'No number'
    }
}

  //TEST CASE
console.log(deepSum([
[
    [4, 5, 6],
    [9, 1, 2, 10],
    [9, 4, 3]
],
[
    [4, 14, 31],
    [9, 10, 18, 12, 20],
    [1, 4, 90]
],
[
    [2, 5, 10],
    [3, 4, 5],
    [2, 4, 5, 10]
]
])); // 316

console.log(deepSum([
[
    [20, 10],
    [15],
    [1, 1]
],
[
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    [2],
    [9, 11]
],
[
    [3, 5, 1],
    [1, 5, 3],
    [1]
],
[
    [2]
]
])); // 156

console.log(deepSum([[[],[]]])); // No number