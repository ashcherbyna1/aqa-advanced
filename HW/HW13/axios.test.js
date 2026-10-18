
import axios from 'axios';
import assert from 'node:assert/strict';

async function getPost() {
    const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts/1',
    );

    assert.strictEqual(response.status, 200);
    assert.strictEqual(response.data.id, 1);
    assert.strictEqual(response.data.userId, 1);

    console.log('GET post: passed');
}

getPost();

async function getList() {
    const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts',
    );

    assert.strictEqual(response.status, 200);
    assert.strictEqual(Array.isArray(response.data), true);

    console.log('GET list: passed');
}

getList();

async function createPost() {
    const newPost = {
        title: 'foo',
        body: 'bar',
        userId: 1,
    };

    const response = await axios.post(
        'https://jsonplaceholder.typicode.com/posts',
        newPost,
    );

    assert.strictEqual(response.status, 201);
    assert.strictEqual(response.data.title, newPost.title);
    assert.strictEqual(response.data.body, newPost.body);
    assert.strictEqual(response.data.userId, newPost.userId);

    console.log('POST post: passed');
}

createPost();

async function getComments() {
    const response = await axios.get(
        'https://jsonplaceholder.typicode.com/comments',
    );

    assert.strictEqual(response.status, 200);
    assert.strictEqual(Array.isArray(response.data), true);

    console.log('GET comments: passed');
}

getComments();

async function createComment() {
    const newComment = {
        postId: 1,
        name: 'John Doe',
        email: 'john.doe@example.com',
        body: 'This is a test comment.',
    };

    const response = await axios.post(
        'https://jsonplaceholder.typicode.com/comments',
        newComment,
    );

    assert.strictEqual(response.status, 201);
    assert.strictEqual(response.data.postId, newComment.postId);
    assert.strictEqual(response.data.name, newComment.name);
    assert.strictEqual(response.data.email, newComment.email);
    assert.strictEqual(response.data.body, newComment.body);

    console.log('POST comment: passed');
}

createComment();