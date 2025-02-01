export function sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}


export function up(target: Object, method: string, descriptor: PropertyDescriptor) {
    const getter = descriptor.get;

    if(!getter){
        return descriptor;
    }

    descriptor.get = function() {
        let result = getter.apply(this);

        if(typeof result === "string"){
            return result.toUpperCase();
        }

    }

    return descriptor;
}