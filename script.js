// Fungsi solve
function Solve(val) {
    // ambil elemen HTML input dengan ID "inputResult"
    let v = document.getElementById("inputResult");
    // tambahkan nilai argumen val ke nilai elemen input
    v.value += val;
}

// Fungsi result yg tdk menerika argumen apapun
function Result() {
    // Ambil nilai elemen input dengan ID "inputResult"
    let num1 = document.getElementById("inputResult").value;
    // Evaluasi nilai elemen input sebagai ekspressi JavaScript menggunakan fungsi eval()

    // 
    num1 = num1.replace(/(\d+(\.\d+)?)%/g, function (match,p1) {
        return (parseFloat(p1) / 100).toString();
    }); // /\d+ = matches on or more digits following the decimal point
    /* ? = group part decimal
    parseFloat(p1) / 100 = angka di persennya di bagi 100
    g = global

        */
    let num2 = eval(num1);
    // Atur nilai elemen input menjadi hasil evaluasi
    document.getElementById("inputResult").value = num2;
}

// Fungsi clear
function Clear() {
    // ambil elemen HTML input dengan ID "inputResult"
    let inp = document.getElementById("inputResult");
    // Bersihkan nilai elemen input
    inp.value="";
}

// Fungsi back
function Back() {
    // Ambil elemen HTML input dengan ID "inputResult"
    let ev = document.getElementById("inputResult");
    // Hapus karater terakhir
    ev.value = ev.value.slice(0,-1);
}