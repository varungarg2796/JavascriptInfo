
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

