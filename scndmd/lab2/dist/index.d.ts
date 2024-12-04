declare const array1: number[];
declare const array2: number[];
declare const medium_value: (array: number[]) => number;
declare const res1: number;
declare const res2: number;
declare const matrix: number[][];
declare const count_not_zero: (matrix: number[][], value1: number, value2: number) => number;
declare const count: number;
declare const tuple: [number, string, number];
declare const multiply_number: (tuple: [number, string, number]) => number;
declare const mult: number;
declare enum Vitamins {
    A = "Vitamin A",
    B3 = "Vitamin B3",
    B6 = "Vitamin B6",
    B12 = "Vitamin B12",
    E = "Vitamin E"
}
declare class Pet {
    name: string;
    age: number;
    speak(): string;
}
declare class Dog extends Pet {
    label: string;
    age: number;
    speak(): string;
}
declare class Cat extends Pet {
    name: string;
    age: number;
    speak(): string;
}
declare const info: (animal: Pet) => void;
declare const dog: Dog;
declare const cat: Cat;
