var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
	setUpModeBtn();
    setUpSquares();
    reset();
}

function setUpModeBtn() {
	for (var i = 0; i < modeButtons.length; i++) {
	  modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "EASY" ? numSquares = 3: numSquares = 6;
		/*if (this.textContent === "Easy") {
			numSquares = 3;
		} else {
			numSquares = 6;
		}*/
		reset();
	  });
    };
}

function setUpSquares(){
	for (var i = 0; i < squares.length; i++) {
	    //add click Listeners to squares
	    squares[i].addEventListener("click", function(){
		    // grab color to clicked square
		    var clickedColor = this.style.backgroundColor;
		    // compare color to clicked square
		    if (clickedColor === pickedColor) {
			    messageDisplay.textContent = "Correct!"
			    changeColor(clickedColor);
			    h1.style.backgroundColor = clickedColor;
			    resetButton.textContent = "Play Again?";
		    } else {
			    this.style.backgroundColor = "#232323";
			    messageDisplay.textContent = "Try Again!"
		    }
	    })
    };
}

function reset() {
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	resetButton.textContent = "New Colors";
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function(){
	reset();
})

function changeColor(color) {
	//loop through all squares
	for (var i = 0; i < squares.length; i++) {
		// change all squares into that color
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	// make an array
	var arr = [];
	// add number random color to array
	for (var i = 0; i < num; i++) {
		// get random color and push into array
		arr.push(randomColor())
	};
	// return arr
	return arr;
}

function randomColor() {
	// pick a "red" number from 0 - 255
	var r = Math.floor(Math.random()*256)
	// pick a "green" number from 0 - 255
	var g = Math.floor(Math.random()*256)
	// pick a "blue" number from 0 - 255
	var b = Math.floor(Math.random()*256)
	return "rgb("+r+", "+g+", "+b+")"; // must add spacing after comma","
}