class game {
	constructor(){
		this.canvas = null;
		this.context = null;
		this.init();
		this.loop();
		
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
		this.handles = new handles(this);
	}

	loop(){
		this.update();
		this.draw();
		setTimeout( () => this.loop(),20);
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
		this.handles.draw();
	}

}
var g = new game();