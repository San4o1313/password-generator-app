let passwordEl = document.getElementById("password");
let generateEl = document.getElementById("generate");

generateEl.addEventListener("click", () => {
    let passwordLength = number.value;
    let row = 'absdefghjklmnopqrstuvwxyz';
    let password = "";

    if (upper.checked) {
        row += row.toLocaleUpperCase();
    }
    if (digits.checked) {
        row += "0123456789";
    }
    if (symbols.checked) {
        row += "!@#$%^&*()<>?";
    }
    for(i = 0; i < passwordLength; i++) {
        let rowLength = row.length;
        password += row[Math.floor(Math.random() * rowLength)];
    }
    passwordEl.value = password;
});




