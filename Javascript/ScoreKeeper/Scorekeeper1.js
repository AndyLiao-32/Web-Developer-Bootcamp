var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var resetButton = document.getElementById("reset");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var numInput = document.getElementById("input");
var winningScoreDisplay = document.querySelector("p span");
var h3 = document.querySelector("#h3");
var p1score = 0;
var p2score = 0;
var gameover = false;
var winningScore = 5;

p1Button.addEventListener("click", function(){
	if (!gameover){
		p1score++;
		if (p1score === winningScore){
			p1Display.classList.add("winner");
			gameover = true;
			h3.textContent = "Player 1 is the winner!!";
		}
		p1Display.textContent = p1score;
	}
});

p2Button.addEventListener("click", function(){
	if (!gameover){
		p2score++;
		if (p2score === winningScore){
			p2Display.classList.add("winner");
			gameover = true;
			h3.textContent = "Player 2 is the winner!!";
		}
		p2Display.textContent = p2score;
	}
});

resetButton.addEventListener("click", function(){
	reset();
});

function reset(){
	p1score = 0;
	p2score = 0;
	p1Display.textContent = 0;
	p2Display.textContent = 0;
	gameover = false;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	h3.textContent = "Who will be the winner?";
};

numInput.addEventListener("change", function(){
	winningScoreDisplay.textContent = this.value;
	winningScore = Number(this.value);
	reset();
});