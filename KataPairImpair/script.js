// Donner l'élément qui apparaît le plus fréquemment dans un tableau d'entiers.

// S'il n'y a pas d'élément qui apparaît plus qu'un autre, retourner une information indiquant si le tableau est composé en majorité de nombres pairs ou impairs.

// Si le tableau n'a pas de majorité et qu'il n'a pas plus d'éléments pairs qu'impairs, retourner 0

// Exemple

// > majority([3,1,4,1]) - 
// > "1"

// > majority([33,44,55,66,77])
// > "Majorité impairs"

// > majority([1,2,3,4])
// > "Pas de majorité"

function majorityNumber (array) {
   let counts = {};
  for (let i = 0; i < array.length; i++) {
    let value = array[i];
    
    counts[value] = (counts[value] || 0) + 1;
         console.log(`${array[i]}`+" apparait " + count_3 + " fois");
      } else {
         console.log("0");
      }
   }
}

majorityNumber([1, 5, 6, 1, 5, 1])

// function PairImpair (array) {
//    let count_1 = 0;
//    let count_2 = 0;
//    for (element of array) {
//    if (element % 2 === 0) {
//       count_1 += 1;
//    } 
//       else {
//    count_2 += 1;
//       }

// } 
// // console.log("nbre pairs :" + count_1);
// // console.log("nombre impairs :" + count_2);
// if (count_1> count_2) {
//    console.log(`le tableau est composé d'une majorité de nombres pairs`);
//    return `majorité de pairs` 
// }
// if (count_1< count_2) {
//    console.log("le tableau est composé d'une majorité de nombres impairs");
//    return `majorité de impairs`
// }
// else { console.log("0");}

// }

//PairImpair([3, 2, 2, 1, 6, 25, 20]);