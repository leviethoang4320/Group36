class game {
	constructor(){
		this.canvas = null;
		this.context = null;
		this.init();
		this.loop();
		this.listenKeyBoard();
	}
	init(){
		this.canvas = document.createElement('canvas');
		this.context = this.canvas.getContext('2d');
		this.canvas.width = GAME_WIDTH;
		this.canvas.height = GAME_HEIGHT;
		document.body.appendChild(this.canvas);
		this.oto = new oto(this);
		this.array = new array(this,this.oto);
		this.start = new start(this);
	}

	loop(){
		this.update();
		this.draw();
		setTimeout( () => this.loop(),20);
	}

	listenKeyBoard(){
		document.addEventListener('keydown', (event) => {
			console.log(event.code);
			switch (event.code) {
				case 'Digit1':
					this.context.fillText("XIN CHAO",400,230);
					SPEED = 1;
					break;
			}
		});
	}

	update(){
		this.context.clearRect(OTO_START_X, OTO_START_Y, 1000, 70);
		this.oto.update();
		this.array.update();
		
	}

	draw(){
		this.start.draw();
		this.array.draw();
		this.oto.draw();
		
	}

}
var g = new game();