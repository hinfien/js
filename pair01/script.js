console.log(42);
console.log(4.5);
console.log('use str');
console.log(true);
console.log(1);
console.log(false);
console.log(0);
console.log(NaN);
console.log(null);
console.log(undefined);

var y;
var x = y + 10;
console.log(x);

var a;
a = 10;
console.log(a);

var b = 20;
console.log(b);

var c = 12, d = 12;
console.log(c, d);

let aNew = '32';
console.log(aNew);

a = 13;
console.log(a);

{
  let a;
  console.log(a);
}

{
  const a = 4;
  console.log(a);
}

a = 15;
b = 26;
console.log(a, b);

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a ** b);
console.log(a / b);
console.log(a % b);

a += 1;
console.log(a);
a++;
console.log(a);
a--;
console.log(a);
++a;
console.log(a);

{
  let a = 2, b;
  b = ++a;
  console.log(b);
}

{
  let a = '4', b = 2;
  console.log(a - b);
  console.log(a + b);
  console.log((a - 0) + b);
}

let name = "Ivan";
let age = 18;
console.log("Привіт" + name + "!" + "тобі" + age + "років");
console.log(`Привіт ${name}! тобі ${age} років`);

console.info("hello world");
console.log("hello world");
console.warn("hello world");
console.error("hello world");

name = prompt("Як тебе звати?");
alert(name);
