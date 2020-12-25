//alert("Hello!")

//var secretNumber = Math.floor(Math.random() * 20)
/*
var secretNumber = 13

var ans = prompt("Guess a number!")

if (ans > secretNumber) {
	alert("It is too big!");
} else if (ans < secretNumber) {
	alert("It is too small!");
} else {
	alert("Congrats! You got the right answer!!");
}
*/
/*
for (var a = -10; a <= 19; a++){
	console.log(a);
}

for (var b = 10; b <= 40; b++){
	if (b % 2 == 0){
		console.log(b);
	}
}

for (var c = 300; c <= 333; c++){
	if (c % 2 != 0){
		console.log(c);
	}
}

for (var d = 5; d <= 50; d++){
	if (d % 3 == 0 && d % 5 == 0){
		console.log(d);
	}
}
*/
/*
var ans = prompt("Are we there yet?")

while(ans.indexOf("yes") === -1){
	var ans = prompt("Are we there yet?");
}

alert("YaY! We made it!!")
*/

/*
function isEven(a) {
	if (a % 2 == 0) {
		console.log("True");
	} else {
		console.log("False");
	}
}
*/
/*
function factorial(num){
	var target = 1
	for (var n = 1; n <= num; n++){
		target = target*n
	}
	return target
}
*/
/*
function kebabToSnake(s){
	if ("-" in s.split('')){
		var sr = s.replace("-","_");
		// the above replace equal to var sr = s.replace(/-/g,"_");
	    console.log(sr);
	} else {
		var sr = s.replace("_","-");
	    console.log(sr);
	}
}
*/

var todos = ["Study FEM"];

var input = prompt("What do you want to do?");

while (input !== "quit"){
	if (input == "list"){
		console.log(todos);
	} else if (input == "new"){
		var todoNew = prompt("Enter new todo:");
		todos.push(todoNew);
    }
    
    input = prompt("What do you want to do?");
}

console.log("Ok, you just quit the App.");