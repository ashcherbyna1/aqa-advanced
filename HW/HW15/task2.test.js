import axios from 'axios';
import { describe, test, expect } from '@jest/globals';

function getPost() {
    return axios.get('https://jsonplaceholder.typicode.com/posts/2', {
        headers: {
            'Custom-Header': 'CustomValue',
            Accept: 'application/json',
        },
        params: {
            userId: 1,
        },
    });
}

describe('Verify headers and URL parameters', () => {
    test('should include headers and params', async () => {
        const response = await getPost();

        expect(response.status).toBe(200);
        expect(response.config.headers['Custom-Header']).toBe('CustomValue');
        expect(response.config.headers.Accept).toBe('application/json');
        expect(response.config.params.userId).toBe(1);
    });
});
