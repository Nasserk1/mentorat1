

const mesCompétences = ["CFF", "fff", "ttt", "rrr", "yyy", "uuuu"];
let listCompétences = document.getElementById("ul");
for (skill of mesCompétences) {
let liste = document.createElement("li");
liste.innerText = skill;
listCompétences.appendChild(liste);
console.log(liste);
}

let saisie= document.querySelector("#text");
const bouton= document.getElementById("btn");

bouton.addEventListener("click", function() {
    mesCompétences.push(saisie.value);
    console.log(mesCompétences);
});






