function Conditioner(model, type, temp, windState){
	this.model = model;
	this.type = type;
	this.temp = temp;
	this.windState = windState;
	this.state = false;
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