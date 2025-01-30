"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transport = void 0;
var Transport;
(function (Transport) {
    class Vehicle {
        constructor(brand, model, year, VIN, reg_number, owner_info) {
            this._brand = brand;
            this._model = model;
            this._year = year;
            this._VIN = VIN;
            this._reg_number = reg_number;
            this._owner_info = owner_info;
        }
        get brand() {
            return this._brand;
        }
        get model() {
            return this._model;
        }
        get year() {
            return this._year;
        }
        get VIN() {
            return this._VIN;
        }
        get reg_number() {
            return this._reg_number;
        }
        get owner_info() {
            return this._owner_info;
        }
        set brand(brand) {
            this._brand = brand;
        }
        set model(model) {
            this._model = model;
        }
        set year(year) {
            this._year = year;
        }
        set VIN(VIN) {
            this._VIN = VIN;
        }
        set reg_number(reg_number) {
            this._reg_number = reg_number;
        }
        set owner_info(owner_info) {
            this._owner_info = owner_info;
        }
        print_info() {
            console.log(`
                Brand: ${this._brand}
                Model: ${this._model}
                Year of release: ${this._year}
                VIN: ${this._VIN}
                Registration number: ${this._reg_number}
                `);
        }
    }
    Transport.Vehicle = Vehicle;
    class Car extends Vehicle {
        constructor(brand, model, year, VIN, reg_number, owner_info, body_type, car_class) {
            super(brand, model, year, VIN, reg_number, owner_info);
            this._body_type = body_type;
            this._car_class = car_class;
        }
        get body_type() {
            return this._body_type;
        }
        get car_class() {
            return this._car_class;
        }
        set body_type(body_type) {
            this._body_type = body_type;
        }
        set car_class(car_class) {
            this._car_class = car_class;
        }
        print_info() {
            super.print_info();
            console.log(`
                Body type: ${this._body_type};
                Car class: ${this._car_class};
                `);
        }
    }
    Transport.Car = Car;
    class Motorbike extends Vehicle {
        constructor(brand, model, year, VIN, reg_number, owner_info, frame_type, sports) {
            super(brand, model, year, VIN, reg_number, owner_info);
            this._frame_type = frame_type;
            this._sports = sports;
        }
        get frame_type() {
            return this._frame_type;
        }
        get sports() {
            return this._sports;
        }
        set frame_type(frame_type) {
            this._frame_type = frame_type;
        }
        set sports(sports) {
            this._sports = sports;
        }
        print_info() {
            super.print_info();
            console.log(`
                Frame type: ${this._frame_type}
                For sport: ${this._sports}
                `);
        }
    }
    Transport.Motorbike = Motorbike;
    class VehicleStorage {
        constructor(data) {
            this._creation_date = new Date();
            this._data = data;
        }
        get creation_date() {
            return this._creation_date;
        }
        get data() {
            return this._data;
        }
        get_data() {
            return this._data;
        }
    }
    Transport.VehicleStorage = VehicleStorage;
})(Transport || (exports.Transport = Transport = {}));
