function onEvenNumber(num) {
    console.log(`${num} is an even number`);
}

function onOddNumber(num) {
    console.log(`${num} is an odd number`);
}

function handleNumber(num, onEven, onOdd) {
    if (num % 2 === 0) {
        onEven(num);
    } else {
        onOdd(num);
    }
}
handleNumber(5, onEvenNumber, onOddNumber);
