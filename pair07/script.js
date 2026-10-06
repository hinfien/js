// showMessage();
// showMessage();
// showMessage();
// showMessage();
// showMessage();

// function showProduct(name, price = "немає у наявності") {
//     console.log(`Товар ${name}: ${price}`);
// }

// showProduct("Notebook");

// function calculate(price, count) {
//     return price * count;
// }

// let total = calculate(1000, 4);
// console.log(total);

// function discount(total) {
//     if (total >= 5000) {
//         return 10;
//     } else {
//         return 0;
//     }
// }

// let discount1 = +prompt("Please enter a number");
// console.log(discount(discount1));

// function getProductTotal(price, count) {
//     return price * count;
// }

// function getDiscount(total) {
//     if (total >= 10000) {
//         return 0.15;
//     } else if (total >= 5000) {
//         return 0.1;
//     } else if (total >= 2000) {
//         return 0.05;
//     } else {
//         return 0;
//     }
// }

// function getDiscountValue(total, percent) {
//     return total * percent;
// }

// function getFinalPrice(total, discount) {
//     return total - discount;
// }

// let productName = prompt("Enter product name");
// let productPrice = +prompt("Enter price");
// let productCount = +prompt("Enter count");

// let productTotal = getProductTotal(productPrice, productCount);
// let discount = getDiscount(productTotal);
// let productDiscountValue = getDiscountValue(productTotal, discount);
// let productFinalPrice = getFinalPrice(productTotal, productDiscountValue);

// console.log(`Товар: ${productName}`);
// console.log(`Ціна: ${productPrice} грн.`);
// console.log(`Кількість: ${productCount}`);
// console.log(`Сума: ${productTotal} грн.`);
// console.log(`Знижка: ${discount} %`);
// console.log(`Сума знижки: ${productDiscountValue} грн.`);
// console.log(`До сплати: ${productFinalPrice} грн.`);

// function getFuelNeeded(distance, consumptionPer100) {
//     return (distance / 100) * consumptionPer100;
// }

// function getTripCost(distance, consumptionPer100, pricePerLiter) {
//     const fuelNeeded = getFuelNeeded(distance, consumptionPer100);
//     return fuelNeeded * pricePerLiter;
// }

// function getTripSummary(startCity, finishCity, distance, consumptionPer100, pricePerLiter) {
//     const fuelNeeded = getFuelNeeded(distance, consumptionPer100);
//     const totalCost = getTripCost(distance, consumptionPer100, pricePerLiter);

//     return {
//         startCity,
//         finishCity,
//         distance,
//         fuelNeeded,
//         totalCost,
//     };
// }

// let startCity = prompt("Місто старту:");
// let finishCity = prompt("Місто фінішу:");
// let distance = +prompt("Відстань в км:");
// let consumptionPer100 = +prompt("Витрати пального на 100 км:");
// let fuelPrice = +prompt("Вартість 1 л пального:");

// let trip = getTripSummary(startCity, finishCity, distance, consumptionPer100, fuelPrice);

// console.log(`Маршрут: ${trip.startCity} → ${trip.finishCity}`);
// console.log(`Відстань: ${trip.distance} км`);
// console.log(`Потрібно пального: ${trip.fuelNeeded} л`);
// console.log(`Вартість пального: ${trip.totalCost} грн`);

let userLogin = "";
let userPassword = "";
let isRegistered = false;
let failedAttempts = 0;
let isBlocked = false;

function registerUser() {
    userLogin = prompt("Введіть логін:");
    userPassword = prompt("Введіть пароль:");
    isRegistered = true;
    console.log("Реєстрація успішна!");
}

function loginUser() {
    if (!isRegistered) {
        console.log("Спочатку зареєструйся!");
        return;
    }

    if (isBlocked) {
        console.log("Вхід заблоковано.");
        return;
    }

    let login = prompt("Введіть логін:");
    let password = prompt("Введіть пароль:");

    if (login === userLogin && password === userPassword) {
        console.log("Вхід дозволено!");
    } else {
        failedAttempts++;
        console.log(`Помилка входу. Залишилось спроб: ${3 - failedAttempts}`);

        if (failedAttempts === 3) {
            isBlocked = true;
            console.log("Вхід заблоковано після трьох невдалих спроб.");
        }
    }
}

function runMenu() {
    let choice;

    do {
        choice = +prompt(
            "Меню програми:\n1 — Зареєструватися\n2 — Увійти в акаунт\n0 — Вийти"
        );

        if (choice === 1) {
            registerUser();
        } else if (choice === 2) {
            loginUser();
        } else if (choice !== 0) {
            console.log("Неправильний пункт меню.");
        }
    } while (choice !== 0);

    console.log("Роботу програми завершено.");
}

runMenu();
