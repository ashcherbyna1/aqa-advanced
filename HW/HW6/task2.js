const ageA = 25;
const ageB = 15;

function checkAge(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}

console.log(checkAge(ageA));
console.log(checkAge(ageB));