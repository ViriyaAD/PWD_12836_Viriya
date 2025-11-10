function fn_ValForm() {
    var sMsg = "";
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Regular Expression untuk validasi email
    var emailPattern = /^[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9]@[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9][\.][a-z0-9]{2,4}$/;

    // Validasi input kosong
    if (name == "") {
        sMsg += "\n* Anda belum mengisikan nama";
    }
    if (email == "") {
        sMsg += "\n* Anda belum mengisikan email";
    } else if (!emailPattern.test(email)) {
        sMsg += "\n* Format email tidak valid, contoh yang benar: nama@email.com";
    }
    if (message == "") {
        sMsg += "\n* Anda belum mengisikan pesan";
    }

    // Tampilkan peringatan bila ada kesalahan
    if (sMsg != "") {
        alert("Peringatan:\n" + sMsg);
        return false;
    } else {
        return true;
    }
}
