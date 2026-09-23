const users = [
    { name: 'Alice', age: 30, email: 'alice@example.com' },
    { name: 'Bob', age: 25, email: 'bob@example.com' },
    { name: 'Charlie', age: 35, email: 'charlie@example.com' },
];
for (const user of users) {
    const { name, age, email } = user;
    console.log(`Name: ${name}, Age: ${age}, Email: ${email}`);
}
