// Gotchas 
// There are many

// number, string vs Number, String
// Implicit conversion  
// "".toUpperCase();


//== vs ===
//!= vs !==
2 == '2' //true

var c = "hello"
c == "hello"
c === "hello"

var foo = new String("hello");
foo == "hello"
foo === "hello"

var o = { a: 7 }
var b = { a: 7 }

o == b; //false as they are different objects

//The identity (===) operator behaves identically to the equality (==) operator 
// except no type conversion is done, and the types must be the same to be considered equal.
// As per Douglas Crockford's dont use == 

//2. Scary one
(function(){
  var a = b = 3;
})();

console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));

//
// b = 3;
// var a = b;
//

//3. Scary one again 
function foo1()
{
  return {
      bar: "hello"
  };
}

function foo2()
{
  return
  {
      bar: "hello"
  };
}

console.log(foo1());
console.log(foo2());

//4. Screw up your math
//http://floating-point-gui.de/
console.log(0.1 + 0.2); 
