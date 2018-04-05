function Smarthome(){
	
	this.devise = []

	this.createFridge = function(model, type) {
		 this.devise.push(new Fridge(model, type));
	}
	this.createConditioner = function(model, type) {
		return this.devise.push(new Conditioner(model, type));
	}
	this.createBoiler = function(model, type) {
		return this.devise.push(new Boiler(model, type));
	}


}

Smarthome.prototype.deleteDevise = function(dInd){

			this.devise.splice(dInd,1)												
}

Smarthome.prototype.on = function(deviseI){

	
		if(deviseI.type === "Boiler"){
			deviseI.temp = 60
			deviseI.state = true;
		}else if(deviseI.type ==='Conditioner'){
			deviseI.temp = 16
			deviseI.state = true;
			deviseI.windState = 15;
		}else if (deviseI.type === 'Fridge'){
			deviseI.temp = 4
			deviseI.temp2 = -18
			deviseI.state = true;
		}
	

	
	
}

Smarthome.prototype.off = function(deviseI){

		deviseI.state = false;
		deviseI.temp = 0;
		deviseI.windState = 0;
		deviseI.temp2 = 0
	
}

Smarthome.prototype.increaseTemp = function(deviseI){
		if(deviseI.type === 'Fridge'){
			if(deviseI.temp < 6){
			deviseI.temp++
			return deviseI.temp 
			}
		}
		if(deviseI.type === 'Conditioner'){
			if(deviseI.temp < 30){
				deviseI.temp++
			}
		}
		if(deviseI.type === 'Boiler'){
			if(deviseI.temp < 80){
				deviseI.temp = deviseI.temp + 5
				return deviseI.temp
			}
		}
	
}
Smarthome.prototype.decreaseTemp = function(deviseI){
		if(deviseI.type === 'Conditioner'){
			if(deviseI.temp > 16){
				deviseI.temp--
				return deviseI.temp
			}
		}
		if(deviseI.type === 'Fridge'){
			if(deviseI.temp > 4){
				deviseI.temp--
				return deviseI.temp
			}
		}
		if(deviseI.type === 'Boiler'){
			if(deviseI.temp > 50){
				deviseI.temp = deviseI.temp - 5
				return deviseI.temp
			}
		}
}

