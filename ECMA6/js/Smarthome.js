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


	fridges(){
		for(let i = 0; i < this.devise.length; i++){
			if(this.devise[i].type === "Fridge"){
				console.log (this.devise[i])
			}
		}


	};
	get boilers(){
		for(let i = 0; i < this.devise.length; i++){
			if(this.devise[i].type === "Boiler"){
				console.log (this.devise[i])
			}
		}
	}
	get conds(){
		for(let i = 0; i < this.devise.length; i++){
			if(this.devise[i].type === "Conditioner"){
				console.log (this.devise[i])
			}
		}
	}

};




