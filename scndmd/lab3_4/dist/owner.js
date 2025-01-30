"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Owner = void 0;
class Owner {
    constructor(surname, name, patronymic, birthdate, id_type, ser, num) {
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
    get name() {
        return this._name;
    }
    get patronymic() {
        return this._patronymic;
    }
    get birthdate() {
        return this._birthdate;
    }
    get id_type() {
        return this._id_type;
    }
    get ser() {
        return this._ser;
    }
    get num() {
        return this._num;
    }
    set surname(surname) {
        this._surname = surname;
    }
    set name(name) {
        this._name = name;
    }
    set patronymic(patronymic) {
        this._patronymic = patronymic;
    }
    set birthdate(birthdate) {
        this._birthdate = birthdate;
    }
    set id_type(id_type) {
        this._id_type = id_type;
    }
    set ser(ser) {
        this._ser = ser;
    }
    set num(num) {
        this._num = num;
    }
    print_info() {
        console.log(`
            Surname: ${this._surname}
            Name: ${this._name}
            Patronymic: ${this._patronymic}
            BirthDate: ${this._birthdate}
            ID Type: ${this._id_type}
            ID series: ${this._ser}
            ID number: ${this._num}
            `);
    }
}
exports.Owner = Owner;
