class Fridge  {
	constructor(model, type, temp, temp2, state) {
		this.model = model;
		this.type = type;
		this.temp = temp;
		this.temp2 = temp2;
		this.state = false;

		}

	open() {
		this.door = true;
		console.log('Open');
	}

	close() {
		this.door = false;
		console.log('Close');
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