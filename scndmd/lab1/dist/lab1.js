const multiply = (num1, num2) => {
    return num1 * num2;
};

const result = multiply(5, 10);

const jsonStringf = JSON.stringify(result)

console.log(result);
console.log(jsonStringf);