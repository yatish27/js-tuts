// Useful methods for the object Array.

var colors = ["Red", "Blue", "Orange", "White", "Black", "Brown", "Green"];
var nos = [1,2,3,4]

colors.length

colors.forEach(function(item){
	console.log(item);
});

colors.forEach(function(item, index, array){
	console.log(index);
});

colors.push("Yellow")
//colors.pop()
//colors.shift(), colors.unshift()

//-1 if not present
colors.indexOf("White")

nos.filter(function(item){
	return(item%2==0)
});

nos.map(function(item){
	return(item*2)
});

nos.reduce(function(item, result){
	return(result + item);
},0);



