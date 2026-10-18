import axios from 'axios';

function invalidRequest() {
    return axios.get('https://jsonplaceholder.typicode.com/posts/TEST');
}

describe('Verify invalid request', () => {
    test('should handle 404 error correctly', async () => {
        try {
            await invalidRequest();
            throw new Error('Expected request to fail');
        } catch (error) {
            expect(error.response.status).toBe(404);
            expect(error.message).toBe('Request failed with status code 404');
        }
    });
});
