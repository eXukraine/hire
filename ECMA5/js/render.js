'use strict'


function CreateDeviseForm(){
	let rootElem = document.getElementById('root');
		rootElem.innerHTML= "";
	let form = document.createElement("form");
	let select = document.createElement('select');
	let model = document.createElement('input');
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


		submitBtn.type = "submit";
		submitBtn.id = "button"
		submitBtn.value = "Создать";
		submitBtn.className = "submitBtn"



		form.appendChild(select);
		form.appendChild(model);
		//form.appendChild(type);
		form.appendChild(submitBtn);
		rootElem.appendChild(form)

}

CreateDeviseForm()

let rootElem = document.getElementById('root2');
let submitBtnClick = document.getElementById("button")
let inp = document.getElementById('select');
let model = document.getElementById('model');
let type = inp;
let dev = new Smarthome;


	submitBtnClick.addEventListener("click",(event)=> {
		validation()
		addId()
		rootElem.innerHTML = "";
		rend()
		clearHtml()
		event.preventDefault()
		
				
})

let addId = function(){
	for(let i = 0; i < dev.devise.length; i++){
			dev.devise[i].Id = i  ;	
		}
}
let clearHtml = function(){
	inp.value = "";
	model.value = "";
}

let validation = function(){

	if (inp.value == "Fridge"){
		dev.createFridge(model.value, type.value)
	}
	else if (inp.value == "Conditioner"){
		dev.createConditioner(model.value, type.value)

	}
	else if (inp.value == "Boiler") {
		dev.createBoiler(model.value, type.value)
	}
}





let rend = function() {
	for(let i = 0; i < dev.devise.length; i++){

		function render() {
			

			let targetItem = document.createElement('div');
				targetItem.innerHTML = "";
				targetItem.className = "rootDiv";
				targetItem.style = "background-color: #FF4500";

			let temp = document.createElement('div');
				if(dev.devise[i].temp !== undefined){
					temp.innerText = `Температура: ${dev.devise[i].temp}`
				}else{
					temp.innerText = `Температура: 0`;
				}

			let temp2 = document.createElement('div');
				temp2.innerText = 'Температура морозильной камеры: 0';
				if(dev.devise[i].temp2 !== undefined){
					temp2.innerText = `Температура морозильной камеры: ${dev.devise[i].temp2}`
				}else{
					temp2.innerText = `Температура морозильной камеры: 0`;
				}

			let windState = document.createElement('div');
				if(dev.devise[i].windState === undefined){
					windState.innerText = `Жалюзи: закрыты`;
				}else{
					windState.innerText = `Жалюзи: ${dev.devise[i].windState} градусов`;
				}


			let stateValue = document.createElement('p');

					let deviseI = dev.devise[i]

			let stateItem = document.createElement('div');
				if(dev.devise[i].state === false){
					stateItem.innerText = `Состояние: Выкл.`;
					
				}else{
					stateItem.innerText = `Состояние: Вкл.`;
					targetItem.style = "background-color: #90EE90"
				}
				
			

			let model = document.createElement('div');
				model.innerText = `Model: ${dev.devise[i].model}`;
				model.className = "model";

			let item = document.createElement('div');
				item.innerText = `Type: ${dev.devise[i].type}`;

						//Удаление 

			let dellBtn = document.createElement('button');
				dellBtn.className = 'dellBtn'
				
				dellBtn.addEventListener('click', () => rootElem.innerHTML = "" )
				dellBtn.addEventListener('click', () => targetItem.innerHTML = "")
								//dellBtn.addEventListener('click', () => console.log(dev.devise[i].Id))
								let dInd = dev.devise.indexOf(dev.devise[i])
				dellBtn.addEventListener('click', () => dev.deleteDevise(dInd))
				

				dellBtn.addEventListener('click', () => rend())


						// Включение
			let onBtn = document.createElement('button');
				onBtn.innerText = 'On';
				onBtn.className = 'on'
				onBtn.addEventListener('click', () => dev.on(deviseI))
				onBtn.addEventListener('click', () => {if (dev.devise[i].state === true){
					stateItem.innerText = `Состояние: Вкл.`;
					targetItem.style = "background-color: #90EE90"
					}
				})

				onBtn.addEventListener('click', () => temp.innerText = `Температура: ${dev.devise[i].temp}`)
				onBtn.addEventListener('click', () => windState.innerText = `Жалюзи: ${dev.devise[i].windState} градусов`) 
				onBtn.addEventListener('click', () => temp2.innerText = `Температура морозильной камеры: ${dev.devise[i].temp2}`)

				

			let offBtn = document.createElement('button');
				offBtn.innerText = "Off";
				offBtn.className = 'off'
				offBtn.addEventListener('click', () => dev.off(deviseI))
				offBtn.addEventListener('click', () => {if (dev.devise[i].state === false){
					stateItem.innerText = `Состояние: Выкл.`;
					targetItem.style = "background-color: #FF4500"
					}
				})
				offBtn.addEventListener('click', () => temp.innerText = `Температура: 0`)
				offBtn.addEventListener('click', () => windState.innerText = `Жалюзи: закрыты`)
				offBtn.addEventListener('click', () => temp2.innerText = `Температура морозильной камеры: 0`)

			let windUpBtn = document.createElement('button');
				windUpBtn.innerText = 'Up';
				windUpBtn.addEventListener('click', () => dev.devise[i].windStateDwn(deviseI));
				windUpBtn.addEventListener('click', () => { windState.innerText = `Жалюзи: ${dev.devise[i].windState} градусов`})

			let windDwBtn = document.createElement('button');
				windDwBtn.innerText = 'Dwn'
				windDwBtn.addEventListener('click', () => dev.devise[i].windStateUp(deviseI))
				windDwBtn.addEventListener('click', () => { windState.innerText = `Жалюзи: ${dev.devise[i].windState} градусов`})


			let tempUp = document.createElement('button');
				tempUp.innerText = '+';
				tempUp.addEventListener('click', () => dev.increaseTemp(deviseI))
				tempUp.addEventListener('click', () => temp.innerText = `Температура: ${dev.devise[i].temp}`)

			let tempDwn = document.createElement('button');
				tempDwn.innerText = '-';
				tempDwn.addEventListener('click', () => dev.decreaseTemp(deviseI))
				tempDwn.addEventListener('click', () => temp.innerText = `Температура: ${dev.devise[i].temp}`)

			let tempUp2 = document.createElement('button');
				tempUp2.innerText = '+';
				tempUp2.addEventListener('click', () => dev.devise[i].increaseTemp2(deviseI))
				tempUp2.addEventListener('click', () => temp2.innerText = `Температура морозильной камеры: ${dev.devise[i].temp2}`)

			let temp2Dwn = document.createElement('button');
				temp2Dwn.innerText = '-';
				temp2Dwn.addEventListener('click', () => dev.devise[i].decreaseTemp2(deviseI))
				temp2Dwn.addEventListener('click', () => temp2.innerText = `Температура морозильной камеры: ${dev.devise[i].temp2}`)


				targetItem.appendChild(item);
				targetItem.appendChild(model);
				targetItem.appendChild(stateItem);
				targetItem.appendChild(onBtn);
				targetItem.appendChild(offBtn);
					if (dev.devise[i].type == "Conditioner"){
						targetItem.appendChild(windState);
						targetItem.appendChild(windUpBtn);
						targetItem.appendChild(windDwBtn);
					}
				targetItem.appendChild(temp);
				targetItem.appendChild(tempUp);
				targetItem.appendChild(tempDwn);

					if(dev.devise[i].type === "Fridge"){
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











