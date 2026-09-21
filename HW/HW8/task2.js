const arrayNumbers = [1, 2, 3, 4, 5];
const mappedNumbers = arrayNumbers.map((element, index) => {
    element = element * index;
    return element;
});
console.log(mappedNumbers);
