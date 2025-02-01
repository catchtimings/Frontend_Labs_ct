import { Transport } from "./transport.js";
import { IDType, Body_Type, Car_Class } from "./enums.js";
import { Owner } from "./owner.js";

let owner1: Owner = new Owner("Petrov", "Petr", "Petrovich", new Date, IDType.DRIVER_LICENSE, 8948, 470864);
let car1: Transport.Car = new Transport.Car("bmw", "m5", 2020, "1sdg2345yu6789a", "a000aa763ru", owner1, Body_Type.SEDAN, Car_Class.E);


let owner2: Owner = new Owner("Ivan", "Ivanov", "Ivanovich", new Date, IDType.DRIVER_LICENSE, 9461, 604240);
let car2: Transport.Car = new Transport.Car("porsche", "911", 2023, "8sl3785sg387oi695", "a111aa763ru", owner2, Body_Type.COUPE, Car_Class.S);


let owner3: Owner = new Owner("Alexandrov", "Alexandr", "Alexandrovich", new Date, IDType.PASSPORT, 3319, 291934);
let bike1: Transport.Motorbike = new Transport.Motorbike("bmw", "r 1250 rt", 2021, "7gg66fs5366afds3", "0000aa763ru", owner2, "idk", false);


let storage: Transport.VehicleStorage<Transport.Car> = new Transport.VehicleStorage([car1, car2]);
console.log("Vehicle storage: ");
let data: Transport.Car[] = storage.get_data();
console.log(data);

