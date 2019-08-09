/*
SEMUA OUTPUT FUNGSI YANG DIHASILKAN AKAN SECARA OTOMATIS
DIURUTKAN BERDSARKAN ABJAD 'KELASNYA'
*/

// function for dynamic sorting (Fungsi dinamis untuk melakukan sorting terhadap key object)
function compareValues(key, order='asc') {
    return function(a, b) {
        if(!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
            // property doesn't exist on either object
            return 0;
        }

        const varA = (typeof a[key] === 'string') ?
            a[key].toUpperCase() : a[key];
        const varB = (typeof b[key] === 'string') ?
            b[key].toUpperCase() : b[key];

        let comparison = 0;
        if (varA > varB) {
            comparison = 1;
        } else if (varA < varB) {
            comparison = -1;
        }
        return (
            (order == 'desc') ? (comparison * -1) : comparison
        );
    };
}

// Graduates
function graduates (students) {
    // Pertama dilakukan sort terhadap data tersebut,
    // sort data dilakukan agar mempermudah pengelompokkan data berdasarkan kelas
    students.sort(compareValues('class'));

    // Lalu dibuat beberapa variabel penampung
    var data = []; // Variable array kosong untuk menampung data (kelas, angka, dan nama) yang sudah dikelompokkan
    var temp = []; // Variable array penampung untuk data sementara
    j = 0; // Variable value untuk counter penampung array data[j]
    
    // Untuk mengurutkan data, dilakukan proses pengecekkan berulang sebanyak banyak data yang masuk
    for(var i = 0; i < students.length; i++){
        if( i != students.length-1){
            // Pertama, dilakukan pengelompokkan berdasarkan kelas
            if(students[i].class == students[i+1].class){
                // Jika ditemukan kelas yang sama, maka data sebelah kiri, akan dimasukkan kedalam temporary array
                temp.push(students[i]);
                // Untuk selanjutnya akan dimasukkan kedalam array data
                data[j] = temp;
            }
            else{
                // Jika ternyata mempunyai kelas yang berbeda, data akan sebelah kiri akan tetap dimasukkan kedalam array tampungan,
                // yang untuk selanjutnya akan dimassukan kedalam array data[]
                temp.push(students[i]);
                data[j] = temp;
                // Karena data sudah berbeda, antara data sebelah kiri dan kanan, 
                // karena sudah berbeda kelas, maka akan dibuatkan indeks array baru di array data[] untuk menampung data masuk selanjutnya
                j++;
                temp = [];
            }
        }
        // jika semua data sudah dibandingka dan sebagian besar sudah dimasukkan kedalam array data[] 
        // maka akan sisa data paling terakhir,
        // maka akan langsung dimasukkan kedalam array data[]
        else{
            temp.push(students[i])
            data[j] = temp;
        }
    }

    // Untuk memulai melakukan pengelompokkan, terlebih dahulu membuat semua variable yang dibutuhkan
    var output = {}; // Merupakan obeject penamoung dan akan di return 
    var daftarLulus = []; // Meruapakan array untuk menampung data anak-anak yang lulus dari semua kelas
    var lulusTiapKelas = []; // Merupakan penampung data sementara untuk menampung anak-anak kelas yang lulus perkelasnya
    var k = 0; // Merupakan counter untuk array penampung daftarLulus[k]

    // Dilakukan perulangan dalam perulangan untuk memasukkan data kedalam object
    for(i = 0; i < data.length; i++){
        for(j = 0; j < data[i].length; j++){
            // Dilakukannya pengecekan terhadap nilai yang memenuhi kualifikasi untuk lulus
            if(data[i][j].score > 75){
                lulusTiapKelas.push(
                    {
                        name : data[i][j].name,
                        score : data[i][j].score
                    }
                )
                
            }
        }
        daftarLulus[k] = lulusTiapKelas;
        k++;
        var lulusTiapKelas = [];
        
        // Jika semuanya sudah di cek, dan dikelompokkan bersarkan arraynya, maka dia akan
        // dimasukkan kedalam object
        output[data[i][0].class] = daftarLulus[i];
    }
    return output;
}

// TEST CASE
console.log(graduates([
{
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
},
{
    name: 'Alexei',
    score: 85,
    class: 'wolves'
},
{
    name: 'Sergei',
    score: 74,
    class: 'foxes'
},
{
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
}
]));

// {
//   foxes: [
//     { name: 'Dimitri', score: 90 }
//   ],
//   wolves: [
//     { name: 'Alexei' , score: 85 },
//     { name: 'Anastasia', score: 78 }
//   ]
// }

console.log(graduates([
{
    name: 'Alexander',
    score: 100,
    class: 'foxes'
},
{
    name: 'Alisa',
    score: 76,
    class: 'wolves'
},
{
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
},
{
    name: 'Albert',
    score: 71,
    class: 'wolves'
},
{
    name: 'Viktor',
    score: 80,
    class: 'tigers'
},
{
    name: 'Putu',
    score: 70,
    class: 'elephant'
}
]));

// {
//   foxes: [
//     { name: 'Alexander', score: 100 },
//     { name: 'Vladimir', score: 92 }
//   ],
//   tigers: [
//     { name: 'Viktor', score: 80 }
//   ],
//   wolves: [
//     { name: 'Alisa', score: 76 },
//   ],
// }


console.log(graduates([])); //{}