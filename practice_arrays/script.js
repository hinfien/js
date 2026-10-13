// 1.
const courses = ["JavaScript", "HTML", "CSS", "Git", "WebStorm", "Vue"];
const seats = [12, 8, 15, 0, 6, 10];

let userName = prompt("Введіть ім'я:");
while (userName === null || userName.trim() === "") {
    alert("Ім'я не може бути порожнім.");
    userName = prompt("Введіть ім'я:");
}
userName = userName.trim();

let day = Number(prompt("Введіть день народження:"));
while (day !== day || day < 1 || day > 31) {
    alert("Некоректний день.");
    day = Number(prompt("Введіть день народження:"));
}

let month = Number(prompt("Введіть місяць народження:"));
while (month !== month || month < 1 || month > 12) {
    alert("Некоректний місяць.");
    month = Number(prompt("Введіть місяць народження:"));
}

const personalIndex = (userName.length + day + month) % courses.length;
alert(`Ваш персональний вебінар: ${courses[personalIndex]}`);


// 2.
const searchCourse = prompt("Введіть назву вебінару для пошуку:");
let foundIndex = -1;
for (let i = 0; i < courses.length; i++) {
    if (courses[i] === searchCourse) {
        foundIndex = i;
        break;
    }
}

if (foundIndex === -1) {
    alert("Вебінар не знайдено.");
} else if (seats[foundIndex] === 0) {
    alert("На цей вебінар місць немає.");
} else {
    const answer = confirm(`Вебінар "${courses[foundIndex]}" знайдено. Записатися?`);
    if (answer) {
        seats[foundIndex]--;
        alert(`Запис успішний. Залишилось місць: ${seats[foundIndex]}`);
    } else {
        alert("Запис скасовано.");
    }
}


// 3.
const participants = [];
while (true) {
    const name = prompt("Введіть ім'я учасника або Скасувати:");
    if (name === null || name === "Скасувати") {
        break;
    }
    participants.push(name);
}

let list = "";
for (let i = 0; i < participants.length; i++) {
    list = list + (i + 1) + ". " + participants[i] + "\n";
}
alert(list || "Список учасників порожній.");

let longerNames = 0;
for (let i = 0; i < participants.length; i++) {
    if (participants[i].length > userName.length) {
        longerNames++;
    }
}
alert(`Кількість учасників з іменем довшим за ваше: ${longerNames}`);

const changeIndex = Number(prompt("Введіть номер учасника для зміни:"));
if (changeIndex >= 1 && changeIndex <= participants.length) {
    const newName = prompt("Введіть нове ім'я:");
    participants[changeIndex - 1] = newName;
    alert("Новий список:\n" + participants.join("\n"));
}


// 4.
const visits = [24, 18, 32, 0, 15, 27, 29, 21];
let sum = 0;
let max = visits[0];
let min = visits[0];
for (let i = 0; i < visits.length; i++) {
    sum += visits[i];
    if (visits[i] > max) max = visits[i];
    if (visits[i] < min) min = visits[i];
}
const average = sum / visits.length;
alert(`Сума: ${sum}\nСереднє: ${average}\nМаксимум: ${max}\nМінімум: ${min}`);

const limit = Number(prompt("Введіть поріг відвідуваності:"));
let belowLimit = 0;
for (let i = 0; i < visits.length; i++) {
    if (visits[i] < limit) {
        belowLimit++;
    }
}
alert(`Значень менше за поріг: ${belowLimit}`);


// 5.
const workshopNames = ["Webinar 1", "Webinar 2", "Webinar 3", "Webinar 4"];
let choice = -1;
do {
    choice = Number(prompt(
        "1 - Показати вебінари\n2 - Додати вебінар\n3 - Видалити вебінар\n4 - Пошук\n5 - Видалити останній\n0 - Вихід"
    ));

    if (choice === 1) {
        alert(workshopNames.join("\n"));
    } else if (choice === 2) {
        const newWorkshop = prompt("Введіть назву вебінару:");
        workshopNames.push(newWorkshop);
        alert("Вебінар додано.");
    } else if (choice === 3) {
        const index = Number(prompt("Введіть номер для видалення:"));
        workshopNames.splice(index - 1, 1);
    } else if (choice === 4) {
        const findWorkshop = prompt("Введіть назву для пошуку:");
        let exists = false;
        for (let i = 0; i < workshopNames.length; i++) {
            if (workshopNames[i] === findWorkshop) {
                exists = true;
                break;
            }
        }
        alert(exists ? "Знайдено" : "Не знайдено");
    } else if (choice === 5) {
        workshopNames.pop();
    } else if (choice !== 0) {
        alert("Неправильний пункт меню.");
    }
} while (choice !== 0);


// 6. 
let requests = [72, 95, 41, 86, 60, 100, 53, 88, 29];
const personalScore = (day * month + userName.length) % 100;
requests.push(personalScore);
alert(`Ваш персональний бал: ${personalScore}`);

const high = [];
const medium = [];
const low = [];

for (let i = 0; i < requests.length; i++) {
    if (requests[i] >= 85) {
        high.push(requests[i]);
    } else if (requests[i] >= 50) {
        medium.push(requests[i]);
    } else {
        low.push(requests[i]);
    }
}

alert(`High: ${high.join(", ") || "немає"}\nMedium: ${medium.join(", ") || "немає"}\nLow: ${low.join(", ") || "немає"}`);

while (true) {
    const newRequest = Number(prompt("Введіть число від 0 до 100 або 0 для виходу:"));
    if (newRequest === 0) {
        break;
    }
    requests.push(newRequest);
}

const finalHigh = [];
const finalMedium = [];
const finalLow = [];

for (let i = 0; i < requests.length; i++) {
    if (requests[i] >= 85) {
        finalHigh.push(requests[i]);
    } else if (requests[i] >= 50) {
        finalMedium.push(requests[i]);
    } else {
        finalLow.push(requests[i]);
    }
}

alert(`Після додавання:\nHigh: ${finalHigh.length}\nMedium: ${finalMedium.length}\nLow: ${finalLow.length}`);
