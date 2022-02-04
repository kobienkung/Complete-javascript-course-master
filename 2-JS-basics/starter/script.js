/*

//Variables and data types

var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

//Variable naming rile
var _3years = 3;
var $johnMark = 'John and Mark';
var i = 9;



// Variable mutation and type coercion
var firstName = 'John';
var age = 28;
console.log(firstName + ' ' + age);



// Type coercion
var job, isMarried;
job = 'teacher';
isMarried = false;
console.log(firstName + ' is ' + age + ' years old ' + job + '. Is he married? ' + isMarried);



// Variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is ' + age + ' years old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);



// Basic operators
var now, yearJohn, yearMark;
now = 2020;
ageJohn = 28;
ageMark = 33;



// Math operators
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);
console.log(now - 2);
console.log(now * 2);
console.log(now / 2);



// Logical operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);


// Typrof operators
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark');
var x;
console.log(x);



// Operator prcedence
var now = 2018,
    yearJohn = 1989,
    fullAge = 18,
    //Multiple operator
    isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);



// Grouping
var ageJohn = now - yearJohn,
    ageMark = 35,
    average = (ageJohn + ageMark) / 2;
console.log(average);




// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 26 which x = 26 cuz associativity (right to left for =)
console.log(x, y);



// More operators
x *= 2; // x = x*2
console.log(x);
x += 10;
x++;
x--;



// Challenge
var massMark = 78, // kg
    heightMark = 1.69, // meters
    massJohn = 92,
    heightJohn = 1.95,
    BMIMark = massMark/(heightMark * heightMark),
    BMIJohn = massJohn/(heightJohn * heightJohn),
    comBMI = BMIMark > BMIJohn;

console.log (BMIMark, BMIJohn);

console.log ('Is Mark\'s BMI heigher than John\'s? ' + comBMI);



// Ternary Operator 

var firstName = 'John',
    age = 18;

age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

 
// Swich Statements
var job = 'cop';
switch (job) {
    case 'teacher':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in Lisbon.');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites.');
        break;
    default:
        console.log(firstName + ' does something else.');
}


age = 33;
switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age <20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man.');
        break;
    default:
        console.log(firstName + ' is a man.');
}



// falsy values: undefined, null, 0, '', NaN--Not a Number
// truthy values: NOT falsy values

var height = '';

if (height || height === 0) {
    console.log('Variable is defined');
}   else {
    console.log('Variable is undefined');
}



// Challenge
var JohnAvgScore = (89 + 120 + 103) / 3,
    MikeAvgScore = (116 + 94 + 123) / 3,
    MaryAvgScore = (97 + 134 + 105) / 3;

console.log(JohnAvgScore, MikeAvgScore, MaryAvgScore);

if (JohnAvgScore > MikeAvgScore && JohnAvgScore > MaryAvgScore){
        console.log('John is a winner with the score ' + JohnAvgScore +'.');
}
else if (JohnAvgScore === MikeAvgScore && JohnAvgScore > MaryAvgScore){
        console.log('John and Mike are draw with the score ' + JohnAvgScore +'.');
}
else if (MikeAvgScore > JohnAvgScore && MikeAvgScore > MaryAvgScore){
        console.log('Mike is a winner with the score ' + MikeAvgScore +'.');
}
else if (MikeAvgScore === MaryAvgScore && MikeAvgScore > JohnAvgScore){
        console.log('Mike and Mary are draw with the score ' + MikeAvgScore +'.');
}
else if (MaryAvgScore > JohnAvgScore && MaryAvgScore > MikeAvgScore){
        console.log('Mary is a winner with the score ' + MaryAvgScore +'.');
}
else if (MaryAvgScore === JohnAvgScore && MaryAvgScore > MikeAvgScore){
        console.log('Mary and John are draw with the score ' + MaryAvgScore +'.');
}
else if (JohnAvgScore === MikeAvgScore && JohnAvgScore === MaryAvgScore){
        console.log('John, Mike and Mary are draw with the score ' + JohnAvgScore +'.');
}



// Function declaration
function calAge(birthYR) {
    return 2020 - birthYR;
}

var ageJohn = calAge(1990),
    ageMike = calAge(1948),
    ageJane = calAge(1969);
console.log(ageJohn, ageMike, ageJane);

function yrRetire(year, name) {
    var Retire = 60 - calAge(year);
    
    if (Retire > 0) {
        console.log(name + ' retires in ' + Retire + ' years.');
    } else console.log(name + ' is already retired.')
}

yrRetire(1990, 'John');
yrRetire(1948, 'Mike');
yrRetire(1969, 'Jane');



// Function epression
var whatDoYouDo = function(job, firstName) {
    switch (job) {
        case ('teacher'):
            return firstName + ' teaches kids how to code.';
        case ('driver'):
            return firstName + ' drives an uber in Lisbon.';
        case ('designer'):
            return firstName + ' designs beatifule websites';
        default:
            return firstName + ' does something else.';
    }        
}
            
console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Mark'));



// Arrays

// Initialize new arry
var names = ['Mark', 'Mike', 'Jane'];
var year = new Array(1990, 1991, 1992);

console.log(names[2]);
console.log(names.length);

// Mutate array data
names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);

// Different data type
var john = ['John', 'Smith', 1990, 'teacher', false];
john.push('blue');
john.unshift('Mr.');
console.log(john);

john.pop();
john.pop();
john.shift();
console.log(john);

console.log(john.indexOf('Smith'));
console.log(john.indexOf(34));

var isDesigner = john.indexOf('designer') === -1 ? 'John is not a designer.' : 'John is a designer.';
console.log(isDesigner);



function tip(bill) {
    if (bill < 50 && bill >= 0) {
        return bill * 0.2;
    } else if (bill < 200 && bill >= 50) {
        return bill * 0.15;
    } else { return bill * 0.1};
}

var give = [tip(124), tip(48), tip(268)];

function totall(bill) {
    return tip(bill) + bill;
}

var totall = [totall(124), totall(48), totall(268)];

console.log(give, totall);



// Object and properties

// Object literal

var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};

console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);

// New Object syntax
var jane = new Object();
jane.firstName = 'Jane';
jane.lastName = 'Smith';
jane['birthYear'] = 1969;
console.log(jane);



// Object and methods
var john = {
    birthYear: 1990,
    calcAge: function() {
        this.age = 2020 - this.birthYear;
    }
};

john.calcAge();
console.log(john);



var Mark = {
    fullName: 'Mark Miller',
    mass: 79,
    height: 1.69,
    calcBMI: function() {
        this.BMI = this.mass/(this.height * this.height)
//        return this.BMI;
    }
};

var John = {
    fullName: 'John Smith',
    mass: 110,
    height: 1.95,
    calcBMI: function() {
        this.BMI = this.mass/(this.height * this.height)
//        return this.BMI;
    }
};

if (Mark.calcBMI() > John.calcBMI()) {
    console.log(Mark.fullName + 'has a heigher BMI of ' + Mark.BMI);
} else if (Mark.BMI < John.BMI) {
    console.log(John.fullName + 'has a heigher BMI of ' + John.BMI);
} else {
    console.log(Mark.fullName + ' and ' + John.fullName + 'have the same BMI with ' + Mark.BMI);
}



// Loops and iteration

// For loop
for (var i = 0; i < 10; i++) {
    console.log(i);
}
    
var john = ['John', 'Smith', 1990, 'teacher', false];
for (var i = 0; i < john.length; i++) {
    console.log(john[i]);
}

// While loop
var i = 0;
while (i < john.length) {
    console.log(john[i]);
    i++;
}



// Continue and break statments
var john = ['John', 'Smith', 1990, 'teacher', false];
for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]);
}

for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') break;
    console.log(john[i]);
}

for (var i = john.length - 1; i >= 0; i--) {
    console.log(john[i]);
}

*/

