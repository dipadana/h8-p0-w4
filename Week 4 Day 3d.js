// Cek AB
function checkAB(str) {
    // Dilakukan pengecekan kepada string yang masuk,
    // dicek, adakah b yang berjarak 3 karakter dari a, 'axxxb'
    // karakter ' ' dianggap sebagai 1 karakter juga...
    for(var i = 0; i < str.length; i++){
        if(str[i] == 'a' && str[i+4] == 'b'){
            return true
        }
    }

    // Jika tidak,
    // dicek, adakah a yang berjarak 3 karakter dari b, 'bxxxa'
    for(var i = 0; i < str.length; i++){
        if(str[i] == 'b' && str[i+4] == 'a'){
            return true
        }
    }

    // Jika kedua perkondisian diatas tidak memenuhi, maka direturn false
    return false
}

  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false
