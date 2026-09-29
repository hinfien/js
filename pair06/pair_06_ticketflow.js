let eventName = "";
let basePrice = 0;

while (eventName === "") {
	const eventType = Number(prompt(
		"Подія:\n" +
		"1 - Кіно (150 грн)\n" +
		"2 - Театр (220 грн)\n" +
		"3 - Концерт (350 грн)"
	));

	switch (eventType) {
		case 1:
			eventName = "Кіно";
			basePrice = 150;
			break;
		case 2:
			eventName = "Театр";
			basePrice = 220;
			break;
		case 3:
			eventName = "Концерт";
			basePrice = 350;
			break;
		default:
			alert("Оберіть 1, 2 або 3.");
	}
}

let dayType = Number(prompt(
	"День:\n" +
	"1 - Будній\n" +
	"2 - Вихідний"
));

while (dayType !== 1 && dayType !== 2) {
	alert("Оберіть 1 або 2.");
	dayType = Number(prompt("День: 1 - Будній, 2 - Вихідний"));
}

if (dayType === 2) {
	basePrice += basePrice * 15 / 100;
}

let ticketCount = Number(prompt("Квитків (1-6):"));

while (ticketCount < 1 || ticketCount > 6) {
	alert("Введіть число 1-6.");
	ticketCount = Number(prompt("Квитків (1-6):"));
}

let processedTickets = 0;
let freeTickets = 0;
let discountedTickets = 0;
let fullPriceTickets = 0;
let totalAmount = 0;

for (let ticketNumber = 1; ticketNumber <= ticketCount; ticketNumber++) {
	let age = Number(prompt(`Вік квитка ${ticketNumber} (-1 = стоп):`));

	while (age < 0 && age !== -1) {
		alert("Введіть вік від 0 або -1.");
		age = Number(prompt(`Вік квитка ${ticketNumber}:`));
	}

	if (age === -1) {
		break;
	}

	processedTickets++;

	if (age <= 5) {
		freeTickets++;
		continue;
	}

	let currentTicketPrice = basePrice;
	let hasDiscount = false;

	if (age <= 12) {
		currentTicketPrice *= 0.5;
		hasDiscount = true;
	} else if (age <= 17) {
		currentTicketPrice *= 0.8;
		hasDiscount = true;
	} else if (age >= 60) {
		currentTicketPrice *= 0.75;
		hasDiscount = true;
	}

	if (age >= 18 && age <= 25 && confirm("Є студентський?")) {
		currentTicketPrice *= 0.9;
		hasDiscount = true;
	}

	totalAmount += currentTicketPrice;

	if (hasDiscount) {
		discountedTickets++;
	} else {
		fullPriceTickets++;
	}
}

if (totalAmount > 1000) {
	totalAmount -= totalAmount * 5 / 100;
}

console.log(`Подія: ${eventName}`);
console.log(`Ціна квитка з ур. дня: ${basePrice} грн`);
console.log(`Оброблено: ${processedTickets}`);
console.log(`Безкоштовних: ${freeTickets}`);
console.log(`Зі знижкою: ${discountedTickets}`);
console.log(`Повна ціна: ${fullPriceTickets}`);
console.log(`Сума: ${totalAmount} грн`);
