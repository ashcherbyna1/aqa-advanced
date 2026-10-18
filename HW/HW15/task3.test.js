import { jest } from '@jest/globals';
import {test, expect } from '@jest/globals';

jest.unstable_mockModule('axios', () => ({
    default: {
        get: jest.fn(),
    },
}));

const { default: axios } = await import('axios');

async function getUser() {
    const response = await axios.get('/users/1');
    return response.data;
}

test('should return user data', async () => {
    axios.get.mockResolvedValue({
        data: {
            id: 1,
            name: 'Anna',
        },
    });

    const user = await getUser();

    expect(user.id).toBe(1);
    expect(user.name).toBe('Anna');
});

test('should return an error', async () => {
    axios.get.mockRejectedValue(new Error('Request failed'));

    await expect(getUser()).rejects.toThrow('Request failed');
});
