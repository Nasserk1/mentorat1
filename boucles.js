let weather = "sunny";

let person = { name: "Nasser", age: 30 };
let person2 = { name: "Laïla", age: 25 };
let person3 = { name: "Omar", age: 35 };
let person4 = { name: "Sara", age: 28 };
let person5 = { name: "Youssef", age: 10 };
let person6 = { name: "Mouna", age: 5 };

let employes = [person, person2, person3, person4, person5, person6];

// function compterPersonnesMineures(employes) {
//     let compteur = 0;
//     for (i=0; i<employes.length; i++) {
//         if (employes[i].age < 18) {
//             compteur++;
//             return (compteur)
//         }
//     }
// }

const nbPersonnesMineurs = compterPersonnesMineures(employes);
console.log("Nombre de personnes mineures : " + nbPersonnesMineurs);


function afficherNoms(employes) {
    console.log("Liste des employés : ");
    console.log(employes[0])
    for (i=0; i<employes.length; i++) {
        if (employes[i].age > 18) {
            console.log(employes[i].name)
        }
        else {
            console.log("la personne est mineure")
        }
    }
}

// afficherNoms(employes);

function sayHello(name) {
    console.log("Coucou " + name + " !");
}
