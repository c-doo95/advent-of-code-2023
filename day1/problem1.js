str = "dfsgfs55ffour2956";

function reverseString(str) {
    return str.split("").reverse().join("");
}

const firstDigit = str.match(/[0-9]/);
const lastDigit = reverseString(str).match(/[0-9]/);

console.log(firstDigit);
console.log(lastDigit);

let value = Number("" + firstDigit + lastDigit);
console.log(value);

let total = value + 15;

console.lo