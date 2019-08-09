// Shooping Time
// Pertama saya membuat sebuah array untuk tampungan data,
// penggunaan array bertujuan untuk memudahkan pemanggilan data
var tokoX = [
            ['Sepatu Stacattu',1500000],
            ['Baju Zoro', 500000],
            ['Baju H&N', 250000],
            ['Sweater Uniklooh', 175000],
            ['Casing Headphone', 50000]];

// Membuat sebuah fungsi khusus untuk melakukan perhitungan, barang-barang apa saja yang bisa dibeli
function purchased(uang){
    // Membuat sebuah tampungan untuk barang-barang yang bisa dibeli
    var temp = [];
    var money1 = uang;
    // Dilakukan perulangan sebanyak banyak barang yang ada di toko,
    // jika masih ada uang yang cukup, maka uang akan terus dibelanjakan,
    // prioritas diutamakan barang yang lebih mahal terlebih dahulu
    for(var i = 0; i < tokoX.length; i++){
        if(money1 - tokoX[i][1] > 0){
            temp.push(tokoX[i][0]);
            money1 = money1 - tokoX[i][1];
        }
    } 
    return temp;
}

// Membuat sebuah fungsi untuk menghitung sisa uang setelah dibelanjakan
function change(uang){
    var money1 = uang;
    for(var i = 0; i < tokoX.length; i++){
        if(money1 - tokoX[i][1] >= 0){
            money1 = money1 - tokoX[i][1];
        }
    } 
    return money1;
}

// Fungsi utama yang berfungsi mencetak object yang yang sudah ditentukan 
function shoppingTime(memberId, money) {
    var obj = {
        memberId : memberId,
        money : money,
        listPurchased : purchased(money),
        changeMoney : change(money),
    }
    
    // Menentukan output sesuai kondisi permintaan
    if(!memberId){
        return 'Mohon maaf, toko X hanya berlaku untuk member saja';
    }
    else if(money < 50000 || !money){
        return 'Mohon maaf, uang tidak cukup';
    }
    return obj;
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
console.log(shoppingTime('82Ku8Ma742', 170000));
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime('234JdhweRxa53',3000000));