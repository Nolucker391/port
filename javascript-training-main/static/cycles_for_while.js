// for (var number = 100; number > 1; number /= 2) {
//     console.log(number);
// }
//
//
// var x = 0;
//
// do {
//     x++;
//     console.log(x);
// } while (x < 10);
//
var even_nums = [];
var odd_nums = [];

for (var i = 0; i < 10; i++) {
    if (i % 2 == 0)
        even_nums.push(i);
        // console.log(`Это четные числа: ${i}`);
    else
        odd_nums.push(i);
        // console.log(`Это нечетные числа: ${i}`);
}

console.log(`Это четные числа: ${even_nums}`);
console.log(`Это нечетные числа: ${odd_nums}`);


for (var i = 0; i < even_nums.length; i++) {
    even_nums[i] *= 2;
}

console.log(`Итоговый массив четных чисел: ${even_nums}`);