/*

// Function constructor
var john = {
    name: 'John',
    year: 1990,
    job: 'teacher'
};

var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calcAge = function() {
        console.log(2020 - this.yearOfBirth);
    }

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calcAge();
jane.calcAge();
mark.calcAge();



// Object.create
var personProto = {
    calcAge: function() {
        console.log(2020 - this.year);
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.year = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, {
    name: {value: 'Jane'},
    year: {value: 1990},
    job: {value: 'designer'}
});





// Primitive vs Objects

// Primitive
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);


// Objects
var obj1 = {
    name: 'John',
    age: 26
};

var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);


// Functions
var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
};

function change(a, c) {
    a = 30;
    c.city = 'San Francisco';
}

change(age, obj);

console.log(age);
console.log(obj.city);




// Passing function as arguments
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calcAge(el) {
    return 2016 - el;
}

function isFullAge(el){
    return el >= 18;
}

function maxHeartRate(el) {
    if (el >= 17 && el <= 81) {
    return Math.round(206.9-(.67 * el));
} else {return -1}
}

var ages = arrayCalc(years, calcAge);
var fullAge = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAge);
console.log(rates);





function interView(job) 
{
    if (job === 'teacher') 
    {
        return function(name) 
        {
            console.log(name + ', what do you teach?');
        }  
    }
    else if (job === 'designer')
        {
            return function(name)
            {
                console.log(name + ', what kind of thing you design for?');
            }
        }
    else 
        {
            return function(name)
            {
                console.log(name + ', what job do you do?');
            }
        }
}

var teacherQ = interView('teacher');
var designerQ = interView('designer');

teacherQ('John');
designerQ('Jane');

interView('teacher')('Mark');
interView()('Look');3





// IIFE
(function() 
{
    var roll = Math.random() * 10;
    console.log(roll >= 5);
})();

(function(luck) 
{
    var roll = Math.random() * 10;
    console.log(roll >= 5 - luck);
})(5);





// Closures
function retire(retireAge)
{
    var a = ' years left untill retirement.';
    return function(year)
    {
        var age = 2016 - year;
        console.log((retireAge - age) + a);
    }
}

var retireUS = retire(66);
retireUS(1990);
retire(66)(1990);




function interView(job) 
{
    var tea = ', what do you teach?';
    var de = ', what kind of thing you design for?';
    var what = ', what job do you do?';
    return function(name){
        if (job === 'teacher') 
            {
                console.log(name + tea);
            }
        else if (job === 'designer')
            {
                console.log(name + de);
            }
        else
            {
                console.log(name + what);
            }
        }
}

var teaInterview = interView('teacher');

teaInterview('john');
interView('designer')('Jane');
interView()('Mark');





// Bind, call and apply

var john =
{
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay)
    {
    if (style === 'formal')
        {
            console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
        }
    else if (style === 'friendly')
        {
            console.log('Hey! What\'s up' + ' I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
        }
}
}

var emily = 
    {
        name: 'Emily',
        age: 35,
        job: 'designer'
    }


john.presentation('formal', 'morning');
john.presentation.call(emily, 'friendly', 'afternoon');
//john.presentation.apply(emily, ['friendly', 'day']);
var johnFriendly = john.presentation.bind(john, 'friendly');
johnFriendly('night');
var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('evening');
emily.presentation = john.presentation;
emily.presentation('formal', 'night')

*/

(function (){
var QuestionCons = function (ques, choices, correct)
{
    this.ques = ques;
    this.choices = choices;
    this.correct = correct;
}

var Question0 = new QuestionCons(
    'What is the most cutest pet?',
    ['Tiger', 'Snake', 'Cat', 'Shark'],
    '2'    
);

QuestionCons.prototype.tellme = ('hahaha');

var Question1 = new QuestionCons(
    'What is the most interesting subject?',
    ['Thermodynamics', 'Coding', 'Mechanics'],
    '1'    
);

var Questions = [Question0, Question1];
var current = 0;

function show()
    {
        var ran = Math.floor(Math.random() * Questions.length);
        var Qran = Questions[ran];
        console.log(Qran.ques);
        for(i = 0; i < Qran.choices.length; i++)
            {
                console.log(i + ': ' + Qran.choices[i]);
            }
        return Qran;
    };

function check()
    {
        var Qran = show();
        var ans = prompt('Insert the answer number');
        
        if( ans === 'exit') 
            {
            }
        else if(ans === Qran.correct)
            {
                current++;
                console.log('correct');
                console.log('Your current score is ' + current);
                console.log('---------------------------------')
                check();
            }
        else
            {
                console.log('Wrong answer:( Try again.');
                console.log('Your current score is ' + current);
                console.log('---------------------------------')
                check();
            }
    }
    check();
})();



































































































