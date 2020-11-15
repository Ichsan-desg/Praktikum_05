function validated(){
    let username1 = document.forms["form1"]["username"].value;
    let password = document.forms["form1"]["password"].value;
    if (username1 == "ichsan" && password == "bot") {
        alert("Selamat datang!")
        return true;
    }
    else if (username1 == "" && password == "") {
        alert("ketikan username dan pssword mu!")
        return false;
    }
    else{
        alert("username atau password mu salah");
        return false;
    }
}
function kurs(){
    let input = document.getElementById("input");
    let select = document.getElementById('select');
    let hasil = document.getElementById("hasil");
    let submit1 = document.getElementById("submit1")

    submit1.addEventListener('click', function(){
        hasil.value = Number(input.value) * Number(select.value)
});
}
function chatbox(){
    let pesan = document.getElementById("pesan");
    let output = document.getElementById("output");
    let button = document.getElementById("button");

    button.addEventListener("click", function(){
        let pesan_baru = document.createElement("p");//membuat elemen pada pesan yg akan di cetak nanti contohnya "p".
        pesan_baru.innerHTML = output.value;// menginput masukan untuk di tampilkan ke browser
        pesan.appendChild(pesan_baru);//menampilkan value pesan_baru ke browser.
        output.value = "";//agar setiap value yg di masukan di mulai dari kosong
    });
}
