import { IDType } from "./enums.js";


export interface IOwner {
    surname: string;
    name: string;
    patronymic: string;
    birthdate: Date;
    id_type: IDType;
    ser: number;
    num: number;
    print_info() : void;
}

export class Owner implements IOwner  {
    private _surname: string;
    private _name: string;
    private _patronymic: string;
    private _birthdate: Date;
    private _id_type: IDType;
    private _ser: number;
    private _num: number;

    constructor(surname: string, name: string, patronymic: string, birthdate: Date, id_type: IDType, ser: number, num: number){
        this._surname = surname;
        this._name = name;
        this._patronymic = patronymic;
        this._birthdate = birthdate;
        this._id_type = id_type;
        this._ser = ser;
        this._num = num;
    }

    get surname() {
        return this._surname;
    }

    get name(){
        return this._name;
    }

    get patronymic() {
        return this._patronymic;
    }

    get birthdate(){
        return this._birthdate;
    }

    get id_type() {
        return this._id_type;
    }

    get ser() {
        return this._ser;
    }

    get num(){
        return this._num;
    }

    set surname(surname: string) {
        this._surname = surname;
    }

    set name(name: string) {
        this._name = name;
    }

    set patronymic(patronymic: string){
        this._patronymic = patronymic;
    }

    set birthdate(birthdate: Date) {
        this._birthdate = birthdate;
    }

    set id_type(id_type: IDType) {
        this._id_type = id_type;
    }

    set ser(ser: number) {
        this._ser = ser;
    }

    set num(num: number) {
        this._num = num;
    }

    print_info(): void {
        console.log(
            `
            Surname: ${this._surname}
            Name: ${this._name}
            Patronymic: ${this._patronymic}
            BirthDate: ${this._birthdate}
            ID Type: ${this._id_type}
            ID series: ${this._ser}
            ID number: ${this._num}
            `
        );
    }
}