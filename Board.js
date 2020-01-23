class Board {


	setBoard() {
		let t = this.bombs;


		while(t > 0) {
			let x = Math.floor(Math.random() * (this.size - 1));
			let y = Math.floor(Math.random() * (this.size - 1));

			this.board[x][y] = -1

			t--
		}
	}

	checkSurrounding(i, j) {

		var new_i = 0;
		var new_j = 0;
		let count = 0;

		let dirs = [ 
			[0, 1],
			[0, -1],
			[1, 0],
			[-1, 0],
			[1, 1],
			[1, -1],
			[-1, 1],
			[-1, -1],
		]

		if(this.board[i][j] == -1) {
			return 0;
		}

		for(let k = 0; k < dirs.length; k++) {
			new_i = i + dirs[k][0];
			console.log("New I is: " + new_i);
			new_j = j + dirs[k][1];
			console.log("New J is: " + new_j);

			if(new_i >= 0 && new_i < this.board.length && new_j >= 0 && new_j < this.board.length) {
				if(this.board[new_i][new_j] == -1) {
					count++;
				}
			}

		}

		return count;

	}

	configureBoard() {
		for(let i = 0; i < this.board.length; i++) {
			for(let j = 0; j < this.board.length; j++) {

				console.log("I: " + i + "J: " + j);
				this.board[i][j] += this.checkSurrounding(i, j);

			}
		}

	}

	reveal(i, j) {
		if(this.board[i][j] == -1){
			console.log("Game over");
			return true;
		} else if(this.board[i][j] != 0) {
			this.revealed[i][j] = true;
			return false;
		} else {

			this.revealHelper(i, j);
			return false;

		}



	}

	revealHelper(i, j) {

		if(i == 0 || i >= this.board.length || j == 0 || j >= this.board.length || this.revealed[i][j] == true || this.board[i][j] == -1) {
			return;
		} else if(this.board[i][j] > 0) {
			this.revealed[i][j] = true;
			return;
		} else {
			this.revealed[i][j] = true;

			this.revealHelper(i + 1, j);  
			this.revealHelper(i - 1, j);
			this.revealHelper(i, j + 1); 
			this.revealHelper(i, j - 1); 
			this.revealHelper(i + 1, j + 1); 
			this.revealHelper(i + 1, j - 1); 
			this.revealHelper(i - 1, j + 1);
			this.revealHelper(i - 1, j - 1);
		
		}


	}

	setRevealed(i, j) {
		this.revealed[i][j] = true;
	}

	display() {
		console.log(this.board);
	}

	constructor(size, bombs) {

		this.size = size;
		this.bombs = bombs;

		this.board = [...Array(size)].map(e => Array(size).fill(0));
		this.revealed = [...Array(size)].map(e => Array(size).fill(false));

	}



}