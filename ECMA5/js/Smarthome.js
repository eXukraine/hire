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

/*var q = new	Smarthome;
q.createFridge('Nord', 'Fridge')
q.createConditioner("Midea", 'Conditioner')
q.createBoiler('Ariston', 'Boiler')*/