var john = {
    bill: [124, 48, 268, 180, 42],
    tip: [],
    totall: [],
    calcTip: function() {
        for (var i = 0; i < this.bill.length; i++) 
        {
            var bill = this.bill[i]
            var tip = this.tip[i]
            if (bill < 50) 
             {
                 tip = bill * 0.2;
             } 
            else if (bill >= 50 && bill < 200) 
             {
                 tip = bill * 0.15;
             } 
            else 
             {
                 tip = bill * 0.1;
             }
            this.tip[i] = tip;
            this.totall[i] = tip + bill;
        }
    }
};


var mark = {
    bill: [77, 475, 110, 45],
    tip: [],
    totall: [],
    calcTip: function() {
        for (var i = 0; i < this.bill.length; i++) 
        {
            var bill = this.bill[i]
            var tip = this.tip[i]
            if (bill < 100) 
             {
                 tip = bill * 0.2;
             } 
            else if (bill >= 100 && bill < 300) 
             {
                 tip = bill * 0.1;
             } 
            else 
             {
                 tip = bill * 0.25;
             }
            this.tip[i] = tip;
            this.totall[i] = tip + bill;
        }
    }
};

function avg(tip)
{
var sum = 0;
for (var i = 0; i < tip.length; i++)
    {
        sum += tip[i];
    }
    return sum / tip.length;
}
    
    
john.calcTip();
mark.calcTip();
john.avg = avg(john.tip);
mark.avg = avg(mark.tip);
console.log(john, mark);

if (avg(john.tip) > avg(mark.tip)) {
    console.log('John\'s family pays the heighest tips, with an average of ' + john.avg);
} else if (john.avg < mark.avg) {
    console.log('Mark\'s family pays the heighest tips, with an average of ' + mark.avg);
} else {
    console.log('They pays tips equally on average');
}








































