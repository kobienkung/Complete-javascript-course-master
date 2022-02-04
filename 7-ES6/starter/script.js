/*
{
    const a = 3;
    let b = 9;
    var c = 8
}
console.log(c);
//-----------------------------------------------------------------------------------------------



// ES5
function person(name) {
    this.name = name;
}

person.prototype.myFriends5 = function(arrNames) {
    var arr = arrNames.map(function(cur) {
        return this.name + ' is friends with ' + cur;
    }.bind(this));
    console.log(arr);
}

var friends = ['Bob', 'Jane', 'Mark'];

new person('John').myFriends5(friends);


// ES6
person.prototype.myFriends6 = function (arrNames) {
    var arr = arrNames.map((cur) => `${this.name} is friends with ${cur}`);
    
    console.log(arr);
}
new person('Mike').myFriends6(friends);

//-----------------------------------------------------------------------------------------------


// Destruction
const [a, b, c] = ['Argon', 'Boron', 'Cabon'];
console.log(a);
console.log(b);
console.log(c);

const what = {
    animal: 'Dragon', 
    al: 'Ethanol'};

const {animal, al} = what;
console.log(animal, al);

const {animal: ani, al:alco} = what;
console.log(ani, alco);


function calcAge(year) {
    const age = new Date().getFullYear() - year;
    return [age, 60 - age];
}
const [age, retire] = calcAge(1997);
console.log(age);
console.log(retire);

const year = new Date;
console.log(year);
//-----------------------------------------------------------------------------------------------

// Array
const boxes = document.querySelectorAll('.box');


const boxesArr6 = Array.from(boxes);
Array.from(boxes).forEach(cur => cur.style.background = 'dodgerblue');


for (const cur of boxesArr6) {
    if (cur.className.includes('blue')) {
        continue;
    }
    cur.textContent = 'I am changed to blue';
}

const ages = [13, 11, 3, 32, 9, 22];
console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18)); 
//-----------------------------------------------------------------------------------------------


// Spread operator
function sum(a,b,c,d) {
    return a+b+c+d;
}

const num = [3,43,67,32];

console.log(sum(...num));

const Smith = ['John', 'Jane', 'Mark'];
const Miller = ['Marry', 'Bob', 'Ann'];
const hole = [...Smith, 'Lily', ...Miller];
console.log(hole);

const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const all = [h, ...boxes];
Array.from(all).forEach(cur => cur.style.color = 'purple');
//-----------------------------------------------------------------------------------------------


// Rest parameters
function isFullAge5() { console.log(arguments); }

isFullAge5(1990, 1999, 1965);


function isFullAge6(a,b, ...years) { 
    years.forEach(cur => console.log((2016 - cur) >= a+b));
}

isFullAge6(10, 6, 1990, 1999, 1965, 2013, 1993);

//-----------------------------------------------------------------------------------------------


// Default parameters
function smithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'American') {
    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.lastName = lastName;
    this.nationality = nationality;
}

var john = new smithPerson('John', 1990);
var emily = new smithPerson('Emily', 1999, 'Diaz', 'Spanish');
//-----------------------------------------------------------------------------------------------


// Maps
const question = new Map();
question.set('question','What is not an element?');
question.set(1, 'Ar');
question.set(2, 'Bo');
question.set(3, 'Nh');
question.set(4, 'Co');
question.set('correct', 3);
question.set(true, 'That is right');
question.set(false, 'Wrong, try again');

console.log(question.get('question'));
console.log(question.size);

if (question.has(4)) {
    //question.delete(4);
    console.log('answer 4 is here');
}

//question.clear();

question.forEach((value, key) => console.log(`This is ${key}, and it's set to ${value}`));

question.forEach((value, key) => {
    if (typeof(key) === 'number') {
        console.log(`Answer ${key}: ${value}`);
    }
});


for ( let [key, value] of question.entries()) {
    //console.log(`This is ${key}, and it's set to ${value}`)
    if (typeof(key) === 'number') {
        console.log(`Answer ${key}: ${value}`);
    }
}
const ans = parseInt(prompt('Write the correct answer'));
console.log(question.get(ans === question.get('correct')));
//-----------------------------------------------------------------------------------------------


// Classes
class Person {
    constructor(name,yearOfBirth,job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }
    calcAge() {
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }
    static greeting() {
        console.log('Hi there!');
    }
}

const john = new Person('John', 1990, 'teacher');
Person.greeting();
//-----------------------------------------------------------------------------------------------


// ES5
var Person5 = function(name,yearOfBirth,job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }
Person5.prototype.calcAge = function() {
    var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
}

var Athlete5 = function(name,yearOfBirth,job,olympic, medal) {
    Person5.call(this, name,yearOfBirth,job);
    this.olympic = olympic;
    this.medal = medal;
}

Athlete5.prototype = Object.create(Person5.prototype);
Athlete5.prototype.wonMedal = function() { 
    this.medal++;
    console.log(this.medal);
}

var john5 = new Athlete5('john',1990,'swimming',3,5);

john5.calcAge();
john5.wonMedal();


// ES6
class Person6 {
    constructor(name,yearOfBirth,job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }
    calcAge() {
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }
}

class Athlete6 extends Person6 {
    constructor(name,yearOfBirth,job, olympic, medal) {
        super(name,yearOfBirth,job);
        this.olympic = olympic;
        this.medal = medal;
    }
    wonMedal() {
        this.medal++;
        console.log(this.medal);
    }
}

const john6 = new Athlete6('John', 1990, 'swimmer', 3, 5);
john6.wonMedal();
john6.calcAge();
//-----------------------------------------------------------------------------------------------


// Coding Challenge

class Park {
    constructor(name, year, numTrees, area) {
        this.name = name;
        this.year = year;
        this.numTrees = numTrees;
        this.area = area;
        this.treeDen = this.numTrees / this.area;
        this.age = new Date().getFullYear() - this.year;
    }
}




class Street {
    constructor(name, year, length, size = 'normal') {
        this.name = name;
        this.year = year;
        this.length = length;
        this.size = size;
    }
}




function TotalAvg(arr) {
    const sum = arr.reduce((prev, cur, index) => prev + cur, 0);
    return [sum, sum / arr.length];
}



function ParksReport(parks) {
    console.log('---------PARKS REPORT---------');
    
    parks.forEach(cur => console.log(`${cur.name} has a tree density of ${cur.treeDen}.`));
    
    const [toAge, avgAge] = TotalAvg(parks.map(cur => new Date().getFullYear() - cur.year));
    console.log(`Our ${parks.length} parks have an average age of ${avgAge} years.`);
    
    parks.forEach(cur => {
        if(cur.numTrees >= 1000) { console.log(`${cur.name} has more than 1000 trees.`)}
    })
}

function StreetReport(streets) {
    console.log('---------STREETS REPORT---------');
    
    const [toLength, avgLength] = TotalAvg(streets.map(cur => cur.length));
    console.log(`Our ${streets.length} have a total length of ${toLength} km. with an average of ${avgLength} km.`)
    
    streets.forEach(cur => console.log(`${cur.name}, buit in ${cur.year}, is a ${cur.size} street,`))
}
    

const park1 = new Park('Green Park', 1599, 700, 3974);
const park2 = new Park('National Park', 1699, 900, 5674);
const park3 = new Park('Oak Park', 1799, 1100, 2574);

const street1 = new Street('Ocean Avenue', 1999, 20, 'tiny');
const street2 = new Street('Evergreen Street', 2008, 14, 'small');
const street3 = new Street('4th Street', 2105, 17);
const street4 = new Street('Sunset Boulevard', 1982, 15, 'big');

const parks = [park1, park2, park3];
const streets = [street1, street2, street3, street4];

ParksReport(parks);
StreetReport(streets);
//-----------------------------------------------------------------------------------------------
*/














