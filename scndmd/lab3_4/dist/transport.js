var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { sealed, up } from "./decorator.js";
export var Transport;
(function (Transport) {
    var Vehicle = /** @class */ (function () {
        function Vehicle(brand, model, year, VIN, reg_number, owner_info) {
            this._brand = brand;
            this._model = model;
            this._year = year;
            this._VIN = VIN;
            this._reg_number = reg_number;
            this._owner_info = owner_info;
        }
        Object.defineProperty(Vehicle.prototype, "brand", {
            get: function () {
                return this._brand;
            },
            set: function (brand) {
                this._brand = brand;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Vehicle.prototype, "model", {
            get: function () {
                return this._model;
            },
            set: function (model) {
                this._model = model;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Vehicle.prototype, "year", {
            get: function () {
                return this._year;
            },
            set: function (year) {
                this._year = year;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Vehicle.prototype, "VIN", {
            get: function () {
                return this._VIN;
            },
            set: function (VIN) {
                this._VIN = VIN;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Vehicle.prototype, "reg_number", {
            get: function () {
                return this._reg_number;
            },
            set: function (reg_number) {
                this._reg_number = reg_number;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Vehicle.prototype, "owner_info", {
            get: function () {
                return this._owner_info;
            },
            set: function (owner_info) {
                this._owner_info = owner_info;
            },
            enumerable: false,
            configurable: true
        });
        Vehicle.prototype.print_info = function () {
            console.log("\n                Brand: ".concat(this._brand, "\n                Model: ").concat(this._model, "\n                Year of release: ").concat(this._year, "\n                VIN: ").concat(this._VIN, "\n                Registration number: ").concat(this._reg_number, "\n                "));
        };
        Vehicle.prototype.car_registration = function () {
            var FIO = this._owner_info.surname + ' ' + this._owner_info.name + ' ' + this._owner_info.patronymic;
            var info = [this._VIN, FIO, this._reg_number];
            return JSON.stringify(info);
        };
        __decorate([
            up
        ], Vehicle.prototype, "brand", null);
        __decorate([
            up
        ], Vehicle.prototype, "model", null);
        __decorate([
            up
        ], Vehicle.prototype, "VIN", null);
        __decorate([
            up
        ], Vehicle.prototype, "reg_number", null);
        __decorate([
            up
        ], Vehicle.prototype, "print_info", null);
        __decorate([
            up
        ], Vehicle.prototype, "car_registration", null);
        Vehicle = __decorate([
            sealed
        ], Vehicle);
        return Vehicle;
    }());
    Transport.Vehicle = Vehicle;
    var Car = /** @class */ (function (_super) {
        __extends(Car, _super);
        function Car(brand, model, year, VIN, reg_number, owner_info, body_type, car_class) {
            var _this = _super.call(this, brand, model, year, VIN, reg_number, owner_info) || this;
            _this._body_type = body_type;
            _this._car_class = car_class;
            return _this;
        }
        Object.defineProperty(Car.prototype, "body_type", {
            get: function () {
                return this._body_type;
            },
            set: function (body_type) {
                this._body_type = body_type;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Car.prototype, "car_class", {
            get: function () {
                return this._car_class;
            },
            set: function (car_class) {
                this._car_class = car_class;
            },
            enumerable: false,
            configurable: true
        });
        Car.prototype.print_info = function () {
            _super.prototype.print_info.call(this);
            console.log("\n                Body type: ".concat(this._body_type, ";\n                Car class: ").concat(this._car_class, ";\n                "));
        };
        __decorate([
            up
        ], Car.prototype, "body_type", null);
        __decorate([
            up
        ], Car.prototype, "car_class", null);
        return Car;
    }(Vehicle));
    Transport.Car = Car;
    var Motorbike = /** @class */ (function (_super) {
        __extends(Motorbike, _super);
        function Motorbike(brand, model, year, VIN, reg_number, owner_info, frame_type, sports) {
            var _this = _super.call(this, brand, model, year, VIN, reg_number, owner_info) || this;
            _this._frame_type = frame_type;
            _this._sports = sports;
            return _this;
        }
        Object.defineProperty(Motorbike.prototype, "frame_type", {
            get: function () {
                return this._frame_type;
            },
            set: function (frame_type) {
                this._frame_type = frame_type;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Motorbike.prototype, "sports", {
            get: function () {
                return this._sports;
            },
            set: function (sports) {
                this._sports = sports;
            },
            enumerable: false,
            configurable: true
        });
        Motorbike.prototype.print_info = function () {
            _super.prototype.print_info.call(this);
            console.log("\n                Frame type: ".concat(this._frame_type, "\n                For sport: ").concat(this._sports, "\n                "));
        };
        return Motorbike;
    }(Vehicle));
    Transport.Motorbike = Motorbike;
    var VehicleStorage = /** @class */ (function () {
        function VehicleStorage(data) {
            this._creation_date = new Date();
            this._data = data;
        }
        Object.defineProperty(VehicleStorage.prototype, "creation_date", {
            get: function () {
                return this._creation_date;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VehicleStorage.prototype, "data", {
            get: function () {
                return this._data;
            },
            enumerable: false,
            configurable: true
        });
        VehicleStorage.prototype.get_data = function () {
            return this._data;
        };
        VehicleStorage.prototype.sort_by_brand = function () {
            this._data = this._data.sort(function (model1, model2) { return model1.model.toLocaleLowerCase().localeCompare(model2.model.toLocaleLowerCase()); });
        };
        VehicleStorage.prototype.all_ends_with = function (pattern) {
            var result = [];
            var data = this._data;
            for (var i = 0; i < data.length; ++i) {
                if (data[i].model.endsWith(pattern)) {
                    result.push(this._data[i]);
                }
            }
            return result;
        };
        return VehicleStorage;
    }());
    Transport.VehicleStorage = VehicleStorage;
})(Transport || (Transport = {}));
