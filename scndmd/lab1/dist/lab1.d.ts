declare const multiply: (num1: number, num2: number) => number;
declare const result: number;
declare let text: string;
declare const num: number;
declare let respect_don: boolean;
declare const integer: bigint;

interface my_object{
    month: number;
    year?: number;
}
declare let obj1: my_object;
declare let obj2: my_object;

interface Entity {
    id: number;
}
interface ToJsonStringify extends Entity {
    e1?: number;
    e2?: string;
}
declare const data: ToJsonStringify;
