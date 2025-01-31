const data: number[] = [];

const record = (param: number) => {
    data.push(param);
    console.log("Record: " + param + " added!");
}

function remove(): void{
    data.pop();
    console.log("Record removed!");
}


// Вариант 4
// Дополните код таким образом, чтобы вызов метода
// record выполнялся каждые 10 секунд до истечения 1
// минуты, при этом каждая запись должна удаляться
// после добавления через 10 секунд

console.log("Page is workning now...");

let sec: number = 10;
let timer = setInterval(() => {
    console.log("Прошло " + sec + " секунд.");
    record(12345);
    setTimeout(() => {
        remove();
    }, 10000);
    sec += 10;
}, 10000);


setTimeout(() => {
    clearInterval(timer);
    console.log("Запись остановлена.");
}, 60000);



// Реализуйте на ваш выбор функцию, которая возвращает функцию,
// которая в свою в свою очередь пишет результат в консоль некоторую
// строку. Вызвать данные функции, показав принцип работы замыканий.

function out_func() {
    let inner_param: number = 0;
    return function() {
        console.log(++inner_param);
    }
}

let inner_func = out_func();
for(let i = 0; i < 5; ++i){
    inner_func();
}