const jar = "gummy bears";
console.log(jar);
console.log(typeof jar);

let newArray = ["name", 3, { program: "interactive digital media" }];

console.log(newArray[1], newArray[2]);

const studentDocs = {
  names: ["Allen", "Ellie", "Mina"],
  age: [34, 25, 28],
  phoneNumbers: {
    home: "02166389768",
    cellPhone: "08432256867",
  },
  address: {
    postalCode: 46788,
    city: "Dublin",
  },
};

console.log(studentDocs.names);
console.log(studentDocs.age);
console.log(studentDocs.phoneNumbers.home);
console.log(newArray[1]);
console.log(newArray[2].program);

// ++++++++++++++++++++++++++++++++++++++++++++
let totalScore = [];

function playerScore1() {
  totalScore++;
}

playerScore1();
playerScore1();
playerScore1();
playerScore1();

console.log(totalScore);

console.log("Name:", studentDocs.names[0]);
