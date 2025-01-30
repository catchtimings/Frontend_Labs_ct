import { Transport } from "./transport.js";
import { IDType, Body_Type, Car_Class } from "./enums.js";
import { Owner } from "./owner.js";

import Car = Transport.Car;
import Motorbike = Transport.Motorbike;
import VehicleStorage = Transport.VehicleStorage;

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

