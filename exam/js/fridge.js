class Fridge extends Smarthome {
	constructor(temp, temp2) {
		super()
		this.temp = temp;
		this.temp2 = temp2;

		}
	get on() {
		this.state = true;
		console.log('ON')
		this.temp = 4;
		this.temp2 = -18;
		return this.state;
	};
	get off() {
		this.state = false;
		this.temp = "";
		this.temp2 = "";
		console.log('OFF')
		return this.state;
	};
	open() {
		this.door = true;
		console.log('Open');
	}

	close() {
		this.door = false;
		console.log('Close');
	}

	setTemp(temp){
		if(temp <= 6){
			this.temp = temp;
		}
		else{
			console.log("Вы превысили показания по температуре")
		}
	}
	setTemp2(temp2){
		if((temp2 < -18) && (temp2 > -24)){
			this.temp2 = temp2;
		}
		else{
			console.log("Вы превысили показания по температуре")
		}
	}

};