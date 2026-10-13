//     for (let i = 0; i < array.length; i++) {
//         sum += array[i];
//     }
//     return sum;
// }
//
// let numbers = [10, 15, 24, 46];
// console.log(getSum(numbers));
//
// let name = [];
// name.push("Ivan");
// name.push("Ivan2");
// name.pop()
// name.unshift("Ivan3", "Ivan4");
// name.shift();
// console.log(name.slice(0, 1))
//
// console.log(name);

// let color = ["red", "green", "blue", "yellow", "brown", "cyan", "white"];
// color.splice(0, 1, "pink");
// let deleted = color.splice(4, 2);
// color.splice(2, 0, "pink")
// console.log(color);

// let eventNames = ["Ivan", "Olha", "Mariia", "Stepan", "Oleh"];

// function registerNames(name) {
//     if (typeof name !== "string" || name.trim() === "") {
//         alert("Будь ласка, введіть ім'я учасника.");
//         return;
//     }

//     const normalizedName = name.trim();
//     const alreadyRegistered = eventNames.some(
//         (eventName) => eventName.toLowerCase() === normalizedName.toLowerCase()
//     );

//     if (alreadyRegistered) {
//         alert("Неможна додати: цей учасник уже є у списку.");
//         return;
//     }

//     eventNames.push(normalizedName);
//     alert(`${normalizedName} успішно зареєстрований.`);
// }

// function removeNames(name) {
//     if (typeof name !== "string" || name.trim() === "") {
//         alert("Будь ласка, введіть ім'я учасника.");
//         return;
//     }

//     const normalizedName = name.trim().toLowerCase();
//     const participantIndex = eventNames.findIndex(
//         (eventName) => eventName.toLowerCase() === normalizedName
//     );

//     if (participantIndex === -1) {
//         alert("Учасника не знайдено.");
//         return;
//     }

//     const [removedName] = eventNames.splice(participantIndex, 1);
//     alert(`${removedName} видалений зі списку.`);
// }

// function printCount() {
//     alert(`Всього учасників: ${eventNames.length}`);
// }

// function printNames() {
//     alert(
//         eventNames.length > 0
//             ? `Учасники: ${eventNames.join(", ")}`
//             : "Список учасників порожній."
//     );
// }

// function runMenu() {
//     while (true) {
//         const choice = prompt(
//             "Меню:\n1 — Зареєструвати учасника\n2 — Видалити учасника\n3 — Показати кількість учасників\n4 — Показати список учасників\n0 — Вийти"
//         );

//         if (choice === null || choice.trim() === "0") {
//             break;
//         }

//         switch (choice.trim()) {
//             case "1":
//                 registerNames(prompt("Введіть ім'я нового учасника:"));
//                 break;
//             case "2":
//                 removeNames(prompt("Введіть ім'я учасника для видалення:"));
//                 break;
//             case "3":
//                 printCount();
//                 break;
//             case "4":
//                 printNames();
//                 break;
//             default:
//                 alert("Неправильний пункт меню.");
//         }
//     }
// }

// runMenu();