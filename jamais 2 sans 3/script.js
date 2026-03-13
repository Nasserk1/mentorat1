const asciiBox = (width, height) => {
    // let result = '';
    // return result;
    if (width === 1 && height <= 1) {
        console.log("+");
    }
    if (width > 1 && height > 1) {
        console.log("+"+"-".repeat(width - 2) + "+");
        console.log("|".repeat(height -2) + " ".repeat(width -2) + "|".repeat(height -2));
        console.log("+"+"-".repeat(width - 2) + "+");
    }
    
};
// asciiBox(3, 5);
asciiBox(1, 0);