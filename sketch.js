function setup() {

	createCanvas(400, 400);

	let b = new Board(10, 10); 
	b.setBoard();
	b.configureBoard()
	b.display();


}

function draw() {

	background(20);



}