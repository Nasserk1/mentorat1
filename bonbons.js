
let isOpen = true;
let numberOfCandies = 5;
let wallet = 20;

const getCandyPrice = (candyType) => {
    if (candyType === 'lollipop' || candyType === 'chewing gum') return 2;
    if (candyType === 'caramel') return 3;
    if (candyType === 'chocolate') return 4;
    return 0;
};

const buyCandy = (candyType) => {

    if (!isOpen) {
        return "Le magasin est fermé.";
    }

    if (candyType !== "lollipop" &&
        candyType !== "chewing gum" &&
        candyType !== "caramel" &&
        candyType !== "chocolate") {
        return "Nous ne vendons pas ce type de bonbon.";
    }

    const price = getCandyPrice(candyType);

    if (numberOfCandies === 0 || wallet < price) {
        return "Tu ne peux pas acheter ce bonbon.";
    }

    wallet -= price;
    numberOfCandies -= 1;

    return `${candyType} acheté pour ${price}€ !`;
};

console.log(buyCandy("lollipop"));


// const buyCandy = (candyType) => {
//     wallet -= 2;
//     numberOfCandies -= 1;
//     return `${candyType} acheté !`;
// };