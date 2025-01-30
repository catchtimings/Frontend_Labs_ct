declare enum IDType {
    PASSPORT = "Passport",
    DRIVER_LICENSE = "Driver Lisence"
}
declare enum Body_Type {
    SEDAN = "Sedan",
    COUPE = "Coupe",
    HATCHBACK = "Hatchback",
    LIFTBACK = "Liftback",
    FASTBACK = "Fastback",
    UNIVERSAL = "Univresal",
    CROSSOVER = "Crossover",
    OFF_ROAD = "Off-road",
    PICKUP = "Pickup truck",
    VAN = "Van",
    MINIVAN = "Minivan",
    COMPACT = "Compact",
    CABRIOLET = "Cabriolet"
}
declare enum Car_Class {
    A = "A",
    B = "B",
    C = "C",
    D = "D",
    E = "E",
    F = "F",
    S = "S",
    M = "M",
    J = "J"
}
interface IOwner {
    surname: string;
    name: string;
    patronymic: string;
    birthdate: Date;
    id_type: IDType;
    ser: number;
    num: number;
    print_info(): void;
}
declare class Owner implements IOwner {
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
interface IVehicle {
    brand: string;
    model: string;
    year: number;
    VIN: number;
    reg_number: string;
    owner_info: IOwner;
    print_info(): void;
}
declare class Vehicle implements IVehicle {
    private _brand;
    private _model;
    private _year;
    private _VIN;
    private _reg_number;
    private _owner_info;
    constructor(brand: string, model: string, year: number, VIN: number, reg_number: string, owner_info: IOwner);
    get brand(): string;
    get model(): string;
    get year(): number;
    get VIN(): number;
    get reg_number(): string;
    get owner_info(): IOwner;
    set brand(brand: string);
    set model(model: string);
    set year(year: number);
    set VIN(VIN: number);
    set reg_number(reg_number: string);
    set owner_info(owner_info: IOwner);
    print_info(): void;
}
interface ICar extends IVehicle {
    body_type: Body_Type;
    car_class: Car_Class;
}
declare class Car extends Vehicle implements ICar {
    private _body_type;
    private _car_class;
    constructor(brand: string, model: string, year: number, VIN: number, reg_number: string, owner_info: IOwner, body_type: Body_Type, car_class: Car_Class);
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
declare class Motorbike extends Vehicle implements IMotorbike {
    private _frame_type;
    private _sports;
    constructor(brand: string, model: string, year: number, VIN: number, reg_number: string, owner_info: IOwner, frame_type: string, sports: boolean);
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
}
declare class VehicleStorage<T extends Vehicle> implements IVehicleStorage<T> {
    private _creation_date;
    private _data;
    constructor(data: T[]);
    get creation_date(): Date;
    get data(): T[];
    get_data(): T[];
}
declare const owner1: Owner;
declare const car1: Car;
declare const owner2: Owner;
declare const car2: Car;
declare const owner3: Owner;
declare const bike: Motorbike;
declare let storage: VehicleStorage<Car>;
