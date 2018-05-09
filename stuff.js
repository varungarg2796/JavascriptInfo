
//--Javascript has dynamic typing. We don't need to define the variable type. it guesses it.

//Type Coercion
//---------
// var name = 'John';
// var age = '26';

// console.log(name + age); //output 'John26' //coerced into a string

//Javascript prompt

// var whoAreYou= prompt('what is your name?');
// console.log(whoAreYou);

//Javascript if/else

/*
var isMarried = 'true';
if(isMarried){
	console.log("YAY");
}
*/

//------------------
// if(23=='23'){
// 	console.log('type coercion takes place here'); //That is the first 23 will get converted to a string
// }

// if(23==='23'){
// 	console.log("will not get printed as there is no type coercion")
// }
//-------------------

///////////////////////////////////////// SWITCH
// var job= 'teacher';

// switch(job){
// 	case 'teacher':
// 		console.log("I am a teacher");
// 		break;
// 	case 'coder':
// 		console.log("I am a coder");
// 	default:
// 		console.log("I do nothing");
// }
////////////////////////////////////////


//////////////stupidity
// var p1age, p2age, p2height, p1height;

// var p1score= p1height + (p1age*p1height);
// var p2score= p2height + (p2age*p2height);


// if (p1score==p2score){
// 	console.log("It is a draww!");
// }
// else if(p1score > p2score){
// 	console.log("p1wins");
// }
// else{
// 	console.log("p2wins");
// }
///////////////////

// an expression produces a value while a statement does not.

/*
function(par) {
	//do
}

var assign = function(par){
	//do 
} */



//////ARRAYS///////////////
/*
var varun= [ 'hello', 'garg',100, false];

varun.push('nooo'); //adds to the end
varun.unshift('whaat') // adds to the begining of array
varun.pop(); //removes from the end
varun.shift(); //removes from the start

varun.indexOf('hello'); //position of hello *ALSO if the element is not there, it returns the value as '-1'*
*/
/////////////////////////



////////OBJECTS. VERY IMPORTANT/////////////////////
////HAVE KEY:VALUE pair/////////

/*
var varun={
	name: 'varun',
	lastName: 'garg',
	yearOfBirth: '1996',
	job: 'teacher'
};

//how to read these values now?
console.log(varun.lastName); // will return garg
console.log(varun['lastName']); //will return garg

varun.lastName='ronaldo';  //change the values of the object
varun['job']='footballer'; //change the values of the object
console.log(varun);  */

/*
var varun= {
	name: 'Varun',
	lastName: 'Garg',
	yearOfBirth: '1996',
	calculateAge: function(yearOfBirth){
		this.age = 2018- this.yearOfBirth; //this refers to the object Varun
	}
}

console.log(varun.calculateAge()); */


/////////////////////////Objects finished///////////////
//---------------------------------------------------//



//////FUNCTION CONSTRUCTOR?????????///////////////////

////////////----->>>> .prototype enables inheritance

/*
var person = function(name,age,city){
	this.name = name;
	this.age = age;
	this.city = city;
}

var varun = new person ('lol', 20 ,'delhi');
var jane = new person ('jane', 50 ,'delhi');
var fonda = new person ('fonda', 40 ,'delhi');

person.prototype.fakeAge = function(){
	console.log( 20 + this.age );
}
person.prototype.lastName = 'Don';

console.log(jane.lastName);
console.log(fonda.lastName);

varun.fakeAge();
console.log(varun);

*/



////////////Object.create///////////////




//Primitives vs Objects

//Primitives - number,string,boolean,null

/*
//Primitives
var a = 1;
var b = a;
a = 2;
console.log(a); //2
console.log(b); //1 

//objects

var obj1 = {
	name: 'abc',
	age: 20
}

var obj2 = obj1;
obj1.age = 30;

consol.log(obj1.age); // 20
consol.log(obj2.age); // 20 (As it is a reference and not primitive.)

//Functions


var age=111;
var obj = {
	name: 'varun',
	city: 'Delhi'
}

function change (a , b){
	a = 30;
	b.city = 'lahore'
}

change (age, obj);

console.log(age); //111 (As it is a primitve)
console.log(obj.city); // Lahore (As it is a reference)

*/



//***** callbackFunction(a, calculateAge); (where calculateAge is a function which will be exectuted later. Hence, Callback that is, it will be called later)
//***** executerightnowFunction (a, calculateAge()); (CalculateAge function will get executed then and there)





//////////Passing functions like variables -- (First class functions, callbacks) ////////

/*

var years = [ 1990, 2002, 1920, 1996, 1983];

function arrayCalc(arr, fn){  //fn is a function here being passed as a parameter
	var arrResult = [];
	for( var i=0; i<arr.length; i++){
		arrResult.push(fn(arr[i]))
	}
	return arrResult;
}

function CalculateAge(el){
	return 2018 - el;
}

function isFullage(el){
	return el >= 18;
}

function maxHeartrate(el){
	if(el >=18 && el < 80){
		return Math.round(206.9 - (0.67 * el));
	}
	else{
		return -1;
	}
}


var ages = arrayCalc (years, CalculateAge); //CalculateAge is a callback being executed later on by arrayCalc

var fullAges = arrayCalc (ages, isFullage); //isFullage (similate as above)

var heartRate = arrayCalc (ages, maxHeartrate);
console.log(ages);
console.log(fullAges);
console.log(heartRate);

//HENCE arrayCalc is being reused again and again. Also, it has a function as a parameter

*/




