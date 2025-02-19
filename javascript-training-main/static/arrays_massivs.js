var arrays = [];
var index = 0;
var array_example = [1, 1.5, true, -100, "stroka"];
var dict = {'a': 2, "b": 5};

// arrays (массивы) - структура данных - обычно это список.


while (index <= 6) {
    // arrays.push(index);
    // index++; // Уменьшаем index(6) на 1 в каждой итерации.
    // выведет это: [ 1, 2, 3, 4, 5, 6 ]
    arrays.push(array_example[index]);
    index++;
}

// индексация тоже начинается с 0 в списках. В python у нас формат строк можно делать через f-строк (f-strings), а в js - через ` и ${}
console.log(`Это значение ключа a: ${dict.a}\nЭто у b: ${dict.b}`); // выведет значение ключа "a" и "b" в словаре
console.log(arrays); // [ 1, 1.5, 0, -100, 'stroka', undefined, undefined ]

var matrix = [
    [1, 2, 3], ["str", 5.6], [0, true]
];

matrix[0][1] = 90
console.log(matrix);