function Conditioner(model, type, temp, windState){
	this.model = model;
	this.type = type;
	this.temp = false;
	this.windState = false;
}


Conditioner.prototype.on = function(){
	this.state = true;
	this.temp = 16;
	this.windState = 15;
}
Conditioner.prototype.off = function(){
	this.state = false;
	this.temp = false;
	this.windState = false;
}
Conditioner.prototype.increaseTemp = function(){
	if(this.temp < 30){
		this.temp++
		return this.temp
	}
}
Conditioner.prototype.decreaseTemp = function(){
	if(this.temp > 16){
		this.temp--
		return this.temp
	}
}
Conditioner.prototype.windStateDwn = function(){
	if(this.windState < 90){
		this.windState = this.windState + 15
		return	this.windState
	}
}
Conditioner.prototype.windStateUp = function(){
	if(this.windState > 15)
		this.windState = this.windState - 15
		return this.windState
}