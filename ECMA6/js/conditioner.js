class Conditioner{
	constructor(model, type, temp, windState) {
		this.model = model;
		this.type = type;
		this.temp = temp;
		this.windState = undefined;
	}

	windUp() {

	if(this.windState < 90){
		this.windState = this.windState + 15
		console.log('Угол наклона лопаток ' + this.windState)
				
			}else{
				return "Лопатки открыты на максимум";
			}
		return this.windState;
	};

								//Закрыть


	windDw() {
		
		
			if(this.windState > 15){
				this.windState = this.windState - 15
				console.log('Угол наклона лопаток ' + this.windState)
			}else{
				return "Лопатки закрыты";
			}
		return this.windState;
	}
};