// const isPalindrome = (stringChar) => {
//     let chaineInverse = stringChar.split('').reverse().join('');
//     if (stringChar === chaineInverse) {
//         return "true";
//     } else {
//         return "false";
//     }
// }

const isPalindromeWithoutReverseAndJoin = (stringChar) => {
    // je convertis ma chaine de caractère en tableau
    let firstString = stringChar.split('');
    let reverseString = "";
    // je fais une boucle inversée sur le tab (For)
    // console.log(firstString);
    for (let i = firstString.length - 1 ; i>=0; i--) {
           reverseString += firstString[i]; 
         }
         console.log(reverseString);
    // je convertit le tableau en string
    if (stringChar === reverseString) {
        return "True";
    } else {
        return "False";
    }
    //je compare le résultat avec stringChar
    //je mets des If et return false et True
};

// console.log(isPalindrome("anna")); // Retourne true
// console.log(isPalindrome("nasser")); // Retourne false
// console.log(isPalindrome("kayak")); // Retourne true
// console.log(isPalindrome("arbre")); // Retourne false



console.log(isPalindromeWithoutReverseAndJoin("zorro")); // Retourne true
console.log(isPalindromeWithoutReverseAndJoin("nasser")); // Retourne false
console.log(isPalindromeWithoutReverseAndJoin("kayak")); // Retourne true
console.log(isPalindromeWithoutReverseAndJoin("arbre")); // Retourne false
