const number = 111;
var flag_house  = false;
// это как logger в python, уровни логирования. error, log, warn, debug
console.log("Число: ", number);


// ; - означает что строка завершена
// let, const (константы/неизменяемый тип), var (variable - переменная/изменяемый)

// Типы данных в JS - необязательная (она определяет автоматические) Н-р: int, str, float ..

// В условных операторах есть так же: || - означает "или", && - означает "и". В python выглядило бы так, or(или) и and(и)



if (number < 100) {
    console.log(number, "меньше 100");
} else if (number > 100) {
    flag_house  = true;
    console.log(number, "больше 100")
} else {
    console.log("Вы передали не число!")
}

console.log("Дом: ", flag_house );


switch (number) {
    case 111:
        console.log("Переменная со значением 111");
        break;
    default:
        console.log("Default");
        break;
}

// switch - проверяем переменную number на case(случай) - что переменная number == 111. Чем это удобно, в отличии от if else?
// Удобно когда нужно проверить переменную на несколько значений. default - если проверки не прошли