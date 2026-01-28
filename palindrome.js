const isPalindrome = (stringChar) => {
    let chaineInverse = stringChar.split('').reverse().join('');
    if (stringChar === chaineInverse) {
        return true;
    } else {
        return false;
    }
}

const isPalindromeWithoutReverseAndJoin = (stringChar) => {
    // @todo pour la semaine prochaine.
}

console.log(isPalindrome("anna")); // Retourne true
console.log(isPalindrome("nasser")); // Retourne false
console.log(isPalindrome("kayak")); // Retourne true
console.log(isPalindrome("arbre")); // Retourne false



console.log(isPalindromeWithoutReverseAndJoin("anna")); // Retourne true
console.log(isPalindromeWithoutReverseAndJoin("nasser")); // Retourne false
console.log(isPalindromeWithoutReverseAndJoin("kayak")); // Retourne true
console.log(isPalindromeWithoutReverseAndJoin("arbre")); // Retourne false
