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
   let count_1 = 0;
   let count_2 = 0;
   for (element of array) {
      if (element % 2 === 0) {
         count_1 += 1;
      } 
       else {
         count_2 += 1;
      }
   } 

   let counts = [];
   for (let i = 0; i < array.length; i++) {
      let value = array[i];
      if ( counts[value] === undefined) {
         counts[value] = 1
      }
      else {
         counts[value] = counts[value] + 1;
      }
      // counts[value] = ( counts[value] || 0 ) + 1
      // console.log(`${array[i]}`+ " apparait " + `${counts[value]}` + " fois");
   };
   console.table(counts); 

   let maxOccurences = 0;
   let majorityNumber = 0;
   for ( let i=0; i < counts.length; i++) {
      if (counts[i] !== undefined) {
         // i --> nombre initial, counts[i] --> nombre d'apparences
         if ( maxOccurences < counts[i]) {
            maxOccurences = counts[i];
            majorityNumber = i;
         }
      }
   }
   // count_1 -> nb elements pairs
   // count_2 -> nb elements impairs
   // maxOccurences -> nb Element Majoritaire
   if ( maxOccurences !== 0 || maxOccurences !== 1 ) {
      return majorityNumber;
   }
   else {
      // Cas à gérer pour la semaine pro !
      
   }
   
}

console.log(majorityNumber([1, 5, 6, 1, 5, 1, 6, 6, 6, 6])) // Affiche "6"
console.log(majorityNumber([3,1,4,1])) // Affiche "1"
console.log(majorityNumber([33,44,55,66,77])) // Affiche "Majorité Impairs"
console.log(majorityNumber([1,2,3,4])) // Affiche "Pas de majorité"

// > majority([3,1,4,1]) - 
// > "1"

// > majority([33,44,55,66,77])
// > "Majorité impairs"

// > majority([1,2,3,4])
// > "Pas de majorité"

