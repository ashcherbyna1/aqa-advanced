function divideFunction(numerator, denominator) {
    if (typeof numerator !== 'number' || typeof denominator !== 'number') {
        throw new Error('Arguments must be numbers');
    }
    if (denominator === 0) {
        throw new Error('Division by zero is not allowed');
    }
    return numerator / denominator;
}
try {
    divideFunction(10, 2);
} catch (error) {
    console.log(error.message);
} finally {
    console.log('Execution completed');
}
try {
    divideFunction(10, 0);
} catch (error) {
    console.log(error.message);
} finally {
    console.log('Execution completed');
}

try {
    divideFunction('10', 2);
} catch (error) {
    console.log(error.message);
} finally {
    console.log('Execution completed');
}
