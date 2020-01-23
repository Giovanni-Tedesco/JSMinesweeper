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

	display() {
		console.log(this.board);
	}

	constructor(size, bombs) {
		this.size = size;
		this.bombs = bombs;

		this.board = [...Array(size)].map(e => Array(size).fill(0));

	}



}