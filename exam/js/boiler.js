class Boiler extends Smarthome{
		constructor(temp) {
			super()
			this.temp = temp;
		}

								//Включение
	get on() {
		this.state = true;
		console.log('ON')
		this.temp = 60;
		return this.state;
	};
								//Выключение
	get off() {
		this.state = false;
		this.temp = false;
		console.log('OFF')
		return this.state
	};

								//Увиличение температуры

    increseTemp(){
    	if(this.temp < 80){
		return this.temp++  }
	}	

								//Уменьшение температуры

	decreseTemp() {
		if(this.temp > 40){
		return this.temp--}
	}

								
};