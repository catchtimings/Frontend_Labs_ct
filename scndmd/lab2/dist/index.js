// task 1
let array1 = [1, 2, 3, 4, 5];
let array2 = [1, 2, 3, 4, 5, 6];
function medium_value(array) {
    if (array.length % 2 !== 0) {
        return array[Math.floor(array.length / 2)];
    }
    else {
        let value1 = array[array.length / 2];
        let value2 = array[Math.floor(array.length / 2) - 1];
        return ((value1 + value2) / 2);
    }
}
const res1 = medium_value(array1);
const res2 = medium_value(array2);
console.log(res1);
console.log(res2);
