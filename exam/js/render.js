'use strict'


function CreateDeviseForm(){
	let rootElem = document.getElementById('root');
		rootElem.innerHTML= "";
	let form = document.createElement("form");
	let select = document.createElement('select');
	let model = document.createElement('input');
	let type = document.createElement('input');
	let submitBtn = document.createElement('input')
	let option = document.createElement('option')


		select.placeholder = "Введите устройство";
		select.id = "select";
		select.innerHTML = '<option value="" disabled selected>Выбирите устройство</option><option value="Conditioner">Conditioner</option><option value="Fridge">Fridge</option><option value="Boiler">Boiler</option>'
		select.placeholder = "Выбирите устройство";	

		model.placeholder ="Введите модель устройства";
		model.type = "text";
		model.id = "model";
		model.required = "required";

		type.placeholder = "Введите тип устройства";
		type.type = "text";
		type.id = "type";
		type.title = "Conditioner, Fridge, Boiler etc."

		submitBtn.type = "submit";
		submitBtn.id = "button"
		submitBtn.value = "Создать";
		submitBtn.className = "submitBtn"



		form.appendChild(select);
		form.appendChild(model);
		form.appendChild(type);
		form.appendChild(submitBtn);
		rootElem.appendChild(form)

}

CreateDeviseForm()

let rootElem = document.getElementById('root2');
let submitBtnClick = document.getElementById("button")
let inp = document.getElementById('select');
let model = document.getElementById('model');
let type = document.getElementById('type');


	submitBtnClick.addEventListener("click",(event)=> {
		validation()
		rootElem.innerHTML = "";
		rend()
		clearHtml()
		event.preventDefault()
})


let clearHtml = function(){
	inp.value = "";
	model.value = "";
	type.value = "";
}

let validation = function(){

	if (inp.value == "Fridge"){
		let fridge = new Fridge;
		fridge.createDev(model.value, type.value)
		Smarthome.devise.push(fridge);
	}
	else if (inp.value == "Conditioner"){
		let cond = new Conditioner;
		cond.createDev(model.value, type.value)
		Smarthome.devise.push(cond);
	}
	else if (inp.value == "Boiler") {
		let boiler = new Boiler;
		boiler.createDev(model.value, type.value)
		Smarthome.devise.push(boiler);
	}
}





