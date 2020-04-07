class array{
	constructor(game){
		this.game = game;
		this.trams = [];
		this.x = TRAM_START_X;
		this.y = TRAM_START_Y;
		this.createTrams();
	}
	update() {
		for(let i = 0; i <5; i++){
			if(this.game.oto.x == this.trams[i].x){
				SPEED = 0;
			}
		}
	}

	createTrams() {
		let a = 0;
		for(let i = 0; i < 7; i++){
			this.x = TRAM_START_X + a;
			this.y = TRAM_START_Y;
			let newTram = new tram(this.game,this.x,this.y);
			a+=120;
			this.trams.push(newTram);
		}
	}

	draw() {
		this.trams.forEach((tram) => {
			tram.draw();
		});
	}
}