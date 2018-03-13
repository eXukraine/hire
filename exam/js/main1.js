"use strict";

class Home {
	constructor(model, type, state) {
		this._model = model;
		this._type = type;
		this._state = state;
		
	}
		//Получить модель девайса

	get model(){
		console.log(this._model);
		return this._model;
	};

		//Получить состояние девайса

	get state(){
		 //console.log(this._state);
		 return this._state;
	};

		//Включить

	on(){
		this._state = true;
		if(this._type === "Conditioner"){
			console.log('Кондиционер включен');
		}
		else if (this._type === "Refrigerator") {
			console.log("Холодильник включен");
		}else if (this._type === "Ligths"){
			console.log("Свет включен")
		}
	};

		//Выключить

	off(){
		this._state = false;
		if(this._type === "Conditioner"){
			console.log("Кондиционер выключен");
		}else if (this._type === "Refrigerator"){
			console.log("Холодильник выключен")
		}else if (this._type === "Ligths"){
			console.log("Свет выключен")
		}
	}

		//Установить температуру

	setTemp(temp){
		this._temp = temp;
		console.log('Установленна температура ' + this._temp + ' градусов цельсия')
	};

		//Получить температуру

	get temp(){
		if(this._type === "Conditioner"){
			console.log("Температура кондиционера установлена " + this._temp + " градусов")
		}else if (this._type === "Refrigerator"){
			console.log("Температура холодильника установлена " + this._temp + " градусов")
			return this._temp;
		}
	};

		//Установить позиции жалюзи на кондиционере

	setWind(position){
		this._position = position;
			console.log("Позиция установлена " + this._position + ' градусов')
	};

		//Открыть и Закрыть холодильник

	 openDoor(){
		this.open = true;
		console.log('Холодильник открыт');
		return open;
	};

	 closeDoor() {
		this.open = false;
		console.log('Холодильник закрыт');
		return open;
	};

		//Диммер для ламп

	dimmer(lux){
		this._lux = lux;
			console.log("Яркость установленна на " + this._lux + " процентов")
	}
}

class Fridge extends Home{
}

let cond2 = new Fridge("Nord", "Refrigerator", false) 
cond2.setTemp(2)


let fridge = new Home("Nord", "Refrigerator");
//let cond = new Home("Mitsubishi", "Conditioner");
let kichen = new Home("Kichen","Ligths");
let bedRoom = new Home("Bedroom","Ligths");
let bathRoom = new Home("Bathroom","Ligths");
let livingRoom = new Home("LivingRoom","Ligths");

class ViewSmartHome {
	constructor(smartHome, rootDiv){
		this.smartHome = smartHome;
		this.rootDiv = rootDiv;
		this._cond2 = cond2;
		this._state = document.createElement("div");
		this._door = document.createElement('div');	
		//this._doorScreen = document.createElement('p');
	}

	stateChange() {
     	 this._state.innerText = `Состояние: ${this._cond2.state ? "вкл." : "выкл."}`;
     	 	if(this._cond2.state === true){
     	 		this._state.className = 'green';	
     	 	}else {
     	 		this._state.className = 'red';
     	 	}
  		 };

  		 doorChange(){
  		 	this._door.innerText = `Хододильник: ${this._cond2.open ? "открыт" : "закрыт"}`;	 	
  		 }

  		 


	 render() {
		let smartHome = document.createElement('div');
		smartHome.className ='smarthome';

		let rootDiv = document.querySelector('root');
		document.body.insertBefore(smartHome,rootDiv);

		

		let model = document.createElement("div");
      		model.innerText = `Модель: ${this._cond2.model}`;
      		smartHome.appendChild(model);

		let onBtn = document.createElement('button')
			onBtn.innerText = 'Вкл';
			onBtn.className = 'on'
			onBtn.addEventListener('click', () => {
				this._cond2.on();
				this.stateChange();
			});

			

		let offBtn = document.createElement('button');
			offBtn.innerText = 'Выкл';
			offBtn.className = 'off';
			offBtn.addEventListener('click', () => {
				this._cond2.off();
				this.stateChange();
			});

			
		let viewTemp = document.createElement('div');
			viewTemp.innerText = `Температура: ${this._cond2.temp}`;


		let openDoor = document.createElement('button');
			openDoor.innerText = 'Open';
			openDoor.className = 'on';
			openDoor.addEventListener('click',() => {
				this._cond2.openDoor();
				this.doorChange();
			});
		let closeDoor = document.createElement('button');
			closeDoor.innerText = 'Закрыть';
			closeDoor.className = 'off';
			closeDoor.addEventListener('click', () => {
				this._cond2.closeDoor();
				this.doorChange();
			});



			this.stateChange();
			this.doorChange();
			
			smartHome.appendChild(onBtn);
			smartHome.appendChild(offBtn);
			smartHome.appendChild(this._state);
			smartHome.appendChild(viewTemp);
			smartHome.appendChild(openDoor);
			smartHome.appendChild(closeDoor);
			smartHome.appendChild(this._door)
	}


}


let cond = new Home("Mitsubishi", "Conditioner");
let vf = new ViewSmartHome(cond2, document.getElementById("root"));
vf.render()
 