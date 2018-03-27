function Fridge(model, type, temp, temp2){
	this.model = model;
	this.type = type;
	this.state = false;
	this.temp = false;
	this.temp2 = false;

}
	Fridge.prototype.off = function(){
		this.state	= false;
		this.temp = false;
		this.temp2 = false;
	}
	Fridge.prototype.increaseTemp = function(){	
		if(this.temp < 6){
			this.temp++
			return this.temp 
		}
	}
	Fridge.prototype.decreaseTemp = function(){
		if(this.temp > 4){
			this.temp--
			return this.temp
		}
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

	Fridge.prototype.on = function(){
		this.state = true;
		this.temp = 4;
		this.temp2 = -18;
	}
