class handles {
    constructor (game){
        this.game = game ;
        this.check1 = false;
        this.listenKeyBoard();
    }
    listenKeyBoard(){
		document.addEventListener('keydown', (event) => {
			console.log(event.code);
			switch (event.code) {
				case 'Digit1':
                    this.check1 = true;
					SPEED = 1;
					break;
			}
		});
    }
    update(){

    }
    draw(){
        if(this.check1){
            this.game.context.font = "40px Georgia";
            this.game.context.fillText('1',170,240);
        }
    }

}