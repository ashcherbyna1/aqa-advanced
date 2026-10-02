async function getTodo() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const todo = await response.json();
        return todo;
    } catch (error) {
        console.error('Error:', error);
    }
}

async function getUser() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const user = await response.json();
        return user;
    } catch (error) {
        console.error('Error:', error);
    }
}

let todoPromise;
let userPromise;
let firstResolvedPromise;

Promise.all([getTodo(), getUser()]).then(([todo, user]) => {
    todoPromise = todo;
    userPromise = user;
    console.log('Todo:', todo);
    console.log('User:', user);
});

Promise.race([getTodo(), getUser()]).then((result) => {
    firstResolvedPromise = result;
    console.log('First resolved promise:', result);
});
