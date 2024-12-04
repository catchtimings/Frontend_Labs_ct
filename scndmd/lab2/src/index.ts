// task 1

//Одномерный массив
const array1: number[] = [1, 2, 3, 4, 5];
const array2: number[] = [1, 2, 3, 4, 5, 6];

//Поиск медианного значения
const medium_value = (array: number[]): number =>{
    if (array.length % 2 !== 0){
        return array[Math.floor(array.length / 2)];
    }
    else {
        let value1: number  = array[array.length / 2];
        let value2: number = array[Math.floor(array.length / 2) - 1];
        return ((value1 + value2) / 2);
    }
}

const res1: number = medium_value(array1);
const res2: number = medium_value(array2);

console.log(res1);
console.log(res2);

//Двумерный массив
const matrix: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

//Реализовать метод, возвращающий количество ненулевых значений в матрице целых чисел в заданном отрезке
const count_not_zero =(matrix: number[][], value1: number, value2: number): number => {
    let count = 0;
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
            if(matrix[i][j] !== 0 && (value1 <= matrix[i][j] && matrix[i][j] <= value2)){
                count++;
            }
        }
    }
    return count;
}

const count: number = count_not_zero(matrix, 3, 6);
console.log(count);


//task2

//Создайте кортеж, который может содержать только 2 числовых и 1 строковое значения (порядок следования: число, строка, число)
const tuple: [number, string, number] = [10, 'word', 10];

// Реализуйте метод, возвращающий произведение числовых значений
const multiply_number = (tuple: [number, string, number]): number => {
    return tuple[0] * tuple[2];
}

const mult: number = multiply_number(tuple);
console.log(mult);


//task3 

// Создайте тип перечисление для типов витаминов (A, B3, B6, B12, E и т.д.). Выведите какой-либо тип витамина в консоль.


enum Vitamins {
    A = 'Vitamin A',
    B3 = 'Vitamin B3',
    B6 = 'Vitamin B6',
    B12 = 'Vitamin B12',
    E = 'Vitamin E',
}

console.log(Vitamins.A);

//task 4

class Pet {
    name: string = 'Some pet'
    age: number = -1
    speak() {
        return "No speak. I am fish!";
    }
}

class Dog extends Pet {
    label = "AngryHunter";
    age = 8;
    speak() {
        return "Yaw-Gaw!";
    }
}

class Cat extends Pet {
    name = 'Barsik';
    age = 2;
    speak() {
        return "Miyau!";
    }
}

const info = (animal: Pet): void => {
    console.log(animal.name);
    if("label" in animal){
        console.log(animal.label);
    }
    console.log(animal.age)
    console.log(animal.speak());
}

const dog: Dog = new Dog();
const cat: Cat = new Cat();

info(dog);
info(cat);

//task 5

interface Medicine {
    name: string,
    vitamins: Vitamins[],
}


const med1: Medicine = {
    name: 'B-Complex',
    vitamins: [Vitamins.B3, Vitamins.B6, Vitamins.B12],
}

const jsonObject = JSON.stringify(med1);
console.log(jsonObject);