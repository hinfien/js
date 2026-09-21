// 1

age = +prompt("What is your age?");

if (age >= 18) {
    alert("дорослий.");
} else if (age >= 13) {
    alert("юнак.");
} else {
    alert("чіназес саунтрес дєтка.");
}

// 2

const login = "admin";
const password = "qwerty";

const userLogin = prompt("Enter your login:");
const userPassword = prompt("Enter your password:");

if (userLogin === login && userPassword === password) {
    alert("добрий день не інвалід!");
} else {
    alert("інвалід.");
}

// 3

daynumber = +prompt("Enter a number from 1 to 7:");

if (daynumber < 1 || daynumber > 7) {
    alert("ти інвалід");
} else {
    switch (daynumber) {
        case 1:
            alert("Monday");
            break;
        case 2:
            alert("Tuesday");
            break;
        case 3:
            alert("Wednesday");
            break;
        case 4:
            alert("Thursday");
            break;
        case 5:
            alert("Friday");
            break;
        case 6:
            alert("Saturday");
            break;
        case 7:
            alert("Sunday");
            break;
}}

// 4

productName = prompt("Enter the product name:");
productPrice = +prompt("Enter the product price:");
productCount = +prompt("Enter the product count:");
discount = confirm("do you have a discount (True/False)?");
deliveryType = prompt("Enter the delivery type (post, courier, pickup):");
totalPrice = productPrice * productCount;

if (totalPrice > 10000) {
    if (discount) {
        totalPrice = totalPrice * 0.60;
    }
    totalPrice = totalPrice * 0.85;
} elif (totalPrice > 5000) {
    if (discount) {
        totalPrice = totalPrice * 0.78;
    }
    totalPrice = totalPrice * 0.90;
} elif (totalPrice > 2000) {
    if (discount) {
        totalPrice = totalPrice * 0.85;
    }
    totalPrice = totalPrice * 0.95;
} else {
    if (discount) {
        totalPrice = totalPrice * 0.95;
    }
    totalPrice = totalPrice;
}
