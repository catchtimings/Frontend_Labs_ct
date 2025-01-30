import { IDType } from "./enums.js";
export interface IOwner {
    surname: string;
    name: string;
    patronymic: string;
    birthdate: Date;
    id_type: IDType;
    ser: number;
    num: number;
    print_info(): void;
}
export declare class Owner implements IOwner {
    private _surname;
    private _name;
    private _patronymic;
    private _birthdate;
    private _id_type;
    private _ser;
    private _num;
    constructor(surname: string, name: string, patronymic: string, birthdate: Date, id_type: IDType, ser: number, num: number);
    get surname(): string;
    get name(): string;
    get patronymic(): string;
    get birthdate(): Date;
    get id_type(): IDType;
    get ser(): number;
    get num(): number;
    set surname(surname: string);
    set name(name: string);
    set patronymic(patronymic: string);
    set birthdate(birthdate: Date);
    set id_type(id_type: IDType);
    set ser(ser: number);
    set num(num: number);
    print_info(): void;
}
