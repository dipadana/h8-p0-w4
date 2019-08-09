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

// Highest Score
function highestScore (students) {
    // Pertama dilakukan sort terhadap data tersebut,
    // sort data dilakukan agar mempermudah pengelompokkan data berdasarkan kelas
    students.sort(compareValues('class'));

    // Lalu dibuat beberapa variabel penampung
    var score = []; // Variable array kosong untuk menampung data (kelas, angka, dan nama) yang sudah dikelompokkan
    var temp = []; // Variable array penampung untuk data sementara
    j = 0; // Variable value untuk counter penampung array score[j]
    
    // Untuk mengurutkan data, dilakukan proses pengecekkan berulang sebanyak banyak data yang masuk
    for(var i = 0; i < students.length; i++){
        if( i != students.length-1){
            // Pertama, dilakukan pengelompokkan berdasarkan kelas
            if(students[i].class == students[i+1].class){
                // Jika ditemukan kelas yang sama, maka data sebelah kiri, akan dimasukkan kedalam temporary array
                temp.push(students[i]);
                // Untuk selanjutnya akan dimasukkan kedalam array score
                score[j] = temp;
            }
            else{
                // Jika ternyata mempunyai kelas yang berbeda, data akan sebelah kiri akan tetap dimasukkan kedalam array tampungan,
                // yang untuk selanjutnya akan dimassukan kedalam array score[]
                temp.push(students[i]);
                score[j] = temp;
                // Karena data sudah berbeda, antara data sebelah kiri dan kanan, 
                // karena sudah berbeda kelas, maka akan dibuatkan indeks array baru di array score[] untuk menampung data masuk selanjutnya
                j++;
                temp = [];
            }
        }
        // jika semua data sudah dibandingka dan sebagian besar sudah dimasukkan kedalam array score[] 
        // maka akan sisa data paling terakhir,
        // maka akan langsung dimasukkan kedalam array score[]
        else{
            temp.push(students[i])
            score[j] = temp;
        }
    }

    // Jika semua data sudah diurutkan, berdasarkan kelas dan score tertingginya,
    // maka semau data akan dimasukkan kedalam object final{}
    var final = {};
    for(i = 0; i < score.length; i++){
        score[i].sort(compareValues('score','desc'));
        final[score[i][0].class] = {
            name : score[i][0].name,
            score : score[i][0].score
        }
    }
        // Jika semua sudah, maka akan direturn sebagai object,
        // data yang direntrun merupakan data yang sudah diurutkan
        return final;
}

// TEST CASE
console.log(highestScore([
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
    name: 'Dipadana',
    score: 80,
    class: 'elephant'
},
{
    name: 'Putu',
    score: 81,
    class: 'elephant'
}
]));

// {
//   foxes: { name: 'Alexander', score: 100 },
//   tigers: { name: 'Viktor', score: 80 },
//   wolves: { name: 'Alisa', score: 76 }
// }

console.log(highestScore([
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
    //   foxes: { name: 'Dimitri', score: 90 },
    //   wolves: { name: 'Alexei', score: 85 }
    // }

console.log(highestScore([])); //{}