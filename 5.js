//Functions as Class

function Person() {
	this.name = "Yatish"

	this.fullName = function(){
		console.log("Full name");
	}
}



Person.prototype.foo = function(){
	console.log("Everyone has this function");
}


person = new Person();

console.log(person.name);

person.newFunc = function(){
	console.log("I am person's function. Not Person's function");
};

person.newFunc();

person.foo();