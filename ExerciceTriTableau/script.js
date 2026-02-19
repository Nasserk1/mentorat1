// onlyEvens([1, 2, 3, 4, 5, 2])
// > [2, 2, 4]

function onlyEvens(array) {
    let tab = [];
    for (numbers of array) {
        
        if (numbers %2 === 0) {
            tab.push(numbers);
            // console.log(tab);
        }
} 
    for (const elements of tab) {
        for (let i=0;i<tab.length - 1; i++) {
            if (tab[i]> tab[i+1]) {
            let temp = tab[i];
            tab[i] = tab[i+1];
            tab[i+1] = temp;

        }
        
        
        }
    } console.log(tab);
}
onlyEvens([2, 7, 4, 8, 6]);
onlyEvens([1,2,3,5,4,7,6,10,8])