const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordLenght = 15

let generated = false
let passEl = document.getElementById("pass-el")
let inputPassOne = document.getElementById("inputpass1-el")
let inputPassTwo = document.getElementById("inputpass2-el")

function getRandomPass() {
    let randomPass = Math.floor(Math.random() * characters.length) 
    return characters[randomPass]
    generated = true
}

function passGen() {
    let genPassword = " "
    for (let i = 0; i < passwordLenght; i++) {
        genPassword += getRandomPass()
    }
    return genPassword
    generated = true
}
 function pass() {
        inputPassOne.textContent += passGen()
        inputPassTwo.textContent += passGen()
        if (generated === false){
            passwordLenght ===  " "
        }
 }