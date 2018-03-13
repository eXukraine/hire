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

	increseTemp(){
		if(this.temp < 6){
			return this.temp++;
		}
		else{
			console.log("Вы превысили показания по температуре")
		}
	}

	decreseTemp() {
		if(this.temp > 4){
		return this.temp--}
	}
	increseTemp2(){
		if(this.temp2 > -24){
			return this.temp2--;
		}
	}
	decreseTemp2() {
		if (this.temp2 < -18){
			return this.temp2++
		}
	}

};