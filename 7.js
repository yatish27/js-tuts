// Basic flows 

var colors = ["Red", "Blue", "Orange", "White", "Black", "Brown", "Green"];

for (i = 0; i < colors.length; i++) { 
    console.log(colors[i])
}

var i = 0
while (i < 10) {
    console.log(i)
    i++;
}
//do while is similar

// Needs break & default 
// case can also have a condition
sigColor = "GREEN"
switch(sigColor){
	case "RED":
		console.log("Please Stop");
		break;
	case "AMBER":
		console.log("Slow down");
		break;
	case "GREEN":
		console.log("GO!");
		break;
	default: 
		console.log("I dont know");				
}

if (false){
	console.log("I am in False. How did I print")
} else {
	console.log("I am true")
}

//undefined, null, NaN, 0, "" (empty string) and false are falsey
if (3) {
	console.log("I am TRUE")
}