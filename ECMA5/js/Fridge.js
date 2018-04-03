function Fridge(model, type, temp, temp2, state){
	this.model = model;
	this.type = type;
	this.state = state;
	this.temp = 0;
	this.temp2 = 0;

}

	Fridge.prototype.increaseTemp2 = function(){
		if(this.temp2 > -24){
			this.temp2--
			return this.temp2 
		}
	}
	Fridge.prototype.decreaseTemp2 = function(){
		if(this.temp2 < -18){
			this.temp2++
			return this.temp2
		}
	}

/*	Fridge.prototype.on = function(){
		this.state = true;
		this.temp = 4;
		this.temp2 = -18;
	}*/
