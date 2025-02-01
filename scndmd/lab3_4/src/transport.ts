import { IOwner } from "./owner.js";
import { Body_Type, Car_Class } from "./enums.js";
import { sealed, up } from "./decorator.js";

export namespace Transport {
    
    export interface IVehicle {
        brand: string;
        model: string;
        year: number;
        VIN: string;
        reg_number: string;
        owner_info: IOwner;
        print_info() : void;
    }
    
    @sealed
    export class Vehicle implements IVehicle {
        private _brand: string;
        private _model: string;
        private _year: number;
        private _VIN: string;
        private _reg_number: string;
        private _owner_info: IOwner;
    
        constructor(brand: string, model: string, year: number, VIN: string, reg_number: string, owner_info: IOwner){
            this._brand = brand;
            this._model = model;
            this._year = year;
            this._VIN = VIN;
            this._reg_number = reg_number;
            this._owner_info = owner_info;
        }
    
        @up
        get brand() {
            return this._brand;
        }
    
        @up
        get model() {
            return this._model;
        }
        
        get year() {
            return this._year;
        }
    
        @up
        get VIN() {
            return this._VIN;
        }
    
        @up
        get reg_number() {
            return this._reg_number;
        }
    
        get owner_info() {
            return this._owner_info;
        }
    
        set brand(brand: string){
            this._brand = brand;
        }
    
        set model(model: string){
            this._model = model;
        }
    
        set year(year: number) {
            this._year = year;
        }
    
        set VIN(VIN: string) {
            this._VIN = VIN;
        }
    
        set reg_number(reg_number: string) {
            this._reg_number = reg_number;
        }
    
        set owner_info(owner_info: IOwner) {
            this._owner_info = owner_info;
        }
    
        @up
        print_info(): void {
            console.log(
                `
                Brand: ${this._brand}
                Model: ${this._model}
                Year of release: ${this._year}
                VIN: ${this._VIN}
                Registration number: ${this._reg_number}
                `
            );
        }
    }
    
     export interface ICar extends IVehicle {
        body_type: Body_Type;
        car_class: Car_Class;
    }
    
    export class Car extends Vehicle implements ICar { 
        private _body_type: Body_Type;
        private _car_class: Car_Class;
    
        constructor(brand: string, model: string, year: number, VIN: string, reg_number: string, owner_info: IOwner, body_type: Body_Type, car_class: Car_Class){
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
    
        set body_type(body_type: Body_Type) {
            this._body_type = body_type;
        }
    
        set car_class(car_class: Car_Class) {
            this._car_class = car_class;
        }
        
        
        print_info(): void {
            super.print_info();
            console.log(
                `
                Body type: ${this._body_type};
                Car class: ${this._car_class};
                `
            );
        }
    }
    
    export interface IMotorbike extends IVehicle {
        frame_type: string;
        sports: boolean;
    }
    
    export class Motorbike extends Vehicle implements IMotorbike {
        private _frame_type: string;
        private _sports: boolean;
    
        constructor(brand: string, model: string, year: number, VIN: string, reg_number: string, owner_info: IOwner, frame_type: string, sports: boolean){
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
    
        set frame_type(frame_type: string) {
            this._frame_type = frame_type;
        }
    
        set sports(sports: boolean) {
            this._sports = sports;
        }
    
        print_info(): void {
            super.print_info();
            console.log(
                `
                Frame type: ${this._frame_type}
                For sport: ${this._sports}
                `
            );
        }
    }
    
    
    export interface IVehicleStorage<T extends Vehicle> {
        creation_date: Date;
        data: T[];
        get_data(): T[];
    }
    
    export class VehicleStorage<T extends Vehicle> implements IVehicleStorage<T> {
        private _creation_date: Date;
        private _data: T[];
        
        constructor(data: T[]){
            this._creation_date = new Date();
            this._data = data;
        }
    
        get creation_date() {
            return this._creation_date;
        }
    
        get data() {
            return this._data;
        }
    
        get_data(): T[] {
            return this._data;
        }
    }
}