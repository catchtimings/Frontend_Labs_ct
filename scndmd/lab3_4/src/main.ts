import { Transport } from "./transport.js";
import { IDType, Body_Type, Car_Class } from "./enums.js";
import { Owner } from "./owner.js";

let owner1: Owner = new Owner("Petrov", "Petr", "Petrovich", new Date, IDType.DRIVER_LICENSE, 8948, 470864);
let owner2: Owner = new Owner("Ivan", "Ivanov", "Ivanovich", new Date, IDType.DRIVER_LICENSE, 9461, 604240);
let owner3: Owner = new Owner("Alexandrov", "Alexandr", "Alexandrovich", new Date, IDType.PASSPORT, 3319, 291934);
let owner4: Owner = new Owner("Vasin", "Vasiliy", "Vasiliyevich", new Date, IDType.PASSPORT, 3619, 857693);
let owner5: Owner = new Owner("Romanov", "Roman", "Romanovich", new Date, IDType.DRIVER_LICENSE, 8458, 835024);


let car1: Transport.Car = new Transport.Car("bmw", "m5", 2020, "1sdg2345yu6789a", "a000aa763ru", owner1, Body_Type.SEDAN, Car_Class.E);
let car2: Transport.Car = new Transport.Car("porsche", "911", 2023, "8sl3785sg387oi695", "a111aa763ru", owner2, Body_Type.COUPE, Car_Class.S);
let car3: Transport.Car = new Transport.Car("audi", "a7", 2023, "irugh8y34t848g934f", "o000oo777ru", owner3, Body_Type.FASTBACK, Car_Class.E);
let car4: Transport.Car = new Transport.Car("lada", "vesta", 2024, "iuhg8745hh65845", "v836ab799ru", owner4, Body_Type.SEDAN, Car_Class.B);
let car5: Transport.Car = new Transport.Car("lada", "granta", 2022, "ufbv8he85th7h75", "h254oe173ru", owner5, Body_Type.LIFTBACK, Car_Class.B);

//let bike1: Transport.Motorbike = new Transport.Motorbike("bmw", "r 1250 rt", 2021, "7gg66fs5366afds3", "0000aa763ru", owner2, "idk", false);


let storage: Transport.VehicleStorage<Transport.Car> = new Transport.VehicleStorage([car1, car2, car3, car4, car5]);

storage.sort_by_brand()
console.log(storage);

let models: Transport.Car[] = storage.all_ends_with("TA");
console.log(models);

const car_registration_certificate: string = car1.car_registration();
console.log(car_registration_certificate);

