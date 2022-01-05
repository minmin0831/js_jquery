const strs = ["Dog", "Cat", "Fish", "Hamster", "Parrot"];
const addition = ["Cow", "Horse"];
const addition2 = ["Rabbit", "Pig"];

const team = strs.concat(addition);
console.log('가축 명단: ', team);

const team2 = strs.concat(addition, addition2);
console.log('가축 명단2: ', team2);

