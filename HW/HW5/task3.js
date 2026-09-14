const number = 5;
let counter = 1;
//3.1
for (let i = 1; i <= 10; i++) {
  console.log(`${number} * ${i} = ${number * i}`);
}
//3.2
while (counter <= 10) {
  console.log(`${number} * ${counter} = ${number * counter}`);
  counter++;
}
