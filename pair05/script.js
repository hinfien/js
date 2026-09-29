// console.log(1);
// ++;
// }
// console.log(Number("Hello"))

// let age = +prompt('Enter your age');
// while (Number.isNaN(age) || age < 0 || age >= 120) {
//     alert("Please enter your age");
//     age = +prompt('Enter your age');
// }
// console.log(age);

// const correctPin = 1111;
// let tries = 1;

// while (tries <= 3) {
//     let pin = +prompt('Enter a valid pin');

//     if (pin === correctPin) {
//         console.log("Вхід дозволено");
//         break;
//     }

//     tries++;
//     console.log("Неправильний пароль");
// }

// let menuChoice;
// do {
//     menuChoice = +prompt("Оберіть дію:\n" +
//         "1 - Відкрити профіль\n" +
//         "2 - Налаштування профілю\n" +
//         "0 - Вихід");

//     if (menuChoice === 1) {
//         console.log("Відкриваємо профіль");
//     } else if (menuChoice === 2) {
//         console.log("Налаштовуємо профіль");
//     } else if (menuChoice === 0) {
//         console.log("Вихід");
//     } else {
//         console.log("Не зрозуміла команда");
//     }
// } while (menuChoice !== 0);

// let gradeSum = 0;
// let count = 0;

// let num = +prompt("Enter the grade");

// while (Number.isNaN(num) || num < 0 || num > 12) {
//     alert("Invalid grade");
//     continue;
// }

// gradeSum += num;
// count++;

// alert(`Average grade is ${gradeSum / count}`);

let age = Number(prompt("Введіть свій вік"));

while (Number.isNaN(age) || !Number.isInteger(age) || age < 12 || age > 90) {
	alert("Введіть коректний вік від 12 до 90 років");
	age = Number(prompt("Введіть свій вік"));
}

const correctPin = "4321";
let attempts = 0;
let isAuthenticated = false;

while (attempts < 3) {
	const pin = prompt("Введіть PIN");
	attempts++;

	if (pin === correctPin) {
		isAuthenticated = true;
		console.log("Вхід дозволено");
		break;
	} else {
		console.log("Неправильний PIN");
	}
}

if (isAuthenticated) {
	let menuChoice;

	do {
		menuChoice = Number(prompt(
			"Оберіть пункт меню:\n" +
			"1 - Особистий кабінет\n" +
			"2 - Повідомлення\n" +
			"3 - Налаштування\n" +
			"0 - Вихід"
		));

		switch (menuChoice) {
			case 1:
				console.log("Особистий кабінет");
				break;
			case 2:
				console.log("Повідомлення");
				break;
			case 3:
				console.log("Налаштування");
				break;
			case 0:
				console.log("Вихід");
				break;
			default:
				console.log("Такого пункту немає.");
		}
	} while (menuChoice !== 0);
} else {
	console.log("Доступ заблоковано");
}

