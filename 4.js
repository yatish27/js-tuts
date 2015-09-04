// Objects
// The most important and only data structure in JS

var car = {
	model: "BMW",
	color: "black",
	topSpeed: 100
};

var Person = {
	firstName: "Yatish",
	
	lastName: "Mehta",
	
	university: "NC State",
	
	skills: ['Ruby', 'Python', 'Javascript'],

	male: true,

	fullName: function() {
		return(this.firstName + " " + this.lastName);
	},

	utilityFunc: function()	{
		console.log("I am here for timepass");
	},

	setAttr: function(location) {
		this.location = location;
		return(true);
	}
};

console.log(typeof(Person));
console.log(Person.firstName);
console.log(Person.skills);
console.log(Person.fullName());

console.log(Person.setAttr("KP"));
console.log(Person.location);

function addCourseAsProperty(course) {
	this.course = course
}

Person.addCourse = addCourseAsProperty

Person.addCourse("Operating Systems");

console.log(Person.course);






