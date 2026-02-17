let person = { name: "Nasser", age: 30 };
let person2 = { name: "Laïla", age: 25 };
let person3 = { name: "Omar", age: 35 };
let person4 = { name: "Sara", age: 28 };
let person5 = { name: "Youssef", age: 10 };
let person6 = { name: "Mouna", age: 5 };

let employes = [person, person2,person3, person4, person5, person6];

// console.log(person);

// function personMajeures () {

//     for (let i=0; i<employes.length; i++) {
//         if (employes[i].age>18) {
//             console.log(employes[i].name + " " + "vous êtes majeur");}
//         else { console.log(employes[i].name + " " + "vous êtes mineur");

//         }
//     }
// }
// personMajeures();

function compterPersonnesMineures(employes) {
    let compteur = 0;
    for (let i=0; i<employes.length; i++) {
        if (employes[i].age < 18) {
            compteur= compteur + 1;
            
        }
    } return compteur;
}
console.log(compterPersonnesMineures(employes));