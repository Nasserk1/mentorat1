
const test = ["yes", "no", "yes", "maybe", "YES", " no "];


function surveyStats(answers) {
    let stat = {yes: 0, no: 0, maybe: 0, invalid: 0};
    for (let answer of answers) {
        answer = answer.trim().toLowerCase();
        if (answer === "yes") {
            stat.yes++;
            }
            else if (answer === "no") {
                stat.no++;
            }
            else if (answer === "maybe") {
                stat.maybe++;
            } else {
                stat.invalid++;
            } 
    }
    console.log(stat);    
    }

surveyStats(test);