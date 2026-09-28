const car1 = { brand: 'Toyota', model: 'CH-R', year: 2020 };
const car2 = { brand: 'Nissan', model: 'Juke', owner: 'Anastasiia' };

const car3 = { ...car1, ...car2 };
console.log(car3);
