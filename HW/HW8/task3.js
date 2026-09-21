const newArray = [10, 20, 30, 40, 50];
const reducedArray = newArray.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);
console.log(reducedArray);
