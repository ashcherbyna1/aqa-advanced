function getTodo() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((response) => response.json())
        .then((todo) => {
            return todo;
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

function getUser() {
    return fetch('https://jsonplaceholder.typicode.com/users/1', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((response) => response.json())
        .then((user) => {
            return user;
        })
        .catch((error) => {
            console.error('Error:', error);
        });
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
