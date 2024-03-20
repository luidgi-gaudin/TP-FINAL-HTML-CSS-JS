function CreateAllCars() {
	return [
		{
			serie: "Serie 3",
			modele: "320 D",
			annee: 2011,
			annee_achat: 2013,
			kilometrage: 12700,
		},
		{
			serie: "Serie 5",
			modele: "M5",
			annee: 2018,
			annee_achat: 2020,
			kilometrage: 12000,
		},
		{
			serie: "X5",
			modele: "X5 M50d",
			annee: 2017,
			annee_achat: 2018,
			kilometrage: 11000,
		},
	];
}

function GetAllCars() {
	let cars = CreateAllCars();
	return cars;
}

const categorie = ["serie", "modele", "annee", "annee_achat", "kilometrage"];

const tableau = document.getElementById("tbody");

var car_number = 0;

function ShowAllCars() {
	let cars = GetAllCars();
	cars.forEach(function (car) {
		const row = tableau.insertRow();
		for (let i = 0; i < 5; i++) {
			let cell = row.insertCell(i);
			cell.innerHTML = car[categorie[i]];
		}
		let cell6 = row.insertCell(5);
		cell6.innerHTML = `<button class="btn btn-dark" onclick="UpdateCar()"><i class="bi bi-pencil-square"></i></button> <button class="btn btn-dark" onclick="DeleteCar()"><i class="bi bi-trash"></i></button>`;
		car_number++;
	});
}

ShowAllCars();
document.getElementById("car_number").innerHTML = car_number;

function AddCar() {
	let new_car = {};
	for (let i = 0; i < 5; i++) {
		new_car[categorie[i]] = document.getElementById(categorie[i]).value;
	}
	const row = tableau.insertRow();
	for (let i = 0; i < 5; i++) {
		let cell = row.insertCell(i);
		cell.innerHTML = new_car[categorie[i]];
	}
	let cell6 = row.insertCell(5);
	cell6.innerHTML = `<button class="btn btn-dark" onclick="UpdateCar()"><i class="bi bi-pencil-square"></i></button> <button class="btn btn-dark" onclick="DeleteCar()"><i class="bi bi-trash"></i></button>`;
	car_number++;
	document.getElementById("car_number").innerHTML = car_number;
}

function DeleteCar() {
	let row = event.target.parentNode.parentNode;
	row.parentNode.removeparent(row);
	car_number--;
	document.getElementById("car_number").innerHTML = car_number;
}