let rend = function() {
	for(let i = 0; i < Smarthome.devise.length; i++){
		function render() {
			let targetItem = document.createElement('div');
				targetItem.innerHTML = "";
				targetItem.className = "rootDiv";
				targetItem.style = "background-color: #FF4500";

			let temp = document.createElement('div');
				temp.innerText = `Температура: 0`;

			let temp2 = document.createElement('div');
				temp2.innerText = 'Температура морозильной камеры: 0';

			let windState = document.createElement('div');
				windState.innerText = `Жалюзи: закрыты`;

			let stateV = Smarthome.devise[i].state;

			let stateValue = document.createElement('p');

			let stateItem = document.createElement('div');
				stateItem.innerText = `Состояние: Выкл.`;
				stateItem.appendChild(stateValue);
				
			

			let model = document.createElement('div');
				model.innerText = `Model: ${Smarthome.devise[i].model}`;
				model.className = "model";

			let item = document.createElement('div');
				item.innerText = `Type: ${Smarthome.devise[i].type}`;

						//Удаление 

			let dellBtn = document.createElement('button');
				dellBtn.className = 'dellBtn'
				dellBtn.addEventListener('click', () => targetItem.innerHTML = "")
				dellBtn.addEventListener('click', () => rootElem.innerHTML = "" )
				
				dellBtn.addEventListener('click', () => {
					let dellIndex = Smarthome.devise.indexOf(Smarthome.devise[i]);
						Smarthome.devise.splice(dellIndex,1)
					})
				dellBtn.addEventListener('click', () => rend())


						// Включение
			let onBtn = document.createElement('button');
				onBtn.innerText = 'On';
				onBtn.className = 'on'
				onBtn.addEventListener('click', () => Smarthome.devise[i].on)
				onBtn.addEventListener('click', () => {if (Smarthome.devise[i].state === true){
					stateItem.innerText = `Состояние: ${stateV?'Выкл.':'Вкл.'}`;
					targetItem.style = "background-color: #90EE90"
					}
				})

				onBtn.addEventListener('click', () => temp.innerText = `Температура: ${Smarthome.devise[i].temp}`)
				onBtn.addEventListener('click', () => windState.innerText = `Жалюзи: ${Smarthome.devise[i].windState} градусов`) 
				onBtn.addEventListener('click', () => temp2.innerText = `Температура морозильной камеры: ${Smarthome.devise[i].temp2}`)

				

			let offBtn = document.createElement('button');
				offBtn.innerText = "Off";
				offBtn.className = 'off'
				offBtn.addEventListener('click', () => Smarthome.devise[i].off)
				offBtn.addEventListener('click', () => {if (Smarthome.devise[i].state === false){
					stateItem.innerText = `Состояние: Выкл.`;
					targetItem.style = "background-color: #FF4500"
					}
				})
				offBtn.addEventListener('click', () => temp.innerText = `Температура: 0`)
				offBtn.addEventListener('click', () => windState.innerText = `Жалюзи: закрыты`)
				offBtn.addEventListener('click', () => temp2.innerText = `Температура морозильной камеры: 0`)

			let windUpBtn = document.createElement('button');
				windUpBtn.innerText = 'Up';
				windUpBtn.addEventListener('click', () => Smarthome.devise[i].windUp());
				windUpBtn.addEventListener('click', () => { windState.innerText = `Жалюзи: ${Smarthome.devise[i].windState} градусов`})

			let windDwBtn = document.createElement('button');
				windDwBtn.innerText = 'Dwn'
				windDwBtn.addEventListener('click', () => Smarthome.devise[i].windDw())
				windDwBtn.addEventListener('click', () => { windState.innerText = `Жалюзи: ${Smarthome.devise[i].windState} градусов`})


			let tempUp = document.createElement('button');
				tempUp.innerText = '+';
				tempUp.addEventListener('click', () => Smarthome.devise[i].increseTemp())
				tempUp.addEventListener('click', () => temp.innerText = `Температура: ${Smarthome.devise[i].temp}`)

			let tempDwn = document.createElement('button');
				tempDwn.innerText = '-';
				tempDwn.addEventListener('click', () => Smarthome.devise[i].decreseTemp())
				tempDwn.addEventListener('click', () => temp.innerText = `Температура: ${Smarthome.devise[i].temp}`)

			let tempUp2 = document.createElement('button');
				tempUp2.innerText = '+';
				tempUp2.addEventListener('click', () => Smarthome.devise[i].increseTemp2())
				tempUp2.addEventListener('click', () => temp2.innerText = `Температура морозильной камеры: ${Smarthome.devise[i].temp2}`)

			let temp2Dwn = document.createElement('button');
				temp2Dwn.innerText = '-';
				temp2Dwn.addEventListener('click', () => Smarthome.devise[i].decreseTemp2())
				temp2Dwn.addEventListener('click', () => temp2.innerText = `Температура морозильной камеры: ${Smarthome.devise[i].temp2}`)


				targetItem.appendChild(item);
				targetItem.appendChild(model);
				targetItem.appendChild(stateItem);
				stateItem.appendChild(stateValue)
				targetItem.appendChild(onBtn);
				targetItem.appendChild(offBtn);
					if (Smarthome.devise[i].type == "Conditioner"){
						targetItem.appendChild(windState);
						targetItem.appendChild(windUpBtn);
						targetItem.appendChild(windDwBtn);
					}
				targetItem.appendChild(temp);
				targetItem.appendChild(tempUp);
				targetItem.appendChild(tempDwn);

					if(Smarthome.devise[i].type === "Fridge"){
						targetItem.appendChild(temp2)
						targetItem.appendChild(tempUp2)
						targetItem.appendChild(temp2Dwn)
					}
				targetItem.appendChild(dellBtn)
				rootElem.appendChild(targetItem);

			}

		render()

	}
}