//////////////First class functions (Returning functions as functions) /////
/*
function cricketTeam (position) {
	if(position === 'opener'){
		return function (name){
			console.log(name+ " will be opening the batting");
		}
	}
	else if(position === 'bowler'){
		return function (name){
			console.log ("Our opening bowler will be " + name);
		}
	}
	else{
		return function (name){
			console.log("Sorry " + name + ", you are not in the team");		}
	}
}

var forOpener = cricketTeam('opener'); //forOpener is now a function
var forBowler = cricketTeam('bowler'); //forBowler is now a function
forOpener('Varun');
//cricketTeam('opener')('varun'); // we are executing this function twice. first with opener. then together with opener and varun
forBowler('Ankit');
//cricketTeam('bowler')('ankit');
cricketTeam('not in team')('varun');
*/











/*

///////////IIFE (immediately invoked functions) ///////////////


//IIFE IS USED FOR DATA PRIVACY
//We fool the parser by surrounding the function with () so that it thinks that it is an expression and not a statement
//IIFE is not used when we have to write reusable code. Just for data protection.

(function(){
	var score = Math.random() * 10;
	console.log(score >= 5);
})(); // () here invokes the function.
//console.log(score); // This will show error as it cannot be accessed. Hence it is secure.


//another example of execution
(function(goodLuck){
	var score = Math.random() * 10;
	console.log(score >= 5- goodLuck); //this will always be true. (because of the goodluck)
})(5);


*/










///////////************MOST IMPORTANT**************////////////////
/////////// CLOSURES ///////////////////////////////////

//Closures- An inner function always has access to the variables and parameters of 
//          the outer function, even after the function has returned.

//It produces cleaner code. 
//Modifying the cricket example above.



/*
function cricketTeam(position){
	return function(name){
		if (position === 'opener'){
			console.log("You will open our batting, "+ name);
		}
		else if(position === 'bowler'){
			console.log( name + "you need to take lots of wickets today"); 
		}
		else{
			console.log("Sorry, "+ name + ",you are not playing")
		}
	}
}

cricketTeam('opener')('varun');


//Main example for closures

function retirement(retirementAge){
	var a = "years left for retirement";
	return function(yearOfBirth){
		var age = 2018 - yearOfBirth;
		console.log((retirementAge - age) + a); //here, 'a' and 'retirementAge' can be accessed event after the function retirement has been returned. This is because it is in the outer function.
	}
}

var retirementIndia = retirement(60);
retirementIndia(1996);

*/













/////BIND CALL AND APPLY///////////////















/*
///Quiz - coding activity

//TO MAKE THE CODE PRIVATE so that it can be used as a plugin,
//we are using IIFE

//(function(){ //IIFE starts 
	var questions = function(question, options,  correctOption){ //question constructor
			this.question = question;
			this.options = options;
			this.correctOption = correctOption;
	}

	var question1 = new questions ('Who is the coolest person?', ['Me' , 'Also me'], 0);
	var question2 = new questions ('Who is DK?', ['KKR' , 'DD'], 0);
	var arr = [question1,question2]; //storing the formed questions in the array


	questions.prototype.displayQuestion = function(){ //inherited all the object keys because of prototype
		console.log(this.question); //displays the question
		for(var i=0; i<arr.length;i++){ //shows the option
			console.log(i + ':' + this.options[i])
		}
	}

	questions.prototype.checkAnswer = function(ans,callback){  //callback here is the score (keepScore) function
		var sc;
		if (ans === this.correctOption){ //check whether chosen answer is correct or not
			console.log("Correct"); 
			sc = callback(true); //this refers to the keepScore which refers to the score function.
			console.log(sc);		
		}
		else{
			console.log('incorrect!');
			sc = callback(false);	
		}
		this.displayScore(sc);
	}

	questions.prototype.displayScore = function(s){
		console.log('Your current score is ' + s);
		console.log('------------------------');
	}

	function score(){
		var sc = 0;
		return function(correct){ //this increases the score if true
			if(correct){
				sc++;
			}
			return sc; //MISTAKE. return score. This was returning the whole method as a string. STUPID.
		}
	}

	var keepScore = score(); //to call the score function  //keepScore can access sc.
	nextQuestion();

	function nextQuestion(){

		var rand = Math.floor(Math.random() * 2); //to choose a random question from array (0 or 1)
		//below should be in order so that the question is displayed before the prompt.
		arr[rand].displayQuestion(); 
		var answer = prompt('Please select the correct answer'); //as prompt takes answer in string.
		if(answer !== 'exit'){
		//console.log(answer);
			arr[rand].checkAnswer(parseInt(answer), keepScore); //passed the score function to checkAnswer.
			nextQuestion();			
		}
	}


//})(); //IIFE ends


//Because of IIFE, no one will be able to access any variable through the console.

*/