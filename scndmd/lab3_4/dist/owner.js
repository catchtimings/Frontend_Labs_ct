var Owner = /** @class */ (function () {
    function Owner(surname, name, patronymic, birthdate, id_type, ser, num) {
        this._surname = surname;
        this._name = name;
        this._patronymic = patronymic;
        this._birthdate = birthdate;
        this._id_type = id_type;
        this._ser = ser;
        this._num = num;
    }
    Object.defineProperty(Owner.prototype, "surname", {
        get: function () {
            return this._surname;
        },
        set: function (surname) {
            this._surname = surname;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Owner.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Owner.prototype, "patronymic", {
        get: function () {
            return this._patronymic;
        },
        set: function (patronymic) {
            this._patronymic = patronymic;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Owner.prototype, "birthdate", {
        get: function () {
            return this._birthdate;
        },
        set: function (birthdate) {
            this._birthdate = birthdate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Owner.prototype, "id_type", {
        get: function () {
            return this._id_type;
        },
        set: function (id_type) {
            this._id_type = id_type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Owner.prototype, "ser", {
        get: function () {
            return this._ser;
        },
        set: function (ser) {
            this._ser = ser;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Owner.prototype, "num", {
        get: function () {
            return this._num;
        },
        set: function (num) {
            this._num = num;
        },
        enumerable: false,
        configurable: true
    });
    Owner.prototype.print_info = function () {
        console.log("\n            Surname: ".concat(this._surname, "\n            Name: ").concat(this._name, "\n            Patronymic: ").concat(this._patronymic, "\n            BirthDate: ").concat(this._birthdate, "\n            ID Type: ").concat(this._id_type, "\n            ID series: ").concat(this._ser, "\n            ID number: ").concat(this._num, "\n            "));
    };
    return Owner;
}());
export { Owner };
