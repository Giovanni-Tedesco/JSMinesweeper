let b = new Board(10, 10);
let gameOver = false;

function setup() {


	createCanvas(400, 400);


	b.setBoard();
	b.configureBoard()
	b.display();


}

function draw() {

	background(255);

	if(gameOver) {
		fill(255, 0, 0);
		textAlign(CENTER, CENTER);
		rect(0, 0, 400, 400);
		fill(0);
		text("GAME OVER", 0, 0, 400, 400)
	} else {
		for(let i = 0; i < b.board.length; i++) {
			for(let j = 0; j < b.board.length; j++) {
				let s = b.board[i][j] + "";

				if(b.revealed[i][j] == true) {

					fill(0);
					textAlign(CENTER, CENTER);
					rect(i * 40, j * 40, 40, 40);
					fill(255);
					text(s, i * 40, j * 40, 40, 40);
				} else {
					fill(45);
					rect(i * 40, j * 40, 40, 40);
				}
			}
		}
	}
}

function mouseClicked() {

	let x = mouseX;
	let y = mouseY;


	gameOver = b.reveal(Math.floor(x / 40), Math.floor(y / 40));
	

}


function keyPressed() {

	switch(key) {
		case 'w':
			// console.log("pressed w");
			let randX = Math.floor(Math.random() * 10);
			let randY = Math.floor(Math.random() * 10);
			console.log()
			b.setRevealed(randX, randY);
			break;


	}
}