let currX = 325; // pixels from left
let currY = 220; // pixels from top

const screen = document.querySelector('#screen');
const paper = screen.getContext("2d");

document.addEventListener('keydown', colorSquare);
document.addEventListener('keydown', erase);

function draw(color, xStart, yStart, xEnd, yEnd, board){
	board.beginPath();
	board.strokeStyle = color;
	board.lineWidth = 5;
	board.moveTo(xStart,yStart);
	board.lineTo(xEnd,yEnd);
	board.stroke(); 
	board.closePath();
}

function colorSquare(event) {
    const key = event.key;
    event.preventDefault();
    switch (key) {
        case "ArrowLeft":
            if (currX <= 0) {
                currX = 0;
                break;
            }
            draw("black", currX - 5, currY, currX, currY, paper);
            currX = currX - 5;
            break;
        case "ArrowRight":
            if (currX >= 649) {
                currX = 649;
                break;
            }
            draw("black", currX, currY, currX + 5, currY, paper);
            currX = currX + 5;
            break;
        case "ArrowUp":
            if (currY <= 0) {
                currY = 0;
                break;
            }
            draw("black", currX, currY, currX, currY - 5, paper);
            currY = currY - 5;
            break;
        case "ArrowDown":
            if (currY >= 439) {
                currY = 439;
                break;
            }
            draw("black", currX, currY, currX, currY + 5, paper);
            currY = currY + 5;
            break;
        }
    console.log(currX, currY);
}

function erase(event) {
	if (event.keyCode == 32) {
		paper.clearRect(0, 0, screen.width, screen.height);
        currX = 325;
        currY = 220;
	}
}