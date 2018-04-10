class Smarthome {
	constructor() {
		this.devise = [];
	}


	createFridge( model, type){
		this.devise.push(new Fridge(model, type))
	}
	createCond(model, type){
		this.devise.push(new Conditioner(model, type))
	}
	createBoiler(model, type){
		this.devise.push(new Boiler(model, type))
	}




	deleteDevise(dInd){

			this.devise.splice(dInd,1)
		
	};


	on(devI) {
		if(devI.type === "Boiler"){
			devI.temp = 60
			devI.state = true;
		}else if(devI.type ==='Conditioner'){
			devI.temp = 16
			devI.state = true;
			devI.windState = 15;
		}else if (devI.type === 'Fridge'){
			devI.temp = 4
			devI.temp2 = -18
			devI.state = true;
		}
	};
								//Выключение
	off(devI) {
		devI.temp = 0;
		devI.state = false;
		devI.windState = 0;
		devI.temp2 = 0;

	};

								//Увиличение температуры

    increseTemp(devI){
		if(devI.type === 'Fridge'){
			if(devI.temp < 6){
			devI.temp++
			return devI.temp 
			}
		}
		if(devI.type === 'Conditioner'){
			if(devI.temp < 30){
				devI.temp++
			}
		}
		if(devI.type === 'Boiler'){
			if(devI.temp < 80){
				devI.temp = devI.temp + 5
				return devI.temp
			}
		}
	}	

								//Уменьшение температуры

	decreseTemp(devI) {
		if(devI.type === 'Conditioner'){
			if(devI.temp > 16){
				devI.temp--
				return devI.temp
			}
		}
		if(devI.type === 'Fridge'){
			if(devI.temp > 4){
				devI.temp--
				return devI.temp
			}
		}
		if(devI.type === 'Boiler'){
			if(devI.temp > 50){
				devI.temp = devI.temp - 5
				return devI.temp
			}
		}
	}



						//Работает но не используется


	boilers(){
		for(let i = 0; i < this.devise.length; i++){
			if(this.devise[i].type === "Boiler"){
			}
		}
	}
	fridges(){
		for(let i = 0; i < this.devise.length; i++){
			if(this.devise[i].type === "Fridge"){

			}
		}
	}
	conds(){
		for(let i = 0; i < this.devise.length; i++){
			if(this.devise[i].type === "Conditioner"){
			}
		}
	}

};




