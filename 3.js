// Functions
function name() {
	console.log("Yatish");
};

function fullName(firstName, lastName) {
	return(firstName + " " + lastName);
};

var sum = function(a, b) { return (a + b); };

(function () {
	console.log("I am inside");    
}());

name();
console.log(fullName("Yatish", "Mehta"));
console.log(sum(2, 8));

console.log(sum.call(this, 2, 8));

// Check for default value inside the function 
// in JS function is first class citizen

function foo(handler) {
	handler();
};

foo(name);

foo(function(){
	console.log("I am anys function");
});

