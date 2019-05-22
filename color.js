var numOfSquare= 6;
var colors = generateRandColors(numOfSquare);
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var squares = document.querySelectorAll(".square");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn =  document.querySelector("#hardBtn");

colorDisplay.textContent = pickedColor;

easyBtn.addEventListener("click", function(){
  easyBtn.classList.add("selected");
  hardBtn.classList.remove("selected");
  numOfSquare = 3;
  colors = generateRandColors(3);
  pickedColor = pickColor();
  colorDisplay.textContent =pickedColor;
  for(var i =0;i<squares.length;i++){
  	if(colors[i]){
  		squares[i].style.background = colors[i];
  	}
  	else{
  		squares[i].style.display = "none";
  	}
  }
})

hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	colors = generateRandColors(6);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
	for(var i =0;i<squares.length;i++){
  	
  		squares[i].style.background = colors[i];
  	    squares[i].style.display  = "block";
  	
  }
})

reset.addEventListener("click", function(){
	colors = generateRandColors(6);
	pickedColor = pickColor();
	colorDisplay.textContent  = pickedColor;	
	this.textContent = "New Colors";
	messageDisplay.textContent =" ";
	for(var i =0;i<squares.length;i++){
        squares[i].style.background = colors[i];
	}
	h1.style.background = "steelblue";
})
for(var i =0;i<squares.length;i++){
	squares[i].style.background = colors[i];
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.background;
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			reset.textContent = "Play Again";
			changeColor(clickedColor);
			h1.style.background = clickedColor;
		}
		else{
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
		}

	});
}

function changeColor(color){
	for(var i =0;i<squares.length;i++){
		squares[i].style.background = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandColors(num){
	var arr = [];
   for(var i =0;i<num;i++){
    arr.push(randomColor());
   }
	return arr;
}

function randomColor(){
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);
	return "rgb(" + red + ", " + green + ", " + blue + ")";
}