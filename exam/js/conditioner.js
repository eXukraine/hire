class Conditioner extends Smarthome{
	constructor(temp, windState) {
		super();
		this.temp = temp;
		this.windState = false;
	}
								//Включение
	get on() {
		this.state = true;
		this.temp = 16;
		console.log('ON')
		this.windState = 45;
		return  this.state;
	};
								//Выключение
	get off() {
		this.temp = false;
		this.state = false;
		this.windState = false;
		console.log('OFF')
		return this.state
	};

								//Увиличение температуры

    increseTemp(){
    	if(this.temp < 30){
		return this.temp++}
	}	

								//Уменьшение температуры

	decreseTemp() {
		if(this.temp > 16){
		return this.temp--}
	}

								//Установк направления воздуха

								//Открыть

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