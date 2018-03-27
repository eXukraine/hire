class Boiler {
	constructor(model, type, temp) {
		this.model = model;
		this.type = type;
		this.temp = temp;
	}

								//Включение
	get on() {
		this.state = true;
		console.log('ON')
		this.temp = 60;
	};
								//Выключение
	get off() {
		this.state = false;
		this.temp = false;
		console.log('OFF')
	};

								//Увиличение температуры

    increseTemp(){
    	if(this.temp < 80){
		this.temp++  }
	}	

								//Уменьшение температуры

	decreseTemp() {
		if(this.temp > 40){
		this.temp--}
	}

								
};