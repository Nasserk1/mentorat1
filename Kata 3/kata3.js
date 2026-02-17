
const month = {
    septembre: 10,
    octobre: 9,
    novembre: 8,
    decembre: 7,
    janvier: 6,
    fevrier: 5,
    mars: 4,
    avril: 3,
    mai: 2,
    juin: 1,
};



function drawMyPen(month) {
    console.log(" /\\");
    console.log("/__\\");

    for (let i=0; i<month; i++) {
         console.log("||||");
    }
    console.log("|__|");
    console.log("|__|");

}
drawMyPen(month.septembre);
