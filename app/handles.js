class handles {
    constructor (game){
        this.game = game ;
        this.checks = [];
        this.listenKeyBoard();
        this.checked();
    }
    checked(){
       for(let i=0; i< 5; i++){
           this.checks[i]=false;
       }
    }
    listenKeyBoard(){
		document.addEventListener('keydown', (event) => {
			console.log(event.code);
			switch (event.code) {
				case 'Digit1':
                    if(this.game.oto.x == this.game.array.trams[0].x){
                        //console.log('aaa');
                    
                        this.checks[0] = true;
                        SPEED = 1;
                    }
                    break;
                    case 'Digit2':
                        if(this.game.oto.x == this.game.array.trams[1].x){
                            //console.log('aaa');
                        
                            this.checks[1] = true;
                            SPEED = 1;
                        }
                        break;
                    case 'Digit3':
                        if(this.game.oto.x == this.game.array.trams[2].x){
                            //console.log('aaa');
                        
                            this.checks[2] = true;
                            SPEED = 1;
                        }
                        break;
                    case 'Digit4':
                        if(this.game.oto.x == this.game.array.trams[3].x){
                            //console.log('aaa');
                        
                            this.checks[3] = true;
                            SPEED = 1;
                        }
                        break;
                    case 'Digit5':
                        if(this.game.oto.x == this.game.array.trams[4].x){
                            //console.log('aaa');
                        
                            this.checks[4] = true;
                            SPEED = 1;
                        }
                        break;
			}
		});
    }
    update(){
       
    }
    draw(){
        for(let i = 0; i<5; i++){
        if(this.checks[i]){
            this.game.context.font = "40px Georgia";
            this.game.context.fillText(i+1,this.game.array.trams[i].x+20,this.game.array.trams[i].y+40);
        }
    }
    }

}