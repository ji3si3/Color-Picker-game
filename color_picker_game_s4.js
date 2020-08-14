var numSquares = 12;
var colors = generateRandomColors(numSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var stage5 =document.querySelector("a");


stage5.style.display="none";

resetButton.addEventListener("click",function(){
    colors=generateRandomColors(numSquares);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background=colors[i];
    }
h1.style.background="#232323";
})


function reset() {
    colors = generateRandomColors(numSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplay to match picked Color
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    //change colors of squares
    for(var i = 0; i < squares.length; i++) {
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.background = "steelblue";
}

resetButton.addEventListener("click", function() {
    reset();
    stage5.style.display="none";
});
colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
    squares[i].style.background = colors[i];
    squares[i].addEventListener("click", function() {
        var clickedColor = this.style.background;
        if(clickedColor === pickedColor) {
           messageDisplay.textContent="correct";
           resetButton.textContent="play again?";
           stage5.style.display="";
           changeColor(clickedColor);
 
           h1.style.background = clickedColor;
        } else {
            this.style.background="#232323";
            messageDisplay.textContent="try again";
        }
    });

}

function changeColor(color){
    for(var i=0;i<squares.length;i++){
        squares[i].style.background = color;
    }
}



function pickColor(){
var random = Math.floor(Math.random()*colors.length);
return colors[random];
}

function generateRandomColors(num){
    var arr=[]
    for (var i = 0; i < num;i++){
        arr.push(randomColor())

    }
return arr;
}


function randomColor(){
    var r = Math.floor(Math.random() *256);
    var g = Math.floor(Math.random() *256);
    var b = Math.floor(Math.random() *256);
    return "rgb(" + r +", " + g + ", "+ b + ")" ;
}