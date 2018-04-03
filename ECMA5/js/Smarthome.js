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

Smarthome.prototype.__proto__.deleteDevise = function(){
	let dellIndex = this.Id;
						console.log(dellIndex)
						console.log(this)
						dev.devise.splice(dellIndex,1)
						//console.log(this)

					
}
Smarthome.prototype.__proto__.on = function(){
	if(this.type === "Boiler"){
		this.temp = 60
	}else if(this.type ==='Conditioner'){
		this.temp = 16
	}else if (this.type === 'Fridge'){
		this.temp = 4
		this.temp2 = -18
	}

	this.state = true;
	this.windState = 15;
}

Smarthome.prototype.__proto__.off = function(){
	this.state = false;
	this.temp = 0;
	this.windState = 0;
	this.temp2 = 0
}

Smarthome.prototype.__proto__.increaseTemp = function(){
	if(this.type === 'Fridge'){
		if(this.temp < 6){
		this.temp++
		return this.temp 
		}
	}
	if(this.type === 'Conditioner'){
		if(this.temp < 30){
			this.temp++
			return this.temp
		}
	}
	if(this.type === 'Boiler'){
		if(this.temp < 80){
			this.temp = this.temp + 5
			return this.temp
		}
	}
}
Smarthome.prototype.__proto__.decreaseTemp = function(){
	if(this.type === 'Conditioner'){
		if(this.temp > 16){
			this.temp--
			return this.temp
		}
	}
	if(this.type === 'Fridge'){
		if(this.temp > 4){
			this.temp--
			return this.temp
		}
	}
	if(this.type === 'Boiler'){
		if(this.temp > 50){
			this.temp = this.temp - 5
			return this.temp
		}
	}
}

