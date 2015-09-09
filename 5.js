// Functions as Class
// Functions are objects.
// Objects---Functions, Arrays, Objects

function Person(name) {
	this.name = name

	this.fullName = function(){
		console.log("Full name");
	}
}



Person.prototype.foo = function(){
	console.log("Everyone has this function");
}

person = new Person("Yatish");

console.log(person.name);

person.newFunc = function(){
	console.log("I am person's function. Not Person's function");
};

person.newFunc();

person.foo();
