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