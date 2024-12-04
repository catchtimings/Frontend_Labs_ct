// task 1
//Одномерный массив
const array1 = [1, 2, 3, 4, 5];
const array2 = [1, 2, 3, 4, 5, 6];
//Поиск медианного значения
const medium_value = (array) => {
    if (array.length % 2 !== 0) {
        return array[Math.floor(array.length / 2)];
    }
    else {
        let value1 = array[array.length / 2];
        let value2 = array[Math.floor(array.length / 2) - 1];
        return ((value1 + value2) / 2);
    }
};
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
const count_not_zero = (matrix, value1, value2) => {
    let count = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] !== 0 && (value1 <= matrix[i][j] && matrix[i][j] <= value2)) {
                count++;
            }
        }
    }
    return count;
};
const count = count_not_zero(matrix, 3, 6);
console.log(count);
//task2
//Создайте кортеж, который может содержать только 2 числовых и 1 строковое значения (порядок следования: число, строка, число)
const tuple = [10, 'word', 10];
// Реализуйте метод, возвращающий произведение числовых значений
const multiply_number = (tuple) => {
    return tuple[0] * tuple[2];
};
const mult = multiply_number(tuple);
console.log(mult);
//task3 
// Создайте тип перечисление для типов витаминов (A, B3, B6, B12, E и т.д.). Выведите какой-либо тип витамина в консоль.
var Vitamins;
(function (Vitamins) {
    Vitamins["A"] = "Vitamin A";
    Vitamins["B3"] = "Vitamin B3";
    Vitamins["B6"] = "Vitamin B6";
    Vitamins["B12"] = "Vitamin B12";
    Vitamins["E"] = "Vitamin E";
})(Vitamins || (Vitamins = {}));
console.log(Vitamins.A);
//task 4
class Pet {
    constructor() {
        this.name = 'Some pet';
        this.age = -1;
    }
    speak() {
        return "No speak. I am fish!";
    }
}
class Dog extends Pet {
    constructor() {
        super(...arguments);
        this.label = "AngryHunter";
        this.age = 8;
    }
    speak() {
        return "Yaw-Gaw!";
    }
}
class Cat extends Pet {
    constructor() {
        super(...arguments);
        this.name = 'Barsik';
        this.age = 2;
    }
    speak() {
        return "Miyau!";
    }
}
const info = (animal) => {
    console.log(animal.name);
    if ("label" in animal) {
        console.log(animal.label);
    }
    console.log(animal.age);
    console.log(animal.speak());
};
const dog = new Dog();
const cat = new Cat();
info(dog);
info(cat);
const med1 = {
    name: 'B-Complex',
    vitamins: [Vitamins.B3, Vitamins.B6, Vitamins.B12],
};
const jsonObject = JSON.stringify(med1);
console.log(jsonObject);
