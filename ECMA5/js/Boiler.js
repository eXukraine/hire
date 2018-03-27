function Boiler(model, type, temp){
	this.model = model;
	this.type = type;
	this.temp = false;
	this.state = false;
}


	Boiler.prototype.on = function(){
		this.state = true;
		this.temp = 60;
	}
	Boiler.prototype.off = function(){
		this.state = false;
		this.temp = false;
	}
	Boiler.prototype.increaseTemp = function(){
		if(this.temp < 80){
			this.temp = this.temp + 5
			return this.temp
		}
	}
	Boiler.prototype.decreaseTemp = function(){
		if(this.temp > 50){
			this.temp = this.temp - 5
			return this.temp
		}
	}