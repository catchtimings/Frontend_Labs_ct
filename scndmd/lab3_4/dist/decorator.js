export function sealed(constructor) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}
export function up(target, method, descriptor) {
    var getter = descriptor.get;
    if (!getter) {
        return descriptor;
    }
    descriptor.get = function () {
        var result = getter.apply(this);
        if (typeof result === "string") {
            return result.toUpperCase();
        }
    };
    return descriptor;
}
