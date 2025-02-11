import { IOwner } from "./owner.js";
import { Body_Type, Car_Class } from "./enums.js";
export declare namespace Transport {
    interface IVehicle {
        brand: string;
        model: string;
        year: number;
        VIN: string;
        reg_number: string;
        owner_info: IOwner;
        print_info(): void;
        car_registration(): string;
    }
    class Vehicle implements IVehicle {
        private _brand;
        private _model;
        private _year;
        private _VIN;
        private _reg_number;
        private _owner_info;
        constructor(brand: string, model: string, year: number, VIN: string, reg_number: string, owner_info: IOwner);
        get brand(): string;
        get model(): string;
        get year(): number;
        get VIN(): string;
        get reg_number(): string;
        get owner_info(): IOwner;
        set brand(brand: string);
        set model(model: string);
        set year(year: number);
        set VIN(VIN: string);
        set reg_number(reg_number: string);
        set owner_info(owner_info: IOwner);
        print_info(): void;
        car_registration(): string;
    }
    interface ICar extends IVehicle {
        body_type: Body_Type;
        car_class: Car_Class;
    }
    class Car extends Vehicle implements ICar {
        private _body_type;
        private _car_class;
        constructor(brand: string, model: string, year: number, VIN: string, reg_number: string, owner_info: IOwner, body_type: Body_Type, car_class: Car_Class);
        get body_type(): Body_Type;
        get car_class(): Car_Class;
        set body_type(body_type: Body_Type);
        set car_class(car_class: Car_Class);
        print_info(): void;
    }
    interface IMotorbike extends IVehicle {
        frame_type: string;
        sports: boolean;
    }
    class Motorbike extends Vehicle implements IMotorbike {
        private _frame_type;
        private _sports;
        constructor(brand: string, model: string, year: number, VIN: string, reg_number: string, owner_info: IOwner, frame_type: string, sports: boolean);
        get frame_type(): string;
        get sports(): boolean;
        set frame_type(frame_type: string);
        set sports(sports: boolean);
        print_info(): void;
    }
    interface IVehicleStorage<T extends Vehicle> {
        creation_date: Date;
        data: T[];
        get_data(): T[];
        sort_by_model(): void;
        all_ends_with(pattern: string): T[];
    }
    class VehicleStorage<T extends Vehicle> implements IVehicleStorage<T> {
        private _creation_date;
        private _data;
        constructor(data: T[]);
        get creation_date(): Date;
        get data(): T[];
        get_data(): T[];
        sort_by_model(): void;
        all_ends_with(pattern: string): T[];
    }
}
