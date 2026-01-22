const fizzbuzz = (number) => {
    if (number%3 === 0 && number%5 === 0) {
        console.log('FizzBuzz');
        return;
    }
    else if (number%3 === 0) {
        console.log("Fizz");
        return;
    }
    else if (number%5 === 0) {
        console.log("Buzz");
        return;
    } else {
        console.log(number);
        
    }
   
}

fizzbuzz(1); // 1
fizzbuzz(2); // 2 
fizzbuzz(3); // Fizz
fizzbuzz(4); // 4
fizzbuzz(5); // Buzz
fizzbuzz(6);
fizzbuzz(7);
fizzbuzz(8);
fizzbuzz(9);
fizzbuzz(10);
fizzbuzz(11);
fizzbuzz(12);
fizzbuzz(13);
fizzbuzz(14);
fizzbuzz(15);

// @todo Faire chaque cas du FizzBuzz jusqu'à 15 en y allant un cas de test à la fois !
// @todo Plutôt que d'aller la fonction fizzbuzz pour chaque nombre (et faire 100 appels manuels à la fonction), appeler la fonction fizzBuzz dans une boucle. 

// fizzbuzz(6); // Fizz 
// fizzbuzz(7); // 7
// fizzbuzz(8); // 8
// fizzbuzz(9); // Fizz
// fizzbuzz(10); // Buzz
// fizzbuzz(11); // 11
// fizzbuzz(12); // Fizz
// fizzbuzz(13); // 13
// fizzbuzz(14); // 14
// fizzbuzz(15); // FizzBuzz

