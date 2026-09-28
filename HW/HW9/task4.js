const person = { firstName: 'Linda', age: 20, lastName: 'Nixon' };
person.email = 'test@test.com';
delete person.age;
console.log(person);
