const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];



const btn = document.getElementById("btn")
const pass1 = document.getElementById("pass1")
const pass2 = document.getElementById("pass2")
btn.addEventListener("click", function () {
    pass1.value = generate()
    pass2.value = generate()
})

function generate() {
    let password = ""
    let index = 0
    for (let i = 0; i < 15; i++) {
        index = Math.floor(Math.random() * characters.length)
        password += characters[index]
        // console.log(password)
    }
    return password

}



