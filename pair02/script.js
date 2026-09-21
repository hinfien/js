// if (умова){
//     дії;
// }
// else if (){
//     
// }
// true
// 1

// false
// 0
// 0n
// "" ''
// null
// undefined
// NaN

// let a = 10, b = 2;
// console.log(a == b);
// console.log(a === b);
// console.log(a != b);
// console.log(a !== b);
// > < >= <=

// let a = +prompt("Enter a number");
// let b = +prompt("Enter a number");
// let c;

// if (a > b) {
//     c = "a > b"
// } else if (a < b) {
//     c = "a < b"
// } else {
//     c = "a = b"
// }
// alert(c);

// if (a > b) c = "a > b"; else if (a < b) c = "a < b"; else c = "a = b"; alert(c);

// let course = prompt("What is the name of the course?"), tittle;
// switch (course) {
//     case 'figma':
//         tittle = 'Figma';
//         break;

//     case 'WEB':
//         tittle = 'HTML + CSS';
//         break;

//     case 'Javascript':
//         tittle = 'Javascript основи програмування';
//         break;
// }
// alert(tittle); 

// --------------------------------

let product = prompt("що ви хочете купити?");
let price = +prompt("скільки коштує?");
let quantity = +prompt("скільки штук?");
let sum = price * quantity;

if (sum > 5000) {
    sum = sum * 0.9;
    alert("зі знижною: " + sum);
} else {
    alert("без знижки: " + sum);
}

let delivery = prompt("Оберіть доставку: кур'єр, пошта, самовивіз");
let deliveryCost;

switch (delivery) {
    case "кур'єр":
        deliveryCost = 200;
        break;
    case "пошта":
        deliveryCost = 100;
        break;
    case "самовивіз":
        deliveryCost = 0;
        break;
}

if (deliveryCost === 0) {
    alert("Доставка безкоштовна");
} else {
    alert("Вартість доставки: " + deliveryCost + " грн");
}

