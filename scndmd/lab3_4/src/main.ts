enum IDType {
    PASSPORT = "Passport",
    DRIVER_LICENSE = "Driver Lisence"
}

enum Body_Type {
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

enum Car_Class {
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
    print_info() : void;
}

class Owner implements IOwner  {
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

interface IVehicle {
    brand: string;
    model: string;
    year: number;
    VIN: number;
    reg_number: string;
    owner_info: IOwner;
    print_info() : void;
}

class Vehicle implements IVehicle {
    private _brand: string;
    private _model: string;
    private _year: number;
    private _VIN: number;
    private _reg_number: string;
    private _owner_info: IOwner;

    constructor(brand: string, model: string, year: number, VIN: number, reg_number: string, owner_info: IOwner){
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

    set brand(brand: string){
        this._brand = brand;
    }

    set model(model: string){
        this._model = model;
    }

    set year(year: number) {
        this._year = year;
    }

    set VIN(VIN: number) {
        this._VIN = VIN;
    }

    set reg_number(reg_number: string) {
        this._reg_number = reg_number;
    }

    set owner_info(owner_info: IOwner) {
        this._owner_info = owner_info;
    }


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

interface ICar extends IVehicle {
    body_type: Body_Type;
    car_class: Car_Class;
}

class Car extends Vehicle implements ICar { 
    private _body_type: Body_Type;
    private _car_class: Car_Class;

    constructor(brand: string, model: string, year: number, VIN: number, reg_number: string, owner_info: IOwner, body_type: Body_Type, car_class: Car_Class){
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

interface IMotorbike extends IVehicle {
    frame_type: string;
    sports: boolean;
}

class Motorbike extends Vehicle implements IMotorbike {
    private _frame_type: string;
    private _sports: boolean;

    constructor(brand: string, model: string, year: number, VIN: number, reg_number: string, owner_info: IOwner, frame_type: string, sports: boolean){
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


interface IVehicleStorage<T extends Vehicle> {
    creation_date: Date;
    data: T[];
    get_data(): T[];
}

class VehicleStorage<T extends Vehicle> implements IVehicleStorage<T> {
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

const owner1: Owner = new Owner("Petrov", "Petr", "Petrovich", new Date, IDType.DRIVER_LICENSE, 8948, 470864);
const car1: Car = new Car("BMW", "M5", 2020, 123456789, "A000AA763RU", owner1, Body_Type.SEDAN, Car_Class.E);
console.log("First owner: ");
owner1.print_info();
console.log("His vehicle: ");
car1.print_info();

const owner2: Owner = new Owner("Ivan", "Ivanov", "Ivanovich", new Date, IDType.DRIVER_LICENSE, 9461, 604240);
const car2: Car = new Car("Porsche", "911", 2023, 83785387695, "A111AA763RU", owner2, Body_Type.COUPE, Car_Class.S);
console.log("First owner: ");
owner2.print_info();
console.log("His vehicle: ");
car2.print_info();


const owner3: Owner = new Owner("Alexandrov", "Alexandr", "Alexandrovich", new Date, IDType.PASSPORT, 3319, 291934);
const bike: Motorbike = new Motorbike("BMW", "R 1250 RT", 2021, 65457838458, "0000AA763RU", owner2, "idk", false);
console.log("Third owner: ");
owner3.print_info();
console.log("His vehicle: ");
bike.print_info();


let storage: VehicleStorage<Car> = new VehicleStorage([car1, car2]);
console.log("Vehicle storage: ");
console.log(storage.get_data());

