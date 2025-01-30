var IDType;
(function (IDType) {
    IDType["PASSPORT"] = "Passport";
    IDType["DRIVER_LICENSE"] = "Driver Lisence";
})(IDType || (IDType = {}));
var Body_Type;
(function (Body_Type) {
    Body_Type["SEDAN"] = "Sedan";
    Body_Type["COUPE"] = "Coupe";
    Body_Type["HATCHBACK"] = "Hatchback";
    Body_Type["LIFTBACK"] = "Liftback";
    Body_Type["FASTBACK"] = "Fastback";
    Body_Type["UNIVERSAL"] = "Univresal";
    Body_Type["CROSSOVER"] = "Crossover";
    Body_Type["OFF_ROAD"] = "Off-road";
    Body_Type["PICKUP"] = "Pickup truck";
    Body_Type["VAN"] = "Van";
    Body_Type["MINIVAN"] = "Minivan";
    Body_Type["COMPACT"] = "Compact";
    Body_Type["CABRIOLET"] = "Cabriolet";
})(Body_Type || (Body_Type = {}));
var Car_Class;
(function (Car_Class) {
    Car_Class["A"] = "A";
    Car_Class["B"] = "B";
    Car_Class["C"] = "C";
    Car_Class["D"] = "D";
    Car_Class["E"] = "E";
    Car_Class["F"] = "F";
    Car_Class["S"] = "S";
    Car_Class["M"] = "M";
    Car_Class["J"] = "J";
})(Car_Class || (Car_Class = {}));
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
const owner1 = new Owner("Petrov", "Petr", "Petrovich", new Date, IDType.DRIVER_LICENSE, 8948, 470864);
const car1 = new Car("BMW", "M5", 2020, 123456789, "A000AA763RU", owner1, Body_Type.SEDAN, Car_Class.E);
console.log("First owner: ");
owner1.print_info();
console.log("His vehicle: ");
car1.print_info();
const owner2 = new Owner("Ivan", "Ivanov", "Ivanovich", new Date, IDType.DRIVER_LICENSE, 9461, 604240);
const car2 = new Car("Porsche", "911", 2023, 83785387695, "A111AA763RU", owner2, Body_Type.COUPE, Car_Class.S);
console.log("First owner: ");
owner2.print_info();
console.log("His vehicle: ");
car2.print_info();
const owner3 = new Owner("Alexandrov", "Alexandr", "Alexandrovich", new Date, IDType.PASSPORT, 3319, 291934);
const bike = new Motorbike("BMW", "R 1250 RT", 2021, 65457838458, "0000AA763RU", owner2, "idk", false);
console.log("Third owner: ");
owner3.print_info();
console.log("His vehicle: ");
bike.print_info();
let storage = new VehicleStorage([car1, car2]);
console.log("Vehicle storage: ");
console.log(storage.get_data());
