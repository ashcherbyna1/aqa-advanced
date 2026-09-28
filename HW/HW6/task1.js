//Task 1

const width = 10;
const height = 5;

function calculateArea(width, height) {
    return width * height;
}

console.log('Area:', calculateArea(width, height));

//Task 2
const area = function calculateArea(width, height) {
    return width * height;
};
console.log('Area:', area(width, height));

//Task 3
const areaArrow = (width, height) => width * height;
console.log('Area:', areaArrow(width, height));
