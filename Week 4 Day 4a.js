// Change Me
function changeMe(array) {
    // Untuk memberi asign pada objectnya, dilakuka perulangan sebanyak panjang array
    for(var i = 0; i < array.length; i++){
        console.log((i+1) + '.' + array[i][0] + ' ' + array[i][1] + ':')
            // Melakukan assign object seprti biasa
            var object = {
                firstName: array[i][0],
                lastName: array[i][1],
                gender: array[i][2],
                // Ini merupakan perpendekan dari kondisi if, saya menyebutnya if inline
                age: !array[i][3] ? 'Invalid Birth Year' : new Date().getFullYear() - array[i][3]
            
            }
        console.log(object)
    }
}

  // TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); 
  // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  console.log(changeMe([])); // "" ( undefined same as "" )

  // Refrence : https://codeburst.io/javascript-null-vs-undefined-20f955215a2
