const add = require('./example/add');

let lastLastScore = 0;
let lastScore = 1;
let score = 1;
while (score < 100) {
    score = add(lastScore, lastLastScore);
    console.log(`${lastScore} score and ${score} years ago...`);
    lastLastScore = lastScore;
    lastScore = score;
}
