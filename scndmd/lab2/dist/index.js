// task 1
//Одномерный массив
const array1 = [1, 2, 3, 4, 5];
const array2 = [1, 2, 3, 4, 5, 6];
//Поиск медианного значения
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
//Двумерный массив
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
//Реализовать метод, возвращающий количество ненулевых значений в матрице целых чисел в заданном отрезке
function count_not_zero(matrix, value1, value2) {
    let count = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] !== 0 && (value1 <= matrix[i][j] && matrix[i][j] <= value2)) {
                count++;
            }
        }
    }
    return count;
}
const count = count_not_zero(matrix, 3, 6);
console.log(count);
