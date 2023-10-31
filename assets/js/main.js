

// ===============================================================
//                          Array-Level-1_1
// ===============================================================
console.log("%c ----------Array-Level-1_1-----------", "color:yellow; fontsize: 16px;" );

const person = ["Samuel", "Aliyari", "Iran"];
const friends = ["Mario", "Johann", "Michael"];
const favoriteFood = ["Steak", "Burger", "fried Chicken"];


console.log(person);
console.log(friends);
console.log(favoriteFood);

// ===============================================================
//                          Codeflow_uebung_lvl_1_2: Arrays Index
// ===============================================================
const person3 = [...person];
const friends3 = [...friends];
const favoriteFood3 = [...favoriteFood];
console.log("%c ----------Codeflow_uebung_lvl_1_2: Arrays Index-----------", "color:yellow; fontsize: 16px;" );

console.log(person[0], person[1], person[2]);
console.log(friends[0], friends[1], friends[2]);
console.log(favoriteFood[0], favoriteFood[1], favoriteFood[2]);


// ===============================================================
//                          Array-Level-1_3
// ===============================================================

console.log("%c ----------Array-Level-1_3-----------", "color:yellow; fontsize: 16px;" );

console.log(person.length)
console.log(friends.length)
console.log(favoriteFood.length)


// ===============================================================
//                          Array-Level-1_4
// ===============================================================

console.log("%c ----------Array-Level-1_4-----------", "color:yellow; fontsize: 16px;" );


const personTwo = [...person];
console.log(personTwo);

personTwo.push("Teheren");
console.log(personTwo);

personTwo.push("Persisch");
console.log(personTwo);

// ===============================================================
//                          Array-Level-1_5
// ===============================================================

console.log("%c ----------Array-Level-1_5-----------", "color:yellow; fontsize: 16px;" );

console.log(person);

let personLastValue = person.pop();
console.log(personLastValue);

console.log(person);

console.log(friends);

let friendsLastValue = friends.pop();
console.log(friendsLastValue);

console.log(friends);

console.log(favoriteFood);

let favoriteFoodLastValue = favoriteFood.pop();
console.log(favoriteFoodLastValue);

console.log(favoriteFood);


// ===============================================================
//                          Array-Level-1_6
// ===============================================================

console.log("%c ----------Array-Level-1_6-----------", "color:yellow; fontsize: 16px;" );

console.log(person3);

let person3FirstValue = person3.shift();
console.log(person3FirstValue);

console.log(person3);

console.log(friends);

let friends3FirstValue = friends3.shift();
console.log(friends3FirstValue);

console.log(friends3);

console.log(favoriteFood3);

let favoriteFood3FirstValue = favoriteFood3.shift();
console.log(favoriteFood3FirstValue);

console.log(favoriteFood3);


// ===============================================================
//                          Array-Level-1_7
// ===============================================================

console.log("%c ----------Array-Level-1_7-----------", "color:yellow; fontsize: 16px;" );


console.log(friends3);

friends3.unshift("Arif");

console.log(friends3);

friends3.unshift("Daniel");

console.log(favoriteFood3);

// .......................

console.log(favoriteFood3);

favoriteFood3.unshift("Pommes");

console.log(favoriteFood3);

favoriteFood3.unshift("Nuggets");

console.log(favoriteFood3);

// ===============================================================
//                          Array-Level-1_9
// ===============================================================

console.log("%c ----------Array-Level-1_9-----------", "color:yellow; fontsize: 16px;" );


const numArr = [23, 54, 75];

console.log(numArr);

numArr.push(5, 12, 15, 68, 11);

console.log(numArr);

numArr.unshift(58, 23, 45, 6, 7,);

console.log(numArr);

numArr.pop();
numArr.pop();

console.log(numArr);

numArr.shift();
numArr.shift();

console.log(numArr);



// ===============================================================
//                          Array-Filter-Level-1_8
// ===============================================================

console.log("%c ----------Array-Filter-Level-1_8-----------", "color:yellow; fontsize: 16px;" );


const zahlen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const gradeZahlen = zahlen.filter((elt) => elt % 2 === 0 ? elt : console.log("ungrade"));

console.log(gradeZahlen);

const ungradeZahlen = zahlen.filter((elt) => elt % 2 !== 0 ? elt : console.log("grade"));

console.log(ungradeZahlen);



// ===============================================================
//                          Array-Filter-Level-1_8-2
// ===============================================================

console.log("%c ----------Array-Filter-Level-1_8-2-----------", "color:yellow; fontsize: 16px;" );


const woerter = ["Banane", "Kaktus", "Flausch", "Ente", "Apfel", "Auto", "Giraffe", "Schmetterling", "Krokodil", "Lampe"];

woerter.filter((elt) => console.log(elt));

const shorterThanSixA = woerter.filter(checkArray)

function checkArray(elt) {
    if (elt.length <= 6) {
        return elt
    } else {
        console.log("longer than");
    }
};

console.log(shorterThanSixA)

// .................................

const shorterThanSix = woerter.filter((elt) => elt.length <= 6 ? elt : false);

console.log(shorterThanSix);

// .................................


// ===============================================================
//                          Array-Filter-Level-1_8-4
// ===============================================================

console.log("%c ----------Array-Filter-Level-1_8-4-----------", "color:yellow; fontsize: 16px;" );

const zahlenTwo = [12, 25, 7, 18, 30, 5];


zahlenTwo.filter((elt) => console.log(elt))


const smallerThanTwenty = zahlenTwo.filter((elt) => elt < 20 ? elt : false);
console.log(smallerThanTwenty);

const smallerThanTwentyMult = smallerThanTwenty.map((elt) => elt*2);
console.log(smallerThanTwentyMult);



// ===============================================================
//                          Array-Filter-Level-1_8-3
// ===============================================================

console.log("%c ----------Array-Filter-Level-1_8-3-----------", "color:yellow; fontsize: 16px;" );


const heroArr = ["Superman", "Batman", undefined, , "Wonder Woman", "Spider-Man", "Black Widow", "Iron Man", "Thor", "Catwoman", , null];

console.log(heroArr);

const myHeroes = heroArr.filter((elt) => elt !== undefined && elt !== null && elt.length > 0 ? elt : false);


console.log(myHeroes